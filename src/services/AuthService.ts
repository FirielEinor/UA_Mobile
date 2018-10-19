import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import { AuthStorageHelper } from '../helpers/AuthStorageHelper';
import { BaseService } from "./BaseService";

import { ENV } from '../config/env.dev';

@Injectable()
export class AuthService extends BaseService {

    constructor (protected http: Http, protected authTokenStorageHelper: AuthStorageHelper) {
        super(http, authTokenStorageHelper);
    }

    /**
     * Make a login request
     *
     * @param string login
     * @param string password
     * @return object
     */
    newcomerLogin(login: string, password: string) {
        const data = {
            name: login,
            password: password,
        }
        console.log('data', data)
        return this._put(this.endpoint + "user/login", data, false);
    }

    getUserWithToken(){
        return this._get(this.endpoint + "user", {});
    }


    /**
     * Make a request to check if the access token is
     * not revoked
     */
    checkAccessToken(accessToken) {
        return this._post(this.endpoint + "oauth/token/check", {});
    }

    /**
     * Make a request to revoke the given access token
    -*
     * @param accessToken: the token to revoke
     * @return object
     */
    revokeAccessToken(accessToken) {
        return this._post(this.endpoint + "oauth/token/revoke", {
                access_token: accessToken
            });
    }

}
