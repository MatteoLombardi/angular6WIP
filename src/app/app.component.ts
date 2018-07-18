import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import {GraficoService} from './grafico.service';
import {Chart} from 'chart.js'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public names:string[];
  public scores:number[];
  public coloriGrafico:string[];
  public chart:Chart;
  constructor(private _grafico:GraficoService){
    this.names=[];
    this.scores=[];
    this.coloriGrafico=[];
  }


  ngOnInit(){
    this._grafico.graficoClienti()
    .subscribe(res => {
        for (let i:number=0; i<Object.keys(res).length; i++){
          this.names.push(res[i].nome);
          this.scores.push(res[i].score); 
        }
        console.log(this.scores);
        console.log(this.names);
        this.colorGenerator();
    });
    var canvas = <HTMLCanvasElement> document.getElementById("pippo");
    if(canvas!=null){
      var ctx: CanvasRenderingContext2D = canvas.getContext("2d");
      //var ctx = <CanvasRenderingContext2D> document.getElementById("pippo");
      //.getContext('2d');
      this.chart = new Chart(ctx, {
        type:'bar',
        data:{
          labels: this.names,
          datasets:[{
            data: this.scores,
            borderColor: '#1b1b1b',
            backgroundColor: this.coloriGrafico,
            fill: true
          }]
        },
        options:{
          legend:{
            display:false
          }
        }
      });
      }
    
  }
  public colorGenerator(){
    let color:string;
    for (let i:number=0; i<900; i++){
    color = "#" + Math.random().toString(16).slice(2, 8);
    console.log(color);
    this.coloriGrafico.push(color); 
    }
}
}