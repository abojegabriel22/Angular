import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { UserlistComponent } from './userlist/userlist.component';
import { profileGuardService } from './guards/profileGuard.service';
import { userGuardService } from './guards/userGuard.service';


const routes: Routes = [
  {path: "userlist", canActivate:[userGuardService], component: UserlistComponent},
  {path: "profile", canActivate:[profileGuardService], component: ProfileComponent},
  {path: "register", component: RegisterComponent},
  {path: "login", component: LoginComponent},
  {path: "", component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    profileGuardService,
    userGuardService
  ]
})
export class AppRoutingModule { }
