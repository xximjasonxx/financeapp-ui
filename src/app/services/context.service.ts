import { Injectable } from '@angular/core';
import { UserInfo } from '../models/UserInfo';

@Injectable({
  providedIn: 'root'
})
export class ContextService {
  private _userInfo: UserInfo;

  constructor() { }

  getUserInfo(): UserInfo {
    return this._userInfo;
  }

  setUserInfo(value: UserInfo): void {
    this._userInfo = value;
  }
}
