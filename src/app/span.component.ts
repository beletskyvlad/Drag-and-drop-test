import { Component } from '@angular/core';

@Component({
  selector: "app-span",
  template: `<span ngDraggable ngResizable style="border-style: solid;">
              Drag me
            </span>`
})
export class SpanComponent {

}