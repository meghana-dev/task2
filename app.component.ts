import { Component } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //source: any;
   parentMessage = "message from parent";
  
  constructor()
  {
    const source = timer(1000, 2000);
  const subscribe = source.subscribe(val => console.log(val));
  setTimeout(() => { subscribe.unsubscribe(); }, 10000);
  
  }
  
}
