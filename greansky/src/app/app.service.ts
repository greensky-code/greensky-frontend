import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private userName = new BehaviorSubject('');  // User
  currentUserName = this.userName.asObservable();

  private userLogTime = new BehaviorSubject('');  // Login Time
  currentUserLogTime = this.userLogTime.asObservable();

  constructor() { }

  setUserName(userName: string) {
    this.userName.next(userName);
  }

  setUserLogTime(userLogTime: string) {
    this.userLogTime.next(userLogTime);
  }
}
