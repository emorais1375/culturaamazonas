import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { DescubraPage } from '../pages/descubra/descubra';
import { QrcodePage } from "../pages/qrcode/qrcode";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FeaturedPageModule } from '../pages/featured/featured.module';
import { PlacePageModule } from '../pages/place/place.module';
import { MapaPageModule } from '../pages/mapa/mapa.module';
import { PlaceDetailPageModule } from './../pages/place-detail/place-detail.module';
import { EventoDetailPageModule } from './../pages/evento-detail/evento-detail.module';

import { HttpModule } from '@angular/http'
import { QRScanner } from '@ionic-native/qr-scanner';
import { Geolocation } from '@ionic-native/geolocation';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { LocationsProvider } from '../providers/locations/locations';
import { PautasProvider } from '../providers/pautas/pautas';
import { TemporadasProvider } from '../providers/temporadas/temporadas';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    DescubraPage,
    QrcodePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    FeaturedPageModule,
    PlacePageModule,
    MapaPageModule,
    EventoDetailPageModule,
    PlaceDetailPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DescubraPage,
    QrcodePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation,
    QRScanner,
    LaunchNavigator,
    LocationsProvider,
    PautasProvider,
    TemporadasProvider
  ]
})
export class AppModule {}
