import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule} from './core/core.module';
import { EmployeeModule } from './modules/employee/employee.module';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { NgModule } from '@angular/core';
import { EmployeeDeleteComponent } from './modules/employee/employee-delete/employee-delete.component';
import { EmployeeDetailComponent } from './modules/employee/employee-detail/employee-detail.component';
import { SimpletodoModule } from './modules/simpletodo/simpletodo.module';
import { RegistrationModule } from './modules/registration/registration.module';
import { MaterialTableModule } from './modules/material-table/material-table.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgbModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    EmployeeModule,
    SimpletodoModule,
    RegistrationModule,
    MaterialTableModule
  ],
  providers: [CookieService, NgbActiveModal],
  bootstrap: [AppComponent],
  entryComponents: [EmployeeDeleteComponent,EmployeeDetailComponent],
})
export class AppModule { }
