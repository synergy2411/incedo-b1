import { Component, DoCheck, OnInit } from "@angular/core";
import { USER_DATA } from "../model/mocks";
import { User } from "../model/user";

@Component({
    selector : 'app-users',
    templateUrl : './user.component.html',
    styleUrls : ['./user.component.css']
})
export class UsersComponent implements OnInit, DoCheck{
    users : User[];

    ngOnInit(){
        // console.log("OnInit");
        this.users = USER_DATA;
    }

    ngDoCheck(){
        // console.log("DoCheck");
    }

    onMoreInfo(usr : User){
        alert(`Mr. ${usr.lastName} is working with ${usr.company}!`);
    }
}