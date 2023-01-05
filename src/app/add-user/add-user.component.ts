import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  name:string=""
  status:string="active"

  constructor(private userService:UsersService){

  }

  addUser(form:any){
    // this.userService.AddNewUser(this.name, this.status)
    // désormais équivalent à
    this.userService.AddNewUser(form.value.name, form.value.status)
    console.log(this.userService.getUser);
    console.log(form.value);

  }

}
