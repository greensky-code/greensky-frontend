import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {
  screenLoad: string = 'User';
  constructor() { }

  ngOnInit() {
  }
  subMenuClick(e, screenName){
    let a =  document.getElementsByClassName('security-menu');
    for(var i =0; i<a.length;i++){
        a[i].classList.remove('active');
    }
    e.target.classList.add('active');
    this.screenLoad = screenName;
  }

}
