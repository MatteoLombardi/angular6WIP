import { Component, OnInit } from '@angular/core';
import { MessaggioService } from '../messaggio.service';

@Component({
  selector: 'app-messaggi',
  templateUrl: './messaggi.component.html',
  styleUrls: ['./messaggi.component.css']
})
export class MessaggiComponent implements OnInit {

  constructor(public messaggioService: MessaggioService) { }

  ngOnInit() {
  }

}
