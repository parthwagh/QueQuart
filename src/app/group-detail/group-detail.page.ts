import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.page.html',
  styleUrls: ['./group-detail.page.scss'],
})
export class GroupDetailPage implements OnInit {

  constructor(private router: Router,public loadingController: LoadingController) { }

  ngOnInit() {
  }

  Grouping() {
    this.presentLoading();
    this.router.navigateByUrl('/group');
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please Wait...',
      duration: 500
    });
    await loading.present();
  }

}
