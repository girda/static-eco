import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RestService} from '../shared/services/rest.service';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  form: FormGroup;

  constructor(private rest: RestService) {}

  ngOnInit() {
    this.form = new FormGroup({
      login: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    console.log(this.form.value);

    this.rest.post(`${environment.apiUrl}/auth/login`, this.form.value).subscribe(res => {
      console.log(res);
    });
  }

}
