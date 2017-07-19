import { LoginComponent } from './login/login.component';
import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PageNotExistComponent } from './page-not-exist/page-not-exist.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateStringComponent } from './create-string/create-string.component';
import { StringListComponent } from './string-list/string-list.component';
import { StringCrudComponent } from './string-crud/string-crud.component';

const appRoutes: Routes = [
  {
    path: 'main', component: MainHeaderComponent,
    children: [{ path: 'profile', component: ProfileComponent }]
  },
  { path: 'log-in', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: '', pathMatch: 'full', redirectTo: '/main' },
  { path: '**', component: PageNotExistComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainHeaderComponent,
    SignUpComponent,
    PageNotExistComponent,
    ProfileComponent,
    CreateStringComponent,
    StringListComponent,
    StringCrudComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
