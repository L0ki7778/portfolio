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

  constructor(private snackBar: MatSnackBar) { }


  ngOnInit() {
    this.contactForm= new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.email),
      message: new FormControl('', Validators.required),
      agreedToPrivacyTerms: new FormControl(false, Validators.requiredTrue)
    });
  }


  public removeValidators() {
    this.contactForm.get('name')?.clearValidators();
    this.contactForm.get('email')?.clearValidators();
    this.contactForm.get('message')?.clearValidators();
    this.contactForm.get('agreedToPrivacyTerms')?.clearValidators();
    this.contactForm.get('name')?.updateValueAndValidity();
    this.contactForm.get('email')?.updateValueAndValidity();
    this.contactForm.get('message')?.updateValueAndValidity();
    this.contactForm.get('agreedToPrivacyTerms')?.updateValueAndValidity();
  }


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
            this.contactForm.reset();
            this.removeValidators();
            this.successSnackBar();
          },
          error: (error) => {
            console.error(error);
            this.errorSnackBar()
          }
        });
    } 
  }
  

  successSnackBar(){
    return this.snackBar.open('Message sent successfully!', 'Close', {
      duration: 3000,
      panelClass:'green-snackbar',
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }


  errorSnackBar(){
    return this.snackBar.open('Failed to send message. Please try again later.', 'Close', {
      duration: 3000,
      panelClass:'red-snackbar',
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }


  
  scrollToTop():void{
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
}
