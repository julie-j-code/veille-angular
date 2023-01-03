import { Component } from '@angular/core';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component {
  isAvailable:boolean=true
  // effectivement, si on swith ici entre catégories, on obtient bien côté rendu une selection conforme !!!!
  selectedCategory:string="category2"

}
