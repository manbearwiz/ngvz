import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { hierarchy, treemap, treemapResquarify, HierarchyNode } from 'd3-hierarchy';

@Component({
  selector: 'ngvz-treemap',
  templateUrl: './treemap.component.html',
  styleUrls: ['./treemap.component.scss']
})
export class TreemapComponent implements OnChanges {

  root: HierarchyNode<TreeNode>;

  @Input() nodes: TreeNode;
  @Input() width: number;
  @Input() height: number;
  @Input() innerPadding = 1;

  ngOnChanges() {
    if (!this.width || !this.height || !this.nodes) {
      return;
    }

    const treeMapper = treemap()
      .tile(treemapResquarify)
      .size([this.width, this.height])
      .round(true)
      .paddingInner(this.innerPadding);

    this.root = hierarchy(this.nodes)
      .eachBefore((d) => { d.data.id = (d.parent ? d.parent.data.id + '.' : '') + d.data.name; })
      .sum(d => (<LeafNode>d).size)
      .sort((a, b) => b.height - a.height || b.value - a.value);

    treeMapper(this.root);
  }

}

export interface LeafNode {
  id: string;
  name: string;
  size: number;
}

export function isLeafNode(x: any): x is LeafNode {
  return typeof x.size === 'number';
}

export interface BranchNode {
  id: string;
  name: string;
  children: TreeNode[];
}

export function isBranchNode(x: any): x is BranchNode {
  return Array.isArray(x.children);
}

export type TreeNode = LeafNode | BranchNode;
