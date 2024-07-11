import { Component } from '@angular/core';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent {
  to: string = '';
  subject: string = '';
  body: string = '';

  constructor(private emailService: EmailService) { }

  sendEmail() {
    this.emailService.sendEmail(this.to, this.subject, this.body).subscribe(response => {
      console.log('Email sent successfully', response);
    }, error => {
      console.error('Error sending email', error);
    });
  }
}
