import { Component } from '@angular/core';
import { NasaService } from '../nasa.service';
import { IonDatetime, IonDatetimeButton, IonModal } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  imageData: any;

  constructor(private nasaService: NasaService) { }

  ngOnInit() {
    this.nasaService.getImageOftheDay().subscribe((data) => {
      this.imageData = data;
    });
  }
  onClick() {
    this.nasaService.getDateOftheDay('2021-08-10').subscribe((data) => {
      this.imageData = data;
    });
  }

}
