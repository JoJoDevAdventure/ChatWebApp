import { Routes } from '@angular/router';
import { ChatsComponent } from './chats/chats.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [

    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'chats', component: ChatsComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' } // Default route

];
