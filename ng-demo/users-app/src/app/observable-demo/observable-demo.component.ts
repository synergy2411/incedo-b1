import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent implements OnInit {

  unSub$ : Subscription;

  obs$ = new Observable(observer => {
    setTimeout(() => {observer.next("First Package")}, 2000);
    setTimeout(() => {observer.next("Second Package")}, 3000);
    // setTimeout(() => {observer.next("Third Package")}, 5000);
    setTimeout(() => {observer.error(new Error('Something bad happened'))}, 5000);
    setTimeout(() => {observer.next("Fourth Package")}, 7000);
    setTimeout(() => {observer.complete()}, 10000);
  })

  onSubscribe(){
    this.unSub$=this.obs$.subscribe(
      data => {console.log(data)},
      error => {console.log(error)},
      () => {console.log("COMPLETED")}
    )
  }
  
  onUnsubscribe(){
    this.unSub$.unsubscribe();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
