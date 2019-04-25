import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private router: Router,public loadingController: LoadingController){}

  ngOnInit() {
  }
  account() {
    this.presentLoading();
    this.router.navigateByUrl('/account');
  }

  my_tickets() {
    this.presentLoading();
    this.router.navigateByUrl('/my-tickets');
  }

  my_groups() {
    this.presentLoading();
    this.router.navigateByUrl('/my-groups');
  }

  Interests() {
    this.presentLoading();
    this.router.navigateByUrl('/interests');
  }
  
  Contact_us() {
    this.presentLoading();
    this.router.navigateByUrl('/contact-us');
  }

  Home() {
    this.presentLoading();
    this.router.navigateByUrl('/tabs/tab1');
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please Wait...',
      duration: 500
    });
    await loading.present();
  }
}
