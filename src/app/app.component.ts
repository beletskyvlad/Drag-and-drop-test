import { Component, ViewChild, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { DivComponent } from './div.component';
import { SpanComponent } from './span.component';
import { InsertionService } from './insertion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private resolver: ComponentFactoryResolver, private insertionService: InsertionService) {

  }

  title = 'drag-and-drop-test';

  @ViewChild("insertionRoot", { read: ViewContainerRef, static: true }) insertionRoot: ViewContainerRef;

  componentsDictionary = {
    div: DivComponent,
    span: SpanComponent
  }

  addNewInstance(key: string) {
    const component = this.componentsDictionary[key];
    this.insertionService.notify(component);
    return;

    const componentFactory = this.resolver.resolveComponentFactory(component);
    const componentInstance = this.insertionRoot.createComponent(componentFactory);

    // We insert the component into the dom container
    this.insertionRoot.insert(componentInstance.hostView);
  }


}
