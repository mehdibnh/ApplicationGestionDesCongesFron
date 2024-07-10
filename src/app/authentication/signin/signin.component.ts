import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';
import {AuthService} from 'app/services/auth.service';
import {UnsubscribeOnDestroyAdapter} from '@shared';
import {Role} from "../../models/role";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent extends UnsubscribeOnDestroyAdapter implements OnInit {
  authForm!: UntypedFormGroup;
  submitted = false;
  loading = false;
  error = '';
  hide = true;

  constructor(
      private formBuilder: UntypedFormBuilder,
      private router: Router,
      private authService: AuthService
  ) {
    super();
  }

  ngOnInit() {
    this.authForm = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  get f() {
    return this.authForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.loading = true;
    this.error = '';

    if (this.authForm.invalid) {
      this.error = 'Email and Password are not valid!';
      this.loading = false;
      return;
    }

    this.authService
        .login(this.f['email'].value, this.f['password'].value)
        .subscribe(
            (res) => {
              if (res) {
                setTimeout(() => {
                  const currentUser = this.authService.currentUserValue;
                  if (currentUser) {
                    const role = currentUser.role;
                    if (role === Role.Admin) {
                      this.router.navigate(['/admin/dashboard/main']);
                    } else if (role === Role.Employee) {
                      this.router.navigate(['/employee/dashboard']);
                    } else {
                      this.router.navigate(['/authentication/signin']);
                    }
                  } else {
                    this.error = 'Invalid Login';
                  }
                  this.loading = false;
                }, 1000);
              } else {
                this.error = 'Invalid Login';
                this.loading = false;
              }
            },
            (error) => {
              this.error = 'Invalid Login';
              this.submitted = false;
              this.loading = false;
            }
        );
  }
}
