import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user-auth/login/login.component';
import { SignupComponent } from './user-auth/signup/signup.component';
import { RegistrationComponent } from './patients/registration/registration.component';
import { PatientsModule } from './patients/patients.module';
import { UserAuthModule } from './user-auth/user-auth.module';


const routes: Routes = [
  {
    component: LoginComponent,
    path:"",
  },
  {
    component: SignupComponent,
    path: 'signup'
  },
  {
    component:RegistrationComponent,
    path :'patients-registration'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),PatientsModule, UserAuthModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
