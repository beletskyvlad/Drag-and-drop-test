import { Component, OnInit } from '@angular/core';

@Component({
  template: `<div ngDraggable ngResizable style="border-style: solid;">
              [DIV] Drag me
            </div>`,
  selector: "app-div"
})
export class DivComponent implements OnInit {
  ngOnInit() {
    console.log("new div component!");
  }
}