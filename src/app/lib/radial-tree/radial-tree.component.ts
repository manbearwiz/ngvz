import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { hierarchy, pack, HierarchyNode, tree, stratify, HierarchyPointNode } from 'd3-hierarchy';
import { linkRadial, LinkRadial, DefaultLinkObject } from 'd3-shape';

@Component({
  selector: 'ngvz-radial-tree',
  templateUrl: './radial-tree.component.html',
  styleUrls: ['./radial-tree.component.scss']
})
export class RadialTreeComponent implements OnChanges {


  toRadial: LinkRadial<any, DefaultLinkObject, [number, number]>;
  root: HierarchyPointNode<{}>;
  // root: HierarchyNode<{ children: { id: string; value: number; }[]; }>;

  @Input() data: { id: string, value: number }[];
  @Input() width: number;
  @Input() height: number;
  // @Input() bubblePadding = 1.5;

  pi = Math.PI;

  radialPoint(x, y) {
    return [(y = +y) * Math.cos(x -= Math.PI / 2), y * Math.sin(x)];
  }

  ngOnChanges() {
    if (!this.width || !this.height || !this.data) {
      return;
    }

    const stratifier = stratify<{ id: string, value: number }>()
      .parentId(d => d.id.substring(0, d.id.lastIndexOf('.')));

    const treeBuilder = tree()
      .size([2 * Math.PI, 500])
      .separation((a, b) => (a.parent === b.parent ? 1 : 2) / a.depth);

    this.root = treeBuilder(stratifier(this.data));

    const foo = this.root.links();

    this.toRadial = linkRadial()
      .angle((d: any) => d.x)
      .radius((d: any) => d.y);
  }

}
