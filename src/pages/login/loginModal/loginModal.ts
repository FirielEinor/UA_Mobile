import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../../tabs/tabs';

@Component({
    selector: 'modal-login',
    templateUrl: 'loginModal.html'
})
export class LoginModal {
    constructor(public navCtrl: NavController) { }
    closeModal() {
        this.navCtrl.pop();
    }

    login(){
        this.navCtrl.push(TabsPage)
    }
}
