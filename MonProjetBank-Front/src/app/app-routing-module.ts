import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ComptesListComponent } from './components/comptes-list/comptes-list.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AddCompteComponent } from './components/add-compte/add-compte.component';
import { DeleteCompteComponent } from './components/delete-compte/delete-compte.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { LogoutResolver } from './resolvers/logout-resolver';


const routes: Routes = [

    {path:"list",component: ComptesListComponent,canActivate:[AuthGuard]},
    {path:"logout",component: WelcomeComponent,resolve:[LogoutResolver]},
    {path:"add",component: AddCompteComponent},
    {path:"welcome",component: WelcomeComponent,resolve:[LogoutResolver]},
    {path:"login",component: LoginComponent},
    {path:"delete/:numero",component: DeleteCompteComponent},
    {path:"",redirectTo:"/welcome" ,pathMatch:'full'},
    {path:"**",component: NotfoundComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
