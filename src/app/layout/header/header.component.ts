import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  toggleMenuClass:boolean = false

  toggleMenu(){
    if(this.toggleMenuClass){
      this.toggleMenuClass = false
    }else{
      this.toggleMenuClass = true
    }
  }
  closeToggleMenu(){
    this.toggleMenuClass = false
  }

  constructor() { }

  ngOnInit(): void {
  }

}
