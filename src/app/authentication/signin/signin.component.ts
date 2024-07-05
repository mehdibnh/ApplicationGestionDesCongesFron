import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UntypedFormBuilder,UntypedFormGroup,Validators,} from '@angular/forms';
import { Role } from 'app/models/role';
import { AuthService } from 'app/services/auth.service';
import { UnsubscribeOnDestroyAdapter } from '@shared';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent
  extends UnsubscribeOnDestroyAdapter
  implements OnInit
{
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
      username: [null,Validators.required],
      password: [null,Validators.required],
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
      this.error = 'Username and Password not valid !';
      return;
    } else {
      this.subs.sink = this.authService
        .login(this.f['username'].value, this.f['password'].value)
        .subscribe(
          (res) => {
            if (res) {
              setTimeout(() => {
                const role = this.authService.currentUserValue.role;
                console.log(this.authService.currentUserValue.role)
                console.log(role === Role.Admin)
                if ( role === Role.Admin  || role === Role.SuperAdmin) {
                  this.router.navigate(['/admin/dashboard/main' ]);
                } else if ( role === Role.Employee ) {
                  this.router.navigate( [ '/employee/dashboard' ] );
                } else {
                  this.router.navigate(['/authentication/signin']);
                }
                this.loading = false;
              }, 1000);
            } else {
              this.error = 'Invalid Login';
            }
          },
          (error) => {
            this.error = error;
            this.submitted = false;
            this.loading = false;
          }
        );
    }
  }
}
