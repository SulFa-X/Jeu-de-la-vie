import { Component, OnInit, Input } from '@angular/core';
import { Population } from '../population';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
 


  population = new Population(20,15);
  interval: number;

  
  constructor() { }

  ngOnInit(): void {
  }
  
  play() {
    this.interval = window.setInterval(() => this.population.nextGeneration(), 1000);
  }
 
  stop() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

}
