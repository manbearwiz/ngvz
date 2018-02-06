import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { RootObject } from './lib/force-directed/force-directed.component';

@Component({
  selector: 'ngvz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  links$: Observable<any>;
  nodes$: Observable<any>;
  miserable$: Observable<any>;
  flare$: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.flare$ = this.http.get<Array<{ id: string, value: number }>>('./assets/flare.json')
      .map(flares => flares
        .filter(f => f.value).map(n => ({
          ...n,
          class: n.id ? n.id.slice(n.id.lastIndexOf('.') + 1) : ''
        })));

    this.miserable$ = this.http.get<RootObject>('./assets/miserables.json');
    this.nodes$ = this.miserable$.map(m => m.nodes);
    this.links$ = this.miserable$.map(m => m.links);
  }
}
