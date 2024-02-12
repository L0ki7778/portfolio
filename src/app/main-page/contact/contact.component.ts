import { Component, inject } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';
import {FormControl, FormGroup, ReactiveFormsModule, Validators, } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { FooterComponent } from '../footer/footer.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { TranslateModule } from '@ngx-translate/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButton,
    FooterComponent,
    MatCheckboxModule,
    TranslateModule,
    NgClass,
    RouterLink,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm: FormGroup = new FormGroup({});
  http= inject(HttpClient);
  success : boolean = false;

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.contactForm= new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.email),
      message: new FormControl('', Validators.required),
      agreedToPrivacyTerms: new FormControl(false, Validators.requiredTrue)
    });
  }

  mailTest = true;

  post = {
    endPoint: 'https://rene-heller.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(): void {
    if (this.contactForm.valid) {
      const contactData = this.contactForm.value;
      console.log(contactData)
      this.http.post(this.post.endPoint, this.post.body(contactData))
        .subscribe({
          next: (response) => {
            this.success = true;
            this.contactForm.reset();
            this.snackBar.open('Message sent successfully!', 'Close', {
              duration: 3000,
              horizontalPosition: 'center',
              verticalPosition: 'top'
            });
          },
          error: (error) => {
            console.error(error);
            this.snackBar.open('Failed to send message. Please try again later.', 'Close', {
              duration: 3000,
              horizontalPosition: 'center',
              verticalPosition: 'top'
            });
          }
        });
    } else {
      // Form is invalid, do something (optional)
    }
  }
  
// onSubmit(){
//   console.log(this.contactForm)
// }
// if(this.contactForm.valid)
}
