import {HttpHeaders} from "@angular/common/http";

export abstract class FunixprodHttpClient {

  protected getBearer(): string | null {
    return localStorage.getItem(FunixprodHttpClient.accessTokenLocalStorageName);
  }

  public static readonly accessTokenLocalStorageName: string = 'user-token-requests'
  private static readonly captchaHeaderCode: string = 'X-Captcha-Google-Code';
  private static readonly headerAuth: string = 'Authorization';
  private static readonly bearerPrefix: string = 'Bearer';

  protected getHeaders(captchaCode: string = ''): HttpHeaders {
    let headersToSend = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    if (captchaCode.length > 0) {
      headersToSend = headersToSend.set(FunixprodHttpClient.captchaHeaderCode, captchaCode);
    }

    const bearerToken: string | null = localStorage.getItem(FunixprodHttpClient.accessTokenLocalStorageName);
    if (bearerToken !== null) {
      headersToSend = headersToSend.append(FunixprodHttpClient.headerAuth, FunixprodHttpClient.bearerPrefix + ' ' + bearerToken);
    }

    return headersToSend;
  }

}
