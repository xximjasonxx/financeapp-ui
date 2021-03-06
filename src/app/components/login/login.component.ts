import { Component } from '@angular/core';
import { UserLoginRequest } from '../../models/UserLoginRequest';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { ContextService } from '../../services/context.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  request: UserLoginRequest;
  isBusy: boolean;

  constructor(
    private userService: UserService,
    private contextService: ContextService,
    private router: Router
  ) {
    this.request = new UserLoginRequest();
  }

  login(): void {
    this.isBusy = true;
    this.userService.login(this.request)
      .then((userInfo) => {
        this.isBusy = false;
        this.contextService.setUserInfo(userInfo),
        this.router.navigate(['/accounts']);
      })
      .catch((error) => {
        this.isBusy = false;
        alert(error.message);
      });
  }
}
