import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { LoginModal } from './loginModal/loginModal';
import { AuthStorageHelper } from '../../helpers/AuthStorageHelper';
import { AuthService } from '../../services/AuthService';
import { LogInfo } from '../../services/LogInfoService';
import { TabsPage } from '../tabs/tabs';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
    providers: [AuthService, AuthStorageHelper]
})
export class LoginPage {
    constructor(public navCtrl: NavController,
         public modalCtrl: ModalController,
         private authStorageHelper: AuthStorageHelper,
         private authService: AuthService,
         private logInfo: LogInfo
         ) {

    }

    login() {
        var accessToken = this.authStorageHelper.getAccessToken();
        if(accessToken && accessToken != null){
            console.log("Token : ",accessToken)
            if (this.authService.checkAccessToken(accessToken)){
                this.authService.getUserWithToken()
                    .subscribe(data => {
                        const parsedData = JSON.parse(data._body)
                        this.logInfo.userInfo = parsedData
                        this.navCtrl.push(TabsPage)
                    })
            }
        }
        else {
            let profileModal = this.modalCtrl.create(LoginModal, { userId: 8675309 });
            profileModal.present();
        }
    }
}
