import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

import { GraficoService } from '../grafico.service';
import { Chart } from 'chart.js';
import { Observable, of } from '../../../node_modules/rxjs';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  [x: string]: any;
  clienti: Cliente[] = [];
  public names: string[];
  public scores: number[];
  public coloriGrafico: string[];
  public chart: Chart;
 

  constructor(private clienteService: ClienteService, private _grafico: GraficoService) {
    this.names = [];
    this.scores = [];
    this.coloriGrafico = this.colorGenerator();

  }

  ngOnInit() {
    this.getClienti();
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

  getClienti(): void {
    this.clienteService.getClienti()
      .subscribe(clienti => this.clienti = clienti.slice(0, 4));
  }
  public colorGenerator(num = 900) {
    const res = new Array(num);
    res.fill('');
    return res.map(() => "#" + Math.random().toString(16).slice(2, 8));
  }
 
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} fallita: ${error.message}`);
      return of(result as T);
    }
  }
}