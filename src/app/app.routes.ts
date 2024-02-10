import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PrivacyComponent } from './main-page/privacy/privacy.component';

export const routes: Routes = [
    {path:'', redirectTo:'/main-page',pathMatch:'full'}, 
    {path:'main-page', component:MainPageComponent},
    {path:'privacy', component:PrivacyComponent}
];
