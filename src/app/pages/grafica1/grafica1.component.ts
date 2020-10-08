import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component  {

  public labels: string [] = ['Pan', 'Refreso', 'Tacos'];
  public data = [
    [100, 350 , 100]
  ];

}
