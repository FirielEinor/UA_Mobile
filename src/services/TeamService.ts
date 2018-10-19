import { Injectable } from "@angular/core";
import { BaseService } from "./BaseService";
import { Http } from "@angular/http";
import { AuthStorageHelper } from "../helpers/AuthStorageHelper";

@Injectable()
export class TeamService extends BaseService{

    constructor (protected http: Http, protected authTokenStorageHelper: AuthStorageHelper) {
        super(http, authTokenStorageHelper);
    }

    getTeam(userLogged){
        return this._get(this.endpoint + "teams", {}, true)
    }
}