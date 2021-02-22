import { Component } from "@angular/core";

@Component({
    selector : 'app-users',
    templateUrl : './user.component.html',
    styleUrls : ['./user.component.css']
})
export class UsersComponent{
    user = {
        firstName : 'Bill',
        lastName : 'Gates',
        dob : new Date('Dec 21, 1965'),
        company : 'Microsoft',
        isWorking : true,
        income : 50000,
        image : './assets/images/bill.jpg',
        votes : 120
    }

    onMoreInfo(usr : any){
        alert(`Mr. ${usr.lastName} is working with ${usr.company}!`);
    }
}