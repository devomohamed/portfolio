import { Component, OnInit } from '@angular/core';
// import 'swiper/scss';
// import 'swiper/scss/navigation';
// import 'swiper/scss/pagination';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import SwiperCore, { SwiperOptions } from 'swiper';
import { SwiperComponent } from "swiper/angular";
import * as AOS from 'aos'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faStar = faStar
  list = ["Hello Everyone.!","I'm Mohamed Sabry","I'm Frontend Developer", "I'm Freelancer"]
  config: SwiperOptions = {
    slidesPerView: 2,
    spaceBetween: 50,
    navigation: false,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };
  onSwiper(swiper:[]) {
    // console.log(swiper);
  }
  onSlideChange() {
    // console.log('slide change');
  }

  constructor() { }

  ngOnInit(): void {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }

}
