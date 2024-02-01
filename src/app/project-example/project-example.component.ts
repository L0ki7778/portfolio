import { Component, Input } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-project-example',
  standalone: true,
  imports: [MatButton, MatButtonModule],
  templateUrl: './project-example.component.html',
  styleUrl: './project-example.component.scss'
})
export class ProjectExampleComponent {
@Input() imgSrc: string = '';
@Input() title: string = '';
@Input() description: string = '';
@Input() skills: string = '';
@Input() git: string = '';
@Input() html:string=''
}
