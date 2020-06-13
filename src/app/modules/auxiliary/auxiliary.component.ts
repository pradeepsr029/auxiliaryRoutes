import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { skipUrlChange } from 'src/app/helper/helper';

@Component({
  selector: 'app-auxiliary',
  templateUrl: './auxiliary.component.html',
  styleUrls: ['./auxiliary.component.scss']
})
export class AuxiliaryComponent implements OnInit {
  public skipUrl = skipUrlChange;

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  closePopup() {
    this._router.navigate(['', { outlets: { auxName: null } }])
  }

}
