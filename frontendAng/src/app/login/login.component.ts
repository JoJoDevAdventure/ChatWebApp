import { HttpClientModule } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HttpClientModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  @Output() onAuth: EventEmitter<any> = new EventEmitter();
  constructor(private authService: AuthService, private route: ActivatedRoute) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        // Handle successful login response here
        console.log('Login successful:', response);
        this.onAuth.emit(response);
        // Assuming you want to emit an event or perform some action on successful login
        // this.onSuccessfulLogin(response);
      },
      (error) => {
        // Handle login error here
        console.error('Login failed:', error);

        // Assuming you want to emit an event or perform some action on login failure
        // this.onLoginFailure(error);
      }
    );
  }
}
