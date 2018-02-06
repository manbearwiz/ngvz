import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { SimulationNodeDatum, forceSimulation, forceLink, forceManyBody, forceCenter } from 'd3-force';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ngvz-force-directed',
  templateUrl: './force-directed.component.html',
  styleUrls: ['./force-directed.component.scss']
})
export class ForceDirectedComponent implements OnChanges {

  @Input() nodes: GraphNode[];
  @Input() links: GraphLink[];
  @Input() width: number;
  @Input() height: number;

  ngOnChanges() {
    forceSimulation(this.nodes)
      .force('link', forceLink(this.links).id((d: GraphNode) => d.id))
      .force('charge', forceManyBody())
      .force('center', forceCenter(this.width / 2, this.height / 2));
  }
}

export interface RootObject {
  nodes: GraphNode[];
  links: GraphLink[];
}

export interface GraphLink {
  source: string;
  target: string;
  value: number;
}

export interface GraphNode extends SimulationNodeDatum {
  id: string;
  group: number;
}
