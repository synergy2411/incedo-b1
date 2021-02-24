import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { EmployeeModule } from './employee/employee.module';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/user.component';
import { UserInfoComponent } from './users/user-info/user-info.component';
import { UserImgComponent } from './users/user-img/user-img.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { NationalPipePipe } from './pipes/national-pipe.pipe';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DataService } from './services/data.service';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { APP_ROUTES } from './app.routes';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { OverviewComponent } from './product/overview/overview.component';
import { SpecificationComponent } from './product/specification/specification.component';
import { LazyModule } from './lazy/lazy.module';

@NgModule({
  declarations: [           // Component, Directive, Pipes
    AppComponent,
    UsersComponent,
    UserInfoComponent,
    UserImgComponent,
    PipeDemoComponent,
    NationalPipePipe,
    LoginComponent,
    RegisterComponent,
    ObservableDemoComponent,
    HeaderComponent,
    ProductComponent,
    OverviewComponent,
    SpecificationComponent
  ],
  imports: [                // Modules - built-in or custom
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
    EmployeeModule,
    
  ],
  // providers: [DataService],            // Services
  providers: [],            // Services
  bootstrap: [AppComponent]
})
export class AppModule { }
