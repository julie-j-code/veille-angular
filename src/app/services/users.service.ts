import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users=[
    {name : 'John', status:'active'},
    {name : 'Mark', status:'inactive'},
    {name : 'John', status:'active'}
  ]

  constructor(private logger:LoggerService) {

   }
  AddNewUser(name:string, status:string){
    console.log(name);

    this.users.push({name:name, status:status})
    this.logger.logMessage(name,status)
  }

  getUsers(){
    return this.users
  }

}
