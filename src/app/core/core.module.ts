import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { CoreRoutingModule } from './core-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginService } from './login.service';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    FormsModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    LoginComponent,
    DashboardComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    RouterModule],
  providers: [
    LoginService
  ]
})
export class CoreModule { }
