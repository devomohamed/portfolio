import { Component, OnInit } from '@angular/core';
import { faEllipsisV,faDownload } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin,faFacebook,faGithub,faTwitter,faCodepen } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent implements OnInit {
  // Icons Fontawesome Variables To Access Classes Imports 
  faEllipsisV = faEllipsisV
  faDownload = faDownload
  faLinkedin = faLinkedin
  faFacebook = faFacebook
  faGithub = faGithub
  faTwitter = faTwitter
  faCodepen = faCodepen

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
