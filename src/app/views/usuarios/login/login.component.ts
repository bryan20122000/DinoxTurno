import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Alert } from 'selenium-webdriver';
import { HttpUtilService } from '../../../services/http-util.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private readonly fb: FormBuilder,private httpUtil:HttpUtilService) {


  }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: [],
      password: []
    });
  }

  login() {
    this.httpUtil.post('user/login').subscribe(data => {
      alert(data);
    });
   // alert(this.form.controls['password'].value);
  // alert(this.form.controls['username'].value);
  }

}
