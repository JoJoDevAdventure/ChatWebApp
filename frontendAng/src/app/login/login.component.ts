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

  @Output() onAuth: EventEmitter<any> = new EventEmitter();
  constructor(private authService: AuthService, private route: ActivatedRoute) {}

  ngOnInit(): void {

  }
  

  onSubmit(): void {
    
      
      this.onAuth.emit(this.username);
    
  }
}
