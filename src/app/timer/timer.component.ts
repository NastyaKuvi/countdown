import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
    selector: 'app-timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

    timerValue: string = '';
    ticks = 7200;
    sub: Subscription;

    ngOnInit() {
        this.getRemainingTime();
    }

    private startTimer() {

        let timer = Observable.timer(1, 1000);
        this.sub = timer.subscribe(
            t => {
                this.ticks--;
                
                this.getRemainingTime();

                if (!this.ticks) {
                  this.sub.unsubscribe();
                }
            }
        );
    }

  private getRemainingTime() {
    let secondsDisplay = this.getSeconds(this.ticks);
    let minutesDisplay = this.getMinutes(this.ticks);
    let hoursDisplay = this.getHours(this.ticks);
    this.timerValue = (hoursDisplay ? hoursDisplay : '00') + ':' +
                      ( (minutesDisplay) && (minutesDisplay <= 59) ? minutesDisplay : '00') + ':' +
                      ((secondsDisplay) && (secondsDisplay <= 59) ? secondsDisplay : '00');
    
  }

    private getSeconds(ticks: number) {
        return this.pad(ticks % 60);
    }

    private getMinutes(ticks: number) {
         return this.pad((Math.floor(ticks / 60)) % 60);
    }

    private getHours(ticks: number) {
        return this.pad(Math.floor((ticks / 60) / 60));
    }

    private pad(digit: any) { 
        return digit <= 9 ? '0' + digit : digit;
    }
}