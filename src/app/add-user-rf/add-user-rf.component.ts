import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-add-user-rf',
  templateUrl: './add-user-rf.component.html',
  styleUrls: ['./add-user-rf.component.css']
})
export class AddUserRfComponent implements OnInit {
  title:string="Reactive Forms Demo"
  // https://stackoverflow.com/questions/66603888/where-to-initialise-a-formgroup-in-reactive-forms
  myReactiveForm: FormGroup = new FormGroup({});

  constructor(private userService: UsersService) {

  }

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      // https://angular.io/api/forms/Validators
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      gender: new FormControl('other'),
      status: new FormControl('active')
    })

  }


  addUser() {
    // we do not need key reference, cause we already have a ref : myReactiveForm
    console.log(this.myReactiveForm);
    this.userService.AddNewUser(this.myReactiveForm.value.name,this.myReactiveForm.value.status)

  }

}
