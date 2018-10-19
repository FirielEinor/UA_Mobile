import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LogInfo } from '../../services/LogInfoService';
import { TeamService } from '../../services/TeamService';

@Component({
    selector: 'page-team',
    templateUrl: 'team.html'
})
export class TeamPage{
    teams = [];
    logTeam = {};
    userInfo = null;
    allTeam = "0";
    constructor(public navCtrl: NavController, public logInfo:LogInfo, private teamService:TeamService) {
        this.userInfo = logInfo.userInfo;
        this.getTeam()
        
    }

    getTeam(){
        this.teamService.getTeam(this.userInfo.user)
            .subscribe(
                data => {
                    const teamsList = JSON.parse(data._body);
                    this.teams = teamsList;
                    console.log(this.teams);
                    teamsList.forEach(team => {
                        team.users.forEach(user => {
                            if (user.id === this.userInfo.user.id){
                                this.logTeam = team;  
                            }
                        });
                    });
                },
                err => console.log("err : ", err)
            );
    }
}
