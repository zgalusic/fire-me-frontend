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
import {PaginationModule} from 'ngx-bootstrap';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    FormsModule,
    HttpClientModule,
    PaginationModule.forRoot(),
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    LoginComponent,
    DashboardComponent,
    NavigationComponent,
    UsersComponent,
    UserDetailsComponent,
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
