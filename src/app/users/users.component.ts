import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users:{name:string, status:string}[]=[]

  constructor(private userService:UsersService){

  }

  ngOnInit(): void {
    this.users=this.userService.getUsers()
    console.log(this.users);
  }

}
