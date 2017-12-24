import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.styl']
})
export class SuccessComponent implements OnInit {
  returnRoute = "";
  constructor(private router:Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const sub = this.route.params.subscribe(params => {
      this.returnRoute = params['return'];
    })
    setTimeout(() => this.router.navigate([this.returnRoute]), 5000)
  }

}
