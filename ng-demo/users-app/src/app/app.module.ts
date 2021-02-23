import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UsersComponent } from './users/user.component';
import { UserInfoComponent } from './users/user-info/user-info.component';
import { UserImgComponent } from './users/user-img/user-img.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';

@NgModule({
  declarations: [           // Component, Directive, Pipes
    AppComponent,
    UsersComponent,
    UserInfoComponent,
    UserImgComponent,
    PipeDemoComponent
  ],
  imports: [                // Modules - built-in or custom
    BrowserModule,
    FormsModule
  ],
  providers: [],            // Services
  bootstrap: [AppComponent]
})
export class AppModule { }
