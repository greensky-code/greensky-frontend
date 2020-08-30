import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonHeaderComponent } from './common-header/common-header.component';
import { CommonFooterComponent } from './common-footer/common-footer.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { SecurityComponent } from './security/security.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { GrouproleComponent } from './grouprole/grouprole.component';

@NgModule({
  declarations: [
    AppComponent,
    CommonHeaderComponent,
    CommonFooterComponent,
    LoginComponent,
    LandingComponent,
    SecurityComponent,
    UserprofileComponent,
    GrouproleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
