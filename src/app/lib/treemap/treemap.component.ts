import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { hierarchy, treemap, treemapResquarify, HierarchyNode } from 'd3-hierarchy';

@Component({
  selector: 'ngvz-treemap',
  templateUrl: './treemap.component.html',
  styleUrls: ['./treemap.component.scss']
})
export class TreemapComponent implements OnChanges {

  @Input() nodes: TreeNode;
  @Input() width: number;
  @Input() height: number;
  @Input() innerPadding = 1;

  leaves: HierarchyNode<TreeNode>[];

  ngOnChanges() {
    if (!this.width || !this.height || !this.nodes) {
      return;
    }

    const treeMapper = treemap()
      .tile(treemapResquarify)
      .size([this.width, this.height])
      .round(true)
      .paddingInner(this.innerPadding);

    const root = hierarchy(this.nodes)
      .eachBefore((d: any) => { d.data.id = (d.parent ? d.parent.data.id + '.' : '') + d.data.name; })
      .sum((d: LeafNode) => d.size)
      .sort((a, b) => b.height - a.height || b.value - a.value);

    treeMapper(root);

    this.leaves = root.leaves();
  }

}

export interface LeafNode {
  name: string;
  size: number;
}

export interface BranchNode {
  name: string;
  children: BranchNode | LeafNode[];
}

export type TreeNode = LeafNode | BranchNode;
