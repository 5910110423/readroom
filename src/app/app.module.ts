import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { firebaseConfig } from '../config';

import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { AuthService } from '../services/auth.service';


import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { TeamPage } from '../pages/team/team';
import { SignupPage } from '../pages/signup/signup';
import { SibbilPage } from '../pages/sibbil/sibbil';
import { JookgruPage } from '../pages/jookgru/jookgru';
import { NutpedPage } from '../pages/nutped/nutped';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    TeamPage,
    SignupPage,
    SibbilPage,
    JookgruPage,
    NutpedPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig.fire),
    [NgxErrorsModule]
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    TeamPage,
    SignupPage,
    SibbilPage,
    JookgruPage,
    NutpedPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireAuth,    
    AuthService,    
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
