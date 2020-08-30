import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-common-header',
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.css']
})
export class CommonHeaderComponent implements OnInit {
  userName: string;
  userLoggedInTime: string;
  constructor(private appservice: AppService) { }
  
  ngOnInit() {
    this.appservice.currentUserName.subscribe(res => this.userName = res);
    this.appservice.currentUserLogTime.subscribe(res => this.userLoggedInTime = res);
  }

}
 