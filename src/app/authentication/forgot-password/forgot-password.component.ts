import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import {ChangePasswordService} from "../../services/change-password.service";
import {User} from "../../models/user";
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  authForm!: UntypedFormGroup;
  submitted = false;
  returnUrl!: string;
  private user: User


  constructor(
    private formBuilder: UntypedFormBuilder,
    private route: ActivatedRoute,
    private router: Router, private forgotPasswordService:ChangePasswordService
  ) {}
  ngOnInit() {


    this.authForm = this.formBuilder.group({
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
    });
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }



  get f() {
    return this.authForm.controls;
  }

  onSubmit() {

    this.submitted = true;
    // stop here if form is invalid
    if (this.authForm.invalid) {
      return;
    } else {


      this.forgotPasswordService.sendChangePasswordEmail(this.user).subscribe(
          response => {
            alert('Password change email sent successfully');
            this.router.navigate(['/change-password']);
          },
          error => {

          }
      );
    }
  }

}
