import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChangePasswordRequest, ChangePasswordService } from "../../services/change-password.service";
import {ActivatedRoute, Router} from '@angular/router';
import {SharedDataService} from "@shared/SharedDataService";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html'
})
export class ChangePasswordComponent implements OnInit{
  changePasswordForm: FormGroup;
  submitted = false;
  errorMessage: string | null = null;
    email: string | null = null;

  constructor(
      private fb: FormBuilder,
      private changePasswordService: ChangePasswordService,
      private router: Router,
      private sharedDataService : SharedDataService

  ) {
    this.changePasswordForm = this.fb.group({
      currentPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmationPassword: ['', [Validators.required]]
    });
  }

  get f() {
    return this.changePasswordForm.controls;
  }


    ngOnInit() {
        this.email = this.sharedDataService.getEmail();
        console.log('Retrieved email:', this.email);
    }
  onSubmit() {
    this.submitted = true;
    if (this.changePasswordForm.invalid) {
      return;
    }

    const request: ChangePasswordRequest = {
        //const email = this.changePasswordForm.get('email')?.value;
      currentPassword: this.f['currentPassword'].value,
      newPassword: this.f['newPassword'].value,
      confirmationPassword: this.f['confirmationPassword'].value
    };

    this.changePasswordService.changePassword(this.email,request)
        .subscribe(
            () => {
              alert('Password changed successfully');
              this.changePasswordForm.reset();
              this.submitted = false;
              this.errorMessage = null;
              this.router.navigate(['/']); // Navigate to home or another route upon success
            },
        error => {
          if (error.status === 401 || error.status === 403) {
            this.errorMessage = 'Unauthorized access. Please log in again.';
            // Redirect or handle unauthorized access as needed
          } else {
            this.errorMessage = 'Failed to change password. Please try again later.';
          }
          console.error(error);
        }
    );
  }
}
