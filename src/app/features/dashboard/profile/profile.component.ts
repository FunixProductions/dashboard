import {Component, OnInit} from '@angular/core';
import {UserDTO} from "../../../services/funixproductions-api/user/dtos/user-dto";
import {UserAuthService} from "../../../services/funixproductions-api/user/services/user-auth-service";
import TwitchClientTokenDTO from "../../../services/funixproductions-api/external_api/twitch/dtos/TwitchClientTokenDTO";
import {
  TwitchAuthService
} from "../../../services/funixproductions-api/external_api/twitch/services/twitch-auth-service";
import {TwitchTokenType} from "../../../services/funixproductions-api/external_api/twitch/enums/TwitchTokenType";
import {faTwitch} from '@fortawesome/free-brands-svg-icons';
import NotificationsService from "../../../services/core/services/NotificationsService";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  faTwitch = faTwitch;

  user: UserDTO = new UserDTO();
  twitchClientToken: TwitchClientTokenDTO | null = null;

  constructor(private userAuthService: UserAuthService,
              private twitchAuthService: TwitchAuthService,
              private notificationService: NotificationsService) {
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
        error: (error: HttpErrorResponse) => {
          this.notificationService.onErrorRequest(error, 'Erreur lors de la récupération de l\'url de connexion Twitch');
        }
      });
    }
  }

}
