import { Routes } from "@angular/router";
import { NewEmployeeComponent } from "./employee/new-employee/new-employee.component";
import { LoginComponent } from "./login/login.component";
import { ObservableDemoComponent } from "./observable-demo/observable-demo.component";
import { PipeDemoComponent } from "./pipe-demo/pipe-demo.component";
import { OverviewComponent } from "./product/overview/overview.component";
import { ProductComponent } from "./product/product.component";
import { SpecificationComponent } from "./product/specification/specification.component";
import { RegisterComponent } from "./register/register.component";
import { LoginGuardService } from "./services/login-guard.service";
import { UsersComponent } from "./users/user.component";

export const APP_ROUTES : Routes = [
    {
        path :  '',                         // http://localhost:4200
        redirectTo : 'login',
        pathMatch : 'full'
    },
    {
        path : 'login',                      // http://localhost:4200/login
        component : LoginComponent
    },{
        path : 'register',               // http://localhost:4200/register
        component : RegisterComponent
    },{
        path : 'users',                  // http://localhost:4200/users
        component : UsersComponent,
        canActivate : [LoginGuardService]
    },{
        path : 'pipe-demo',              // http://localhost:4200/pipe-demo
        component : PipeDemoComponent
    },{
        path : 'observable-demo',           // http://localhost:4200/observable-demo
        component : ObservableDemoComponent
    },{
        path : 'new-employee',
        component : NewEmployeeComponent
    },{
        path : 'lazy',
        loadChildren : () => import('./lazy/lazy.module').then(m => m.LazyModule)
    },{
        path : 'product/:id/:product_name',                   // http://localhost:4200/product/3
        component : ProductComponent,
        children : [
            {
                path : 'overview',          // http://localhost:4200/product/overview
                component : OverviewComponent
            },{
                path : 'specification',         // http://localhost:4200/product/specification
                component : SpecificationComponent
            }
        ]
    },{
        path : "**",                        // http://localhost:4200/nowhere
        redirectTo : 'register',
        pathMatch : 'full'
    }
]