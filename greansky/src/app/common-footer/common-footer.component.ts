import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-footer',
  templateUrl: './common-footer.component.html',
  styleUrls: ['./common-footer.component.css']
})
export class CommonFooterComponent {
  year: number = new Date().getFullYear();
  constructor() { }

}
