import { Component, OnInit } from "@angular/core";
import { USER_DATA } from "../model/mocks";
import { User } from "../model/user";

@Component({
    selector : 'app-users',
    templateUrl : './user.component.html',
    styleUrls : ['./user.component.css']
})
export class UsersComponent implements OnInit{
    user : User;

    ngOnInit(){
        console.log("OnInit");
        this.user = USER_DATA;
    }

    onMoreInfo(usr : User){
        alert(`Mr. ${usr.lastName} is working with ${usr.company}!`);
    }
}