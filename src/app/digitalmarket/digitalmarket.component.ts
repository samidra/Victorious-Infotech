import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digitalmarket',
  templateUrl: './digitalmarket.component.html',
  styleUrls: ['./digitalmarket.component.css']
})
export class DigitalmarketComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller) {}

  public onClick(elementId: string): void { 
  this.viewportScroller.scrollToAnchor(elementId);
}

  ngOnInit(): void {
  }

}
