import { Component, OnInit, Input } from '@angular/core';
import { Population } from '../population';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
 
  population = new Population(20,15);
  
  constructor() { }

  ngOnInit(): void {
  }
  
 
}
