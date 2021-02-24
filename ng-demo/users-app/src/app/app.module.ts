import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

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
    HeaderComponent
  ],
  imports: [                // Modules - built-in or custom
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  // providers: [DataService],            // Services
  providers: [],            // Services
  bootstrap: [AppComponent]
})
export class AppModule { }
