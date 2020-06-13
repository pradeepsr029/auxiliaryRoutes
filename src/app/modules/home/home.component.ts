import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { skipUrlChange } from 'src/app/helper/helper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  changeRoute() {
    this._router.navigate(['', { outlets: { auxName: 'aux' }, }], { skipLocationChange: skipUrlChange })
  }

}
