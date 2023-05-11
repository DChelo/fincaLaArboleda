import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.page.html',
  styleUrls: ['./reservation.page.scss'],
})
export class ReservationPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backToHome(){
    this.router.navigate(['/home'])
  }

  goToPqrs(){
    this.router.navigate(['/pqrs'])
  }

}