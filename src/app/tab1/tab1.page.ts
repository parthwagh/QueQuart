import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private router: Router,public loadingController: LoadingController){}

  tab1() {
    this.presentLoading();
    this.router.navigateByUrl('/group');
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please Wait...',
      duration: 1000
    });
    await loading.present();
  }
}


