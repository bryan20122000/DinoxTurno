import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private readonly fb: FormBuilder) {


  }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: [],
      password: []
    });
  }

  login() {

    alert(this.form.controls['password'].value);
    alert(this.form.controls['username'].value);
  }

}
