import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: "[app-insertion-root]"
})
export class InsertionRootDirective {
  constructor(public viewContainerRef: ViewContainerRef) {
  }
}