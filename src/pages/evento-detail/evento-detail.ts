import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EventoDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-evento-detail',
  templateUrl: 'evento-detail.html',
})
export class EventoDetailPage {

  pauta: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pauta = this.navParams.get('pauta');
  }

}
