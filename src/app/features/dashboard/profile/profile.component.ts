import {Component, OnInit} from '@angular/core';
import {faTwitch} from '@fortawesome/free-brands-svg-icons';
import {HttpClient} from "@angular/common/http";
import {
  TwitchAuthService,
  TwitchClientTokenDTO,
  TwitchTokenType,
  UserAuthService,
  UserDTO
} from "@funixproductions/funixproductions-requests";
import NotificationsService from "../../../services/NotificationService";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private readonly userAuthService: UserAuthService;
  private readonly twitchAuthService: TwitchAuthService;

  faTwitch = faTwitch;

  user: UserDTO = new UserDTO();
  twitchClientToken: TwitchClientTokenDTO | null = null;

  constructor(httpClient: HttpClient,
              private notificationService: NotificationsService) {
    this.userAuthService = new UserAuthService(httpClient, environment.production);
    this.twitchAuthService = new TwitchAuthService(httpClient, environment.production);
  }

  ngOnInit(): void {
    this.userAuthService.currentUser().subscribe(user => {
      this.user = user;
    });

    this.twitchAuthService.getTwitchAccessTokenSession().subscribe({
      next: (twitchClientToken: TwitchClientTokenDTO) => {
        this.twitchClientToken = twitchClientToken;
      }
    });
  }

  clickTwitchButton() {
    if (this.twitchClientToken == null) {
      this.twitchAuthService.getAuthClientUrl(TwitchTokenType.STREAMER).subscribe({
        next: (twitchAuthUrl: string) => {
          window.open(twitchAuthUrl, "TwitchAuth", "resizable=no, toolbar=no, scrollbars=no, menubar=no, status=no, directories=no, location=no, width=1000, height=1000, left=10 top=100");
        },
        error: (error) => {
          this.notificationService.onErrorRequest(error, 'Erreur lors de la récupération de l\'url de connexion Twitch');
        }
      });
    }
  }

  requestValidationCodeEmail() {
    this.userAuthService.requestValidationCode().subscribe({
      next: () => {
        this.notificationService.success('Un email de validation vous a été envoyé.');
      },
      error: (error) => {
        this.notificationService.onErrorRequest(error, 'Erreur lors de l\'envoi de l\'email de validation');
      }
    });
  }

}
