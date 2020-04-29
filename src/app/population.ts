import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { Observable, interval } from 'rxjs';

export class Population {
    rows: Array<Array<number>> = [];

    
    constructor(public nRows: number, public nCols: number) {
        for (let row = 0 ; row < this.nRows ; row++) {
          const currentRow: Array<number> = [];
          for (let col = 0 ; col < this.nCols ; col++) {
            currentRow.push(0);
          }
          this.rows.push(currentRow);
        }
        this.rows[0][0] = 1;
        this.rows[5][11] = 1;
    }

    hasCell(i:number, j: number): boolean {
        return i>= 0 && i < this.nRows 
                && j >=0 && j < this.nCols 
                && this.rows[i][j] === 1;
    }

    toggleCell(i:number, j: number): void {
        this.rows[i][j] = 1 - this.rows[i][j];
    }
    
    nextGeneration(): void {
        const newRows: Array<Array<number>> = [];
        for (let row = 0 ; row < this.nRows ; row++) {
            newRows[row] = [];
            for (let col = 0 ; col < this.nCols ; col++) {
                const neighbours = this.countNeighbours(row, col);
                const nextCell = neighbours === 3 || (neighbours === 2 && this.hasCell(row, col));
                newRows[row][col] = nextCell ? 1 : 0;
            
            }
        }
        for (let row = 0 ; row < this.nRows ; row++) {
            for (let col = 0 ; col < this.nCols ; col++) {
                this.rows[row][col] = newRows[row][col]
            }
        }
    }
  
    private countNeighbours(rowIndex: number, colIndex: number): number {
        return (this.hasCell(rowIndex - 1, colIndex - 1) ? 1 : 0)
            + (this.hasCell(rowIndex - 1, colIndex) ? 1 : 0)
            + (this.hasCell(rowIndex - 1, colIndex + 1) ? 1: 0)
            + (this.hasCell(rowIndex, colIndex - 1) ? 1 : 0)
            + (this.hasCell(rowIndex, colIndex + 1) ? 1 : 0)
            + (this.hasCell(rowIndex + 1, colIndex - 1) ? 1 : 0)
            + (this.hasCell(rowIndex + 1, colIndex) ? 1 : 0)
            + (this.hasCell(rowIndex + 1, colIndex + 1) ? 1 : 0);
    }
  
}
