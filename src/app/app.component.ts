import { TabPage } from './../pages/tab/tab';
import { SegmentPage } from './../pages/segment/segment';
import { ToolbarPage } from './../pages/toolbar/toolbar';
import { LoadingPage } from './../pages/loading/loading';
import { TogglePage } from './../pages/toggle/toggle';
import { ListaPage } from './../pages/lista/lista';
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
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { InputPage } from '../pages/input/input';
import { compareDates } from 'ionic-angular/umd/util/datetime-util';
import { ToastPage } from '../pages/toast/toast';
import { CameraPage } from '../pages/camera/camera';
import { StoragePage } from '../pages/storage/storage';
import { AnimacaoPage } from '../pages/animacao/animacao';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'ActionSheet' , component: ActionSheetPage},
      { title: 'AlerController' ,component:AlertControlPage },
      { title: 'Badges', component:BadgesPage },
      { title: 'Botoes', component: BotoesPage },
      { title: 'Cards' , component: CardPage },
      { title: 'CheckBox', component: CheckboxPage},
      { title: 'Radio', component: RadioPage},
      { title: 'Ranger', component: RangerPage },
      { title: 'DataTime' , component: DatatimePage },
      { title: 'Fab' ,component:FabPage },
      { title: 'Grid' , component:GridPage },
      { title: 'Icons' , component: IconsPage },
      { title: 'Inputs' ,component: InputPage },
      { title: 'List' , component:ListaPage },
      { title: 'Toggle',component: TogglePage },
      { title: 'Loading' , component:LoadingPage },
      { title: 'Toast' , component: ToastPage },
      { title: 'Toolbar', component: ToolbarPage },
      { title: 'Segment', component: SegmentPage },
      { title: 'Tabs' , component: TabPage },
      {title: 'Camera', component: CameraPage },
      {title: 'Storage' , component:StoragePage},
      {title: 'Animação' , component: AnimacaoPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }
}
