import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ChangePasswordRequest, ChangePasswordService} from "../../services/change-password.service";


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html'

})
export class ChangePasswordComponent {
  changePasswordForm: FormGroup;
  submitted = false;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private forgotPasswordService: ChangePasswordService) {
    this.changePasswordForm = this.fb.group({
      currentPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmationPassword: ['', [Validators.required]]
    });
  }

  get f() {
    return this.changePasswordForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.changePasswordForm.invalid) {
      return;
    }

    const request: ChangePasswordRequest = {
      currentPassword: this.f['currentPassword'].value,
      newPassword: this.f['newPassword'].value,
      confirmationPassword: this.f['confirmationPassword'].value
    };

    this.forgotPasswordService.changePassword(request).subscribe(
        response => {
          alert('Password changed successfully');
          this.changePasswordForm.reset();
          this.submitted = false;
          this.errorMessage = null;
        },
        error => {
          this.errorMessage = 'Failed to change password. Please try again.';
        }
    );
  }
}
