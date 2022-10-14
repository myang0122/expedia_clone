import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  username = '';
  email = '';
  password = '';
  
  handleRegister() {
    console.log(this.username)
    fetch("http://localhost:3000/register", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({username: this.username, email: this.email, password: this.password})
  }).then(res => console.log(res));
    
    console.log('1')
  }
  
  ngOnInit(): void {
  }

}
