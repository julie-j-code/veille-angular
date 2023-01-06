import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  title:string="Template Driven Forms"
  status:string="active";
  name:string="";
  email: string="";

  genders = [
    {id: '1', value: 'Male'},
    {id: '2', value: 'Female'},
    {id: '3', value: 'Other'}
  ]

  constructor(private userService:UsersService){

  }

  addUser(form:any){
    // this.userService.AddNewUser(this.name, this.status)
    // désormais équivalent à
    this.userService.AddNewUser(form.value.personDetails.name, form.value.status)
    // this.userService.getUsers();
    console.log(form.value);

  }

}
