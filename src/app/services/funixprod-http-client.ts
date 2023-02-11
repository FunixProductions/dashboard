import {HttpHeaders} from "@angular/common/http";

export abstract class FunixprodHttpClient {

  protected headers = new HttpHeaders({
    'Content-Type': 'application/json'
  })

  protected constructor() {
    const bearerToken: string | null = this.getBearer();
    if (bearerToken !== null) {
      this.headers = this.headers.append('Authorization', 'Bearer ' + bearerToken);
    }
  }

  protected getBearer(): string | null {
    return localStorage.getItem('user-token-requests');
  }

}
