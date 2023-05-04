import {HttpHeaders} from "@angular/common/http";

export abstract class FunixprodHttpClient {

  private readonly captchaHeaderCode: string = 'X-Captcha-Google-Code';

  protected headers = new HttpHeaders({
    'Content-Type': 'application/json'
  })

  protected constructor() {
    const bearerToken: string | null = this.getBearer();
    if (bearerToken !== null) {
      this.headers = this.headers.append('Authorization', 'Bearer ' + bearerToken);
    }
  }

  protected addCaptchaToHeader(captchaCode: string) {
    this.headers = this.headers.set(this.captchaHeaderCode, captchaCode);
  }

  protected getBearer(): string | null {
    return localStorage.getItem('user-token-requests');
  }

}
