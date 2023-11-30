import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { ChatsComponent } from './chats/chats.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppComponent, LoginComponent, RegisterComponent, ChatsComponent, CommonModule, HttpClientModule],
  providers: [AuthService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontendAng';
  constructor(private authService: AuthService) {}

  user: String | undefined; // Assuming user information

  ngOnInit(): void {
    this.checkAuthentication();
  }

  onAuth(user: string): void {
    this.user = user;
  }

  checkAuthentication(): void {
    if (!this.authService.isAuthenticated()) {
      // Redirect to the login page or handle authentication as needed
    } else {
      // this.user = this.authService.getUser();
    }
  }
}
