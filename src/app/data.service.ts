import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // custom event creation
  nameEmitter = new EventEmitter<string>

  // methode to raise this event
  raiseNameEmitterEvent(data: string) {
    this.nameEmitter.emit(data)
  }


}
