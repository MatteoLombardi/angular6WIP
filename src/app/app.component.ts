import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { GraficoService } from './grafico.service';
import { Chart } from 'chart.js';
import html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {

  }


  ngOnInit() {

  }
  exportToPDF() {
    var element = document.getElementById('export-dash');
    var opt = {
      margin: 1,
      filename: 'exportDashboard.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'landscape' }

    };
    html2pdf().from(element).set(opt).save();

    var element2 = document.getElementById('export-graph');
    var opt2 = {
      margin: 0,
      filename: 'exportGrafico.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'landscape' }
    };
    html2pdf().from(element2).set(opt2).save();

  }
}
