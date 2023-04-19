import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {CvComponent} from "./cv/cv.component";
import {ContactComponent} from "./contact/contact.component";
import {AdminComponent} from "./admin/admin.component";


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'cv', component: CvComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'admin', component: AdminComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ] })

export class AppRoutingModule { }
