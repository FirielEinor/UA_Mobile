import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { LoginModal } from './loginModal/loginModal';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {
    constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

    }

    login() {
        let profileModal = this.modalCtrl.create(LoginModal, { userId: 8675309 });
        profileModal.present();
    }
}
