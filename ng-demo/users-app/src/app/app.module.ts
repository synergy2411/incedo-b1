import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UsersComponent } from './users/user.component';
import { UserInfoComponent } from './users/user-info/user-info.component';
import { UserImgComponent } from './users/user-img/user-img.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { NationalPipePipe } from './pipes/national-pipe.pipe';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [           // Component, Directive, Pipes
    AppComponent,
    UsersComponent,
    UserInfoComponent,
    UserImgComponent,
    PipeDemoComponent,
    NationalPipePipe,
    LoginComponent,
    RegisterComponent
  ],
  imports: [                // Modules - built-in or custom
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],            // Services
  bootstrap: [AppComponent]
})
export class AppModule { }
