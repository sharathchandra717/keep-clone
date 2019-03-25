import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import SimpleCrypto from "simple-crypto-js";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private readonly http: HttpClient) { }

  login(payload) {
    // let _secretKey;
    // const simpleCrypto = new SimpleCrypto(_secretKey);
    return this.http.post("http://localhost:3000/api/auth", payload);
  }
}
