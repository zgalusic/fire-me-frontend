import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {LoginComponent} from './login/login.component';
import {CoreRoutingModule} from './core-routing.module';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './user.service';
import {AuthService} from './auth.service';
import {NavigationComponent} from './navigation/navigation.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    LoginComponent,
    DashboardComponent,
    NavigationComponent,
    UsersComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    RouterModule],
  providers: [
    AuthService,
    UserService
  ]
})
export class CoreModule { }
