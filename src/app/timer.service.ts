import { Injectable, ViewChild } from '@angular/core';
// import { TimerComponent } from './timer/timer.component';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TimerService {
  
  // @ViewChild(TimerComponent) timerComponent: TimerComponent;
  
  someEvent = new Subject();
  constructor(
  ) {
   }

   stopTimer() {
     this.someEvent.next();
    //  this.timerComponent.stopTimer();
   }

}
