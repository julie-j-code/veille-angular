import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  // with custom event creation
  // nameEmitter = new EventEmitter<string>
  // achieving the same with subject
  nameEmitter=new Subject<string>()

  // methode to raise this event
  raiseNameEmitterEvent(data: string) {
    // this.nameEmitter.then(data)
    // with Subject, instead of emit method, we will use next
    this.nameEmitter.next(data)
  }


}
