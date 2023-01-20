import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {UsersComponent} from "./users/users.component";
import {FunixprodComponent} from "./funixprod.component";
import {UserEditComponent} from "./users/user-edit/user-edit.component";

const routes: Routes = [
  { path: '', component: FunixprodComponent, children: [
      { path: 'users', component: UsersComponent},
      { path: 'users/:id', component: UserEditComponent},
      { path: '', redirectTo: 'users', pathMatch: 'full'},
      { path: '**', redirectTo: 'users' }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class FunixprodRoutingModule { }
