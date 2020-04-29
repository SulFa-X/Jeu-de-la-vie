import { Component, OnInit, Input } from '@angular/core';
import { Population } from '../population';
import { trigger,transition,animate,style, state } from '@angular/animations';
import { setClassMetadata } from '@angular/core/src/r3_symbols';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  animations: [
    trigger('cell', [
      state('void',style({
        transform: 'scale(0.1)'
      })),
      transition('void => *',
        animate('0.1s')
      ),
      transition('* => void',
        animate('0.1s')
      ),
    ])
  ]
          })


export class GridComponent implements OnInit {
  @Input() population: Population;

  constructor() { }

  ngOnInit(): void { }

  trackByColumn(index: number, item: number[]): number{
    return index;
  }

}
