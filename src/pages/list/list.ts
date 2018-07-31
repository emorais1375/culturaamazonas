import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { EventoDetailPage } from "../evento-detail/evento-detail";
import { PautasProvider } from "../../providers/pautas/pautas";

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  pautas: any;

  constructor(public navCtrl: NavController, private pautasProvider: PautasProvider) {
  }

  ionViewDidLoad(){
    let pautasLoaded = this.pautasProvider.load();

    Promise.all([pautasLoaded]).then((result) => {
      this.pautas = result[0];
    });
  }

  openPauta(pauta){
    this.navCtrl.push(EventoDetailPage, {pauta: pauta});
  }
}
