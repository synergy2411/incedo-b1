import { Component, DoCheck, OnInit } from "@angular/core";
import { USER_DATA } from "../model/mocks";
import { User } from "../model/user";
import { DataService } from "../services/data.service";

@Component({
    selector: 'app-users',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UsersComponent implements OnInit, DoCheck {
    users: User[];

    constructor(private dataService: DataService) { }

    ngOnInit() {
        // console.log("OnInit");
        // this.users = USER_DATA;
        // this.users = this.dataService.getUserData();
        this.dataService.getUserDataFromAPI()
            .subscribe(response => {
                // console.log("[RESPONSE]", response)
                this.users = response['userdata'];
            });
    }

    ngDoCheck() {
        // console.log("DoCheck");
    }

    onMoreInfo(usr: User) {
        alert(`Mr. ${usr.lastName} is working with ${usr.company}!`);
    }
}