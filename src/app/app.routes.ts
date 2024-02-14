import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PrivacyComponent } from './main-page/privacy/privacy.component';
import { ImprintComponent } from './main-page/imprint/imprint.component';

export const routes: Routes = [
    {path:'', component:MainPageComponent}, 
    {path:'home', component:MainPageComponent},
    {path:'privacy', component:PrivacyComponent},
    {path:'imprint', component:ImprintComponent}
];


