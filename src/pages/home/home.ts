import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SibbilPage } from '../sibbil/sibbil';
import { JookgruPage } from '../jookgru/jookgru';
import { NutpedPage } from '../nutped/nutped';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  imgArray : any = []
  constructor(public navCtrl: NavController) {
   //this.imgArray
  }

  showDetail(contact){
    //alert(contact.name);
    //this.navCtrl.push("ContactPage");
  }

  toSibbil(){
    this.navCtrl.push(SibbilPage);
  }

  toJookgru(){
    this.navCtrl.push(JookgruPage);
  }

  toNutped(){
    this.navCtrl.push(NutpedPage);
  }  

}
