import { Component, OnInit, Input } from '@angular/core';
import { Population } from '../population';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @Input() population: Population;

  constructor() { }

  ngOnInit(): void { }


}
