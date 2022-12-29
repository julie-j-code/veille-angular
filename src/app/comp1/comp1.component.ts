import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {
  inputName:string=""

  constructor(private dataservice:DataService){

  }
  getName=()=>{
   console.log(this.inputName);
   this.dataservice.raiseNameEmitterEvent(this.inputName)

  }

}
