import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../../tabs/tabs';
import { AuthService } from '../../../services/AuthService';
import { AuthStorageHelper } from '../../../helpers/AuthStorageHelper';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { LogInfo } from '../../../services/LogInfoService';

@Component({
    selector: 'modal-login',
    templateUrl: 'loginModal.html',
    providers: [AuthService, AuthStorageHelper]
})
export class LoginModal {

    loginForm: FormGroup;

    constructor(public navCtrl: NavController,
        private authService: AuthService,
        private fb: FormBuilder,
        private authStorageHelper: AuthStorageHelper,
        private logInfo:LogInfo
        ) {
            this.loginForm = this.fb.group({
                'login': [
                    null,
                    [Validators.required]
                ],
                'password': [
                    null,
                    [Validators.required]
                ]
            });
         }
    closeModal() {
        this.navCtrl.pop();
    }

    submitLoginForm(data){
        this.authService.newcomerLogin(data.login, data.password)
            .subscribe(
                data => {
                    const parsedData = JSON.parse(data._body);
                    console.log(data._body)
                    console.log(parsedData)
                    this.logInfo.userInfo = parsedData;
                    this.authStorageHelper.setAccessToken(parsedData.token);
                    this.navCtrl.push(TabsPage)
                },
                err => console.log("err : ", err)
            )
    }
}
