import { Component, ViewChild, ComponentFactoryResolver, Type, OnInit, OnDestroy } from '@angular/core';
import { InsertionRootDirective } from './insertion-root-directive';
import { InsertionService } from './insertion.service';
import { Subscription } from 'rxjs';

@Component({
  selector: "app-dynamic-container",
  template: `<div app-insertion-root></div>`
})
export class DynamicContainerComponent implements OnInit, OnDestroy {
  @ViewChild(InsertionRootDirective, {static: true}) host: InsertionRootDirective;
  subscription: Subscription;
  constructor(private componentFactoryResolver: ComponentFactoryResolver, private insertionService: InsertionService) {
  }

  ngOnInit() {
    this.subscription && this.subscription.unsubscribe();
    this.subscription = this.insertionService.onComponentInserted.subscribe(component => this.insertComponent(component));
  }

  insertComponent(component: Type<any>) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    const viewContainerRef = this.host.viewContainerRef;

    const componentRef = viewContainerRef.createComponent(componentFactory);
  }


  ngOnDestroy() {
    this.subscription && this.subscription.unsubscribe();
  }
}