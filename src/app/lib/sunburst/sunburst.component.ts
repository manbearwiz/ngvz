import { Component, OnChanges, Input } from '@angular/core';
import { scaleLinear, ScaleLinear, scaleSqrt, ScalePower } from 'd3-scale';
import { partition, hierarchy, HierarchyNode, HierarchyRectangularNode } from 'd3-hierarchy';
import { arc, Arc, DefaultArcObject } from 'd3-shape';
// import { interpolate } from 'd3-interpolate';
// import { select } from 'd3-selection';
// import { transition } from 'd3-transition';
import { TreeNode } from '../treemap/treemap.component';

@Component({
  selector: 'ngvz-sunburst',
  templateUrl: './sunburst.component.html',
  styleUrls: ['./sunburst.component.scss']
})
export class SunburstComponent implements OnChanges {

  radius: number;
  descendants: HierarchyRectangularNode<TreeNode>[];
  arc: Arc<any, HierarchyRectangularNode<TreeNode>>;
  root: HierarchyNode<TreeNode>;
  y: ScalePower<number, number>;
  x: ScaleLinear<number, number>;
  @Input() width: number;
  @Input() height: number;
  @Input() data;

  selected(node: HierarchyRectangularNode<TreeNode>) {
    // TODO: Smoothly transition, preferable with Angular animations
    /*
    const xd = interpolate(this.x.domain(), [node.x0, node.x1]),
      yd = interpolate(this.y.domain(), [node.y0, 1]),
      yr = interpolate(this.y.range(), [node.y0 ? 20 : 0, this.radius]);

    const tr = transition()
      .duration(750)
      .tween('scale', () =>
        (t) => {
          this.x.domain(xd(t));
          this.y.domain(yd(t)).range(yr(t));
        })
      .selectAll('path')
      .attrTween('d', () => () => this.arc(node));

    select('body').append('svg').transition(tr);
    */

    this.x.domain([node.x0, node.x1]);
    this.y.domain([node.y0, 1]).range([node.y0 ? 20 : 0, this.radius]);
  }

  ngOnChanges() {
    this.radius = (Math.min(this.width, this.height) / 2) - 10;

    this.x = scaleLinear()
      .range([0, 2 * Math.PI]);

    this.y = scaleSqrt()
      .range([0, this.radius]);

    this.arc = arc<HierarchyRectangularNode<TreeNode>>()
      .startAngle(d => Math.max(0, Math.min(2 * Math.PI, this.x(d.x0))))
      .endAngle(d => Math.max(0, Math.min(2 * Math.PI, this.x(d.x1))))
      .innerRadius(d => Math.max(0, this.y(d.y0)))
      .outerRadius(d => Math.max(0, this.y(d.y1)));

    this.root = hierarchy(this.data)
      .sum(d => d.size)
      .sort((a, b) => b.value - a.value);

    this.descendants = partition<TreeNode>()(this.root).descendants();
  }
}
