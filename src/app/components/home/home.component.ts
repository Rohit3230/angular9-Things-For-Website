import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.css',
    '../../../theme/assets/vendor/bootstrap/css/bootstrap.min.css',
    '../../../theme/assets/vendor/icofont/icofont.min.css',
    '../../../theme/assets/vendor/boxicons/css/boxicons.min.css',
    '../../../theme/assets/vendor/animate.css/animate.min.css',
    '../../../theme/assets/vendor/venobox/venobox.css',
    // '../../../theme/assets/vendor/remixicon/remixicon.css',
    '../../../theme/assets/vendor/owl.carousel/assets/owl.carousel.min.css',
    // '../../../theme/assets/vendor/aos/aos.css'
    '../../../theme/assets/css/style.css'
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
