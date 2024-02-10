import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {FormControl, FormGroup, ReactiveFormsModule, Validators, } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { FooterComponent } from '../footer/footer.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { TranslateModule } from '@ngx-translate/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';



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
    RouterLink
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm: FormGroup = new FormGroup({});

  constructor() {
    

  }

  ngOnInit() {
    this.contactForm= new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.email),
      message: new FormControl('', Validators.required),
      checkbox: new FormControl(false, Validators.requiredTrue)
    });
  }


  
onSubmit(){}
// if(this.contactForm.valid)
}
