import { Injectable } from "@angular/core";
import { USER_DATA } from "../model/mocks";
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private httpClient: HttpClient) { }

    getUserData() {
        return USER_DATA;
    }

    // Remote GET Call
    getUserDataFromAPI() {
        return this.httpClient.get("./assets/data/user-data.json")
            .pipe(tap(response => {
                console.log("[TAP ]", response);
                return response;
            }))

    }
}