import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { GraficoService } from './grafico.service';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public names: string[];
  public scores: number[];
  public coloriGrafico: string[];
  public chart: Chart;
  constructor(private _grafico: GraficoService) {
    this.names = [];
    this.scores = [];
    this.coloriGrafico = this.colorGenerator();
  }


  ngOnInit() {
    this._grafico.graficoClienti()
      .subscribe((res: any[]) => {

        res.forEach(({ nome, score }) => {
          this.names.push(nome);
          this.scores.push(score);
        });

        var canvas = <HTMLCanvasElement>document.getElementById("pippo");
        var ctx: CanvasRenderingContext2D = canvas.getContext("2d");
        //var ctx = <CanvasRenderingContext2D> document.getElementById("pippo");
        //.getContext('2d');
        this.chart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: this.names,
            datasets: [{
              data: this.scores,
              borderColor: '#1b1b1b',
              backgroundColor: this.coloriGrafico,
              fill: true
            }]
          },
          options: {
            legend: {
              display: false
            }
          }
        });
      });

  }
  public colorGenerator(num = 900) {
    const res = new Array(num);
    res.fill('');
    return res.map(() => "#" + Math.random().toString(16).slice(2, 8));
  }
}