import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SettingsService } from '@core/services/settings.service';
import { LoginAuthService } from './login.auth.service';

@Component({
  selector: 'app-pages-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  valForm: FormGroup;

  constructor(public settings: SettingsService, fb: FormBuilder, private router: Router, private authService: LoginAuthService) {
    this.valForm = fb.group({
      email: [null, Validators.compose([Validators.required, Validators.email])],
      password: [null, Validators.required],
      remember_me: [null]
    });
  }

  submit() {

    // tslint:disable-next-line:forin
    for (const i in this.valForm.controls) {
      this.valForm.controls[i].markAsDirty();
    }
    if (this.valForm.valid) {
      console.log('Valid!');
      console.log(this.valForm.value);
     // this.router.navigate(['dashboard']);
    }
      this.authService.login().subscribe(
          () => {
              if (this.authService.isLoggedIn) {
                  const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/dashboard/v1';
                  this.router.navigate([redirect]);
              }
          });
  }
}
