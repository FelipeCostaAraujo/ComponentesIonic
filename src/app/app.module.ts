import { TabPage } from './../pages/tab/tab';
import { SegmentPage } from './../pages/segment/segment';
import { ToolbarPage } from './../pages/toolbar/toolbar';
import { ToastPage } from './../pages/toast/toast';
import { LoadingPage } from './../pages/loading/loading';
import { TogglePage } from './../pages/toggle/toggle';
import { ListaPage } from './../pages/lista/lista';
import { InputPage } from './../pages/input/input';
import { IconsPage } from './../pages/icons/icons';
import { GridPage } from './../pages/grid/grid';
import { FabPage } from './../pages/fab/fab';
import { DatatimePage } from './../pages/datatime/datatime';
import { RangerPage } from './../pages/ranger/ranger';
import { RadioPage } from './../pages/radio/radio';
import { CheckboxPage } from './../pages/checkbox/checkbox';
import { CardPage } from './../pages/card/card';
import { BotoesPage } from './../pages/botoes/botoes';
import { BadgesPage } from './../pages/badges/badges';
import { AlertControlPage } from './../pages/alert-control/alert-control';
import { ActionSheetPage } from './../pages/action-sheet/action-sheet';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, Input } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CustomNavigationPage } from '../pages/custom-navigation/custom-navigation';
import { CameraPage } from '../pages/camera/camera';
import { Camera } from '../../node_modules/@ionic-native/camera';
import { StoragePage } from '../pages/storage/storage';
import { IonicStorageModule } from '@ionic/storage';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ActionSheetPage,
    AlertControlPage,
    BadgesPage,
    BotoesPage,
    CardPage,
    CheckboxPage,
    CustomNavigationPage,
    RadioPage,
    RangerPage,
    DatatimePage,
    FabPage,
    GridPage,
    IconsPage,
    InputPage,
    ListaPage,
    TogglePage,
    LoadingPage,
    ToastPage,
    ToolbarPage,
    SegmentPage,
    TabPage,
    CameraPage,
    StoragePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: 'Voltar',
      mode: 'ios',
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ActionSheetPage,
    AlertControlPage,
    BadgesPage,
    BotoesPage,
    CardPage,
    CheckboxPage,
    CustomNavigationPage,
    RadioPage,
    RangerPage,
    DatatimePage,
    FabPage,
    GridPage,
    IconsPage,
    InputPage,
    ListaPage,
    TogglePage,
    LoadingPage,
    ToastPage,
    ToolbarPage,
    SegmentPage,
    TabPage,
    CameraPage,
    StoragePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
