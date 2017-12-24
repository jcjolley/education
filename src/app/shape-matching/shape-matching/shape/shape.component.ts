import { Component, OnInit, Input} from '@angular/core';
import { ShapeMatchingService } from '../../shape-matching.service';

@Component({
  selector: 'shape',
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.styl']
})
export class ShapeComponent implements OnInit {
  @Input() shape: string;
  constructor() { }

  ngOnInit() {
  }


}
