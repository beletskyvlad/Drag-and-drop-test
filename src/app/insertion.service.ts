import { Injectable, Type } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class InsertionService {
  onComponentInserted: Subject<Type<any>> = new Subject();
  notify(component: Type<any>) {
    this.onComponentInserted.next(component);
  }
}