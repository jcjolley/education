import { Component, OnInit } from '@angular/core';
import { ShapeMatchingService } from '../shape-matching.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shape-matching',
  templateUrl: './shape-matching.component.html',
  styleUrls: ['./shape-matching.component.styl']
})
export class ShapeMatchingComponent implements OnInit {

  constructor(public shapeMatchingService: ShapeMatchingService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const sub = this.route.params.subscribe(params => 
      this.shapeMatchingService.numOptions = params['numOptions'] || 3
    )

    this.shapeMatchingService.getNewShapes();
  }

}
