import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Some of my favorite photos!';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://lh3.googleusercontent.com/proxy/UenhyFEkj3QK6x6ivqMjDXE7QEfBqdw6ZxqU6qgbXVeBirfWyCIvbGMEi_k2423LfvZ1t--E7Vx_-P82BADYK5b0zq311AoxWAiyXZxN24ffx1_Ag7p4sbJnSIOzZbztVB4d5C18wihcif167STiiAu2eWB7YwrhRQUhn0rB5dlqR9wWFG4L3w';
  image3 = 'https://mostateparks.com/sites/mostateparks/files/flickrcache/72157625843213481/32776402461.jpg';

  constructor() { }

  ngOnInit() {
  }

}