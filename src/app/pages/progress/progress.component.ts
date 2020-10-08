import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: [ './progress.component.css' ]
})
export class ProgressComponent  {

  progreso1 = 20;
  progreso2 = 40;

  get getProgreso1(): string{
    return `${ this.progreso1}%`;
  }

  get getProgreso2(): string{
    return `${this.progreso2}%`;
  }

  cambioValorHijo( valor: number): void{
    this.progreso1 = valor;
    
  }
}
