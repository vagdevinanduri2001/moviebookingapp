import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { ApiServiceService } from '../services/api-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  hide = true;

  userName = '';
  password = '';

  constructor(
    private api: ApiServiceService,
    private snack : MatSnackBar
  ) { }

  public forgot(forgotForm: NgForm) {
    this.api.forgotPassword(this.userName, this.password).subscribe(
      (response) => {
        console.log(response);
        this.snack.open('Password reset','Done');
      },
      (error) => {
        console.log(error);
        alert('Check your userName');
      }
    )
  }
}