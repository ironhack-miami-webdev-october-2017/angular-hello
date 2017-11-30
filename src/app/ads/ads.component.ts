import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'funky-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {

  myAds: any[] = [
      {
          title: "Buy Cialis",
          imageUrl: "https://media.giphy.com/media/sFQ7ZC6nnpVV6/giphy.gif"
      },
      {
          title: "Lightning Leffer for Circuit Court Judge",
          imageUrl: "https://render.fineartamerica.com/images/rendered/medium/greeting-card/images-medium-5/1-city-lightning-marko-korosec.jpg"
      }
  ];

  constructor() { }

  ngOnInit() {
  }

}
