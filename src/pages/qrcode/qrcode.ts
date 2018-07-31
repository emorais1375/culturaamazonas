import { Component } from '@angular/core';
import { IonicPage, ToastController } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';


@IonicPage()
@Component({
  selector: 'page-qrcode',
  templateUrl: 'qrcode.html',
})
export class QrcodePage {
  private scanSub: any;
  constructor(private qrScanner: QRScanner, private toastCtrl: ToastController) {
  }

  ionViewWillEnter() {
    this.showCamera();
    // Optionally request the permission early
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          // camera permission was granted
          this.presentToast('Permissão de Câmera atendida');

          // start scanning
          this.scanSub = this.qrScanner.scan().subscribe((text: string) => {
            //this.presentToast('algo digitalizado'+ text);

            // this.qrScanner.hide(); // hide camera preview
            // scanSub.unsubscribe(); // stop scanning
            this.presentToast(text);
            window.open(text, '_system', 'location=yes');
          });
          this.qrScanner.show();

        } else if (status.denied) {
          // camera permission was permanently denied
          // you must use QRScanner.openSettings() method to guide the user to the settings page
          // then they can grant the permission from there
          this.presentToast('Permissão de câmera negada');
        } else {
          // permission was denied, but not permanently. You can ask for permission again at a later time.
          this.presentToast('Permissão negada para este tempo de execução');
        }
      })
      .catch((e: any) => this.presentToast('Error is'+e));
  }

  presentToast(text: string) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  ionViewWillLeave() {
    this.qrScanner.hide(); // hide camera preview
    this.scanSub.unsubscribe(); // stop scanning
    this.hideCamera();
  }

  showCamera() {
    (window.document.querySelector('ion-app') as HTMLElement).classList.add('cameraView');
  }

  hideCamera() {
    (window.document.querySelector('ion-app') as HTMLElement).classList.remove('cameraView');
  }

}
