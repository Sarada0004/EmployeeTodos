import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports : [HeaderComponent,FooterComponent,LoginComponent]
})
export class CoreModule { }
