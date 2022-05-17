import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SwiperModule } from 'swiper/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { BasicInfoComponent } from './layout/basic-info/basic-info.component';
import { HomeComponent } from './views/home/home.component';
import { AngularTypewriterEffectModule } from 'angular-typewriter-effect';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { PortfolioComponent } from './views/portfolio/portfolio.component';
import { HistoryComponent } from './views/history/history.component';
import { BlogComponent } from './views/blog/blog.component';
import { ContactComponent } from './views/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,

    FooterComponent,
    HeaderComponent,
    BasicInfoComponent,
    HomeComponent,
    PortfolioComponent,
    HistoryComponent,
    BlogComponent,
    ContactComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularTypewriterEffectModule,
    FontAwesomeModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
