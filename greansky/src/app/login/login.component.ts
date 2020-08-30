import { Component, OnInit } from '@angular/core';
import { UserVO } from '../shared/applicationBean';
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginObj: UserVO;
  signUpObj: UserVO;
  isLogin = true;
  
  constructor(private route: Router, private http: HttpClient, private appservice: AppService) { }

  ngOnInit() {
    this.loginObj = new UserVO();
    this.signUpObj = new UserVO();
  }

  login(){
    // this.http.post(Global.LOGIN_URL,this.loginObj).subscribe((res:any) => {

    // },err => {
    //   console.error('Unable to retrive Login details');
    // });
    this.appservice.setUserName("Tanmoy D");
    let d = new Date();
    let date = d.getFullYear() + '-' + (d.getMonth()+1) + '-' + d.getDate();
    let timestamp = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
    this.appservice.setUserLogTime(date.toString() + ' ' + timestamp.toString());
    this.route.navigate(['landing']);
  }
  register(){
    // this.http.post(Global.SIGNUP_URL,this.signUpObj).subscribe((res:any) => {

    // },err => {
    //   console.error('Unable to retrive Signup details');
    // });
    this.isLogin = true;
  }
  goToRegister(){
    this.isLogin = false;
  }
  goToLogin(){
    this.isLogin = true;
  }

}
