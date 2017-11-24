import { Component, OnInit } from '@angular/core';
import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

    public imageSources: string[] = [
        'assets/img/banner.png',
        'assets/img/banner.png',
        'assets/img/banner.png'
    ];
    public config: ICarouselConfig = {
        verifyBeforeLoad: true,
        log: false,
        animation: true,
        animationType: AnimationConfig.SLIDE,
        autoplay: true,
        autoplayDelay: 2000,
        stopAutoplayMinWidth: 768
    };
  constructor() { }

  ngOnInit() {
  }

}
