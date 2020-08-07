import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent implements OnInit {
  @Input() formName;
  @Input() pageId = 0;

  isVisibleBack = false;

  constructor(private router : Router) { }

  ngOnInit() {
    console.log('inside init');
    this.isVisibleBack = this.pageId === 0 ? false : true;
  }
  // ngOnChanges() {
  //   console.log('inside on chnages');
  //   this.isVisibleBack = this.pageId === 0 ? false : true;
  // }
  redirectBack() {
    this.router.navigate(['/customer']);
  }
  redirectNext() {
    this.router.navigate(['/vehicle']);
  }

}
