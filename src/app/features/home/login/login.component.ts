import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ReCaptchaV3Service} from "ng-recaptcha";
import {environment} from "../../../../environments/environment";
import NotificationsService from "../../../services/NotificationService";
import {HttpClient} from "@angular/common/http";
import {
    ErrorDto,
    FunixprodHttpClient,
    UserAuthService,
    UserLoginDTO,
    UserTokenDTO
} from "@funixproductions/funixproductions-requests";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    private readonly userAuthService: UserAuthService;

    username: string = '';
    password: string = '';
    stayLogin: boolean = false;

    googleAuthRedirectUri: string = environment.funixproductionsApiUrl + 'google/auth/verifyGoogleIdToken?origin=funixproductions-dashboard';

    constructor(httpClient: HttpClient,
                private reCaptchaService: ReCaptchaV3Service,
                private router: Router,
                private notificationService: NotificationsService) {
        this.userAuthService = new UserAuthService(httpClient, environment.production);
        this.canActivate();
    }

    canActivate(): void {
        this.userAuthService.currentUser().subscribe({
            next: () => {
                this.router.navigate(['dashboard']);
            }
        });
    }

    ngOnInit(): void {
        // @ts-ignore
        window.onGoogleLibraryLoad = () => {
            //@ts-ignore
            google.accounts.id.initialize({
                client_id: environment.googleClientId,
                login_uri: this.googleAuthRedirectUri,
                context: 'signin',
                ux_mode: 'redirect',
                auto_prompt: false,
            });

            //@ts-ignore
            google.accounts.id.renderButton(
                document.getElementById('googleButtonDiv'),
                {
                    type: 'standard',
                    shape: 'rectangular',
                    theme: 'outline',
                    text: 'signin_with',
                    size: 'large',
                    locale: 'fr',
                    logo_alignment: 'left'
                }
            );
        }
    }

    login(): void {
        const loginRequest: UserLoginDTO = new UserLoginDTO();
        loginRequest.username = this.username;
        loginRequest.password = this.password;
        loginRequest.stayConnected = this.stayLogin;

        this.reCaptchaService.execute('login').subscribe((token: string) => {
            this.userAuthService.login(loginRequest, token).subscribe({
                next: async (loginDto: UserTokenDTO) => {
                    if (loginDto.token) {
                        localStorage.setItem(FunixprodHttpClient.accessTokenLocalStorageName, loginDto.token);
                        console.log(localStorage.getItem(FunixprodHttpClient.accessTokenLocalStorageName));
                        this.router.navigate(['dashboard']);
                    } else {
                        this.notificationService.error('Erreur de connection. Veuillez recommencer.')
                    }
                },
                error: (error: ErrorDto) => {
                    this.notificationService.onErrorRequest(error);
                }
            });
        });
    }

}
