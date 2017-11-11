import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SettingsService } from '@core/services/settings.service';
import { HttpService } from '@core/services/http.service';
import { LoginAuthService } from './login.auth.service';

@Component({
  selector: 'app-pages-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  valForm: FormGroup;

  constructor(public settings: SettingsService, fb: FormBuilder, private router: Router, private authService: LoginAuthService, private service: HttpService) {
    this.valForm = fb.group({
      email: [null, Validators.required],
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
      this.service.login(this.valForm.value).subscribe((resp) => {
          console.log(resp);
          console.log("login success");
      });
      this.router.navigate(['dashboard']);
    }
    console.log(this.valForm.value);
    const FormVal = {
        'username': this.valForm.value.email,
        'password': this.valForm.value.password
    };
    this.authService.loginObservable(FormVal).subscribe(
          (res) => {
              console.log(this.valForm.value);
              console.log(res);
              if (res.TOKEN) {
                  const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/dashboard/v1';
                  this.router.navigate([redirect]);
                  console.log(sessionStorage.getItem('TOKEN'));
                  this.authService.getUsers().subscribe(
                      (response) => {
                          console.log(response);
                      }
                  );
              }
          });
  }
}
