import { Component } from '@angular/core';

import { TimerComponent } from './timer/timer.component';
import { TimerService } from './timer.service';

interface CodeMetrics {
  text: string;
  availableAttempts: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private codesArray: Array<CodeMetrics>;
  private current: number;
  private isToShowForm = false;
  constructor(
    private timerServise: TimerService
  ) {
    this.codesArray = new Array<CodeMetrics>();
    this.codesArray.push( {text:'2МПЦ9Н3СЛК5', availableAttempts: 3} );
    this.codesArray.push( {text:'МПЯ9Н3СЛ2МС4', availableAttempts: 3} );
    this.codesArray.push( {text:'ПХ9Н3СЛ2МТ3', availableAttempts: 3} );
    this.codesArray.push( {text:'Т9Н3СЛ2МПС2', availableAttempts: 3} );
    this.codesArray.push( {text:'Н3СЛ2МПЦ9И1', availableAttempts: 3} );
    this.codesArray.push( {text:'3СЛ2МПВ9НБ6', availableAttempts: 3} );
    this.codesArray.push( {text:'СЛ2МПГ9Н3У7', availableAttempts: 3} );
    this.codesArray.push( {text:'Л2МПЭ9Н3СР8', availableAttempts: 3} );
  }

  isEnabled(i: number) {
    return this.codesArray[i-1].availableAttempts > 0;
  }
  onTeam1Clicked(team: number) {
    this.isToShowForm = !this.isToShowForm;
    this.current = team-1;
  }

  onCodeClicked(team: string) {
    this.isToShowForm = false;
    let count = this.codesArray[this.current].availableAttempts;
    
    if (count > 0 &&
        team.toUpperCase() === this.codesArray[this.current].text) {
      this.timerServise.stopTimer();
    }
    else 
    {
      if (count > 0) {
        count--;
      }
    }
    this.codesArray[this.current].availableAttempts = count;
  }
}
