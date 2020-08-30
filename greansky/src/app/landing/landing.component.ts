import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  screenLoad = '';
  constructor() { }

  ngOnInit() {
  }
  menuClick(e, screenName){
    let a =  document.getElementsByClassName('menu');
    for(var i =0; i<a.length;i++){
        a[i].classList.remove('active');
    }
    e.target.classList.add('active');
    this.screenLoad = screenName;
  }

}
