import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularDraggableModule } from 'angular2-draggable';
import { DivComponent } from './div.component';
import { SpanComponent } from './span.component';
import { InsertionRootDirective } from './insertion-root-directive';
import { DynamicContainerComponent } from './dynamic-container.component';
import { InsertionService } from './insertion.service';

@NgModule({
  declarations: [
    AppComponent,
    DivComponent,
    SpanComponent,
    InsertionRootDirective,
    DynamicContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularDraggableModule
  ],
  providers: [
    InsertionService
  ],
  bootstrap: [AppComponent],
  entryComponents: [    
    DivComponent,
    SpanComponent
  ]
})
export class AppModule { }
