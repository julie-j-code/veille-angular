import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { TestDirectivesComponent } from './test-directives/test-directives.component';
import { CustomDirective } from './test-directives/custom.directive';
import { HighlightDirective } from './test-directives/highlight.directive';
import { Comp3Component } from './comp3/comp3.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { CreatingObservablesComponent } from './creating-observables/creating-observables.component';
import { AddUserRfComponent } from './add-user-rf/add-user-rf.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    TestDirectivesComponent,
    HighlightDirective,
    CustomDirective,
    Comp3Component,
    UsersComponent,
    AddUserComponent,
    CreatingObservablesComponent,
    AddUserRfComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
