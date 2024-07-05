import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Role} from 'app/models/role';
import { AuthService } from 'app/services/auth.service';
@Component({
  selector: 'app-locked',
  templateUrl: './locked.component.html',
  styleUrls: ['./locked.component.scss'],
})
export class LockedComponent implements OnInit {
  authForm!: UntypedFormGroup;
  submitted = false;
  userImg!: string;
  userFullName!: string;
  hide = true;
  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}
  ngOnInit() {
    this.authForm = this.formBuilder.group({
      password: ['', Validators.required],
    });
    //this.userImg = this.authService.currentUserValue.img;
    this.userFullName =
      this.authService.currentUserValue.firstname +
      ' ' +
      this.authService.currentUserValue.lastname;
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
      const role = this.authService.currentUserValue.role;
      if (role === Role.All || role === Role.Admin.toUpperCase() || role === Role.SuperAdmin.toUpperCase()) {
        this.router.navigate(['/admin/dashboard/main']);
      } else if (role === Role.Employee.toUpperCase()) {
        this.router.navigate(['/employee/dashboard']);
      } else {
        this.router.navigate(['/authentication/signin']);
      }
    }
  }
}
