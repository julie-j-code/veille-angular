import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  readenText:string=""

  constructor(private dataService : DataService){
  }

  ngOnInit(): void {
    this.dataService.nameEmitter.subscribe((value)=>{
      this.readenText=value
    })

  }


}
