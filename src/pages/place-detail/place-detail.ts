import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

/**
 * Generated class for the PlaceDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-place-detail',
  templateUrl: 'place-detail.html',
})
export class PlaceDetailPage {

  place: any;

  constructor(public navParams: NavParams) {
    this.place = this.navParams.get('place');
  }

}
