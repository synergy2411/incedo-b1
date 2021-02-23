import { User } from "./user";

export const USER_DATA : User[] = [{
    firstName : 'Bill',
    lastName : 'Gates',
    dob : new Date('Dec 21, 1965'),
    company : 'Microsoft',
    isWorking : true,
    income : 50000,
    image : './assets/images/bill.jpg',
    votes : 120
},{
    firstName : 'steve',
    lastName : 'jobs',
    dob : new Date('Jan 1, 1965'),
    company : 'Apple',
    isWorking : false,
    income : 0,
    image : './assets/images/steve.jpg',
    votes : 180
},{
    firstName : 'Tim B.',
    lastName : 'Lee',
    dob : new Date('Aug 20, 1962'),
    company : 'World Wide Web',
    isWorking : true,
    income : 30000,
    image : './assets/images/tim.jpg',
    votes : 110
}]