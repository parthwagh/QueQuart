import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-group',
  templateUrl: './group.page.html',
  styleUrls: ['./group.page.scss'],
})
export class GroupPage implements OnInit {

  constructor(private router: Router,public loadingController: LoadingController) { }

  ngOnInit() {
  }
  Back() {
    this.presentLoading();
    this.router.navigateByUrl('/tabs/tab1');
  }

  Groupdetail() {
    this.presentLoading();
    this.router.navigateByUrl('/group-detail');
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please Wait...',
      duration: 1000
    });
    await loading.present();
  }

}
