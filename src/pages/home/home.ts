import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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

}
