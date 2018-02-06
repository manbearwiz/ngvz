import { Component, OnInit, Input, ViewChild, ElementRef, OnChanges } from '@angular/core';
import { hierarchy, pack, HierarchyNode } from 'd3-hierarchy';

@Component({
  selector: 'ngvz-bubble',
  templateUrl: './bubble.component.html',
  styleUrls: ['./bubble.component.scss']
})
export class BubbleComponent implements OnChanges {

  @Input() nodes: { id: string, value: number }[];
  @Input() width: number;
  @Input() height: number;
  @Input() bubblePadding = 1.5;

  pack: HierarchyNode<{ children: { id: string; value: number; }[]; }>[];

  ngOnChanges() {
    if (!this.width || !this.height || !this.nodes) {
      return;
    }

    const customPacker = pack()
      .size([this.width, this.height])
      .padding(this.bubblePadding);

    const root = hierarchy({ children: this.nodes })
      .sum((d: any) => d.value);

    customPacker(root);

    this.pack = root.leaves();
  }
}
