import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {TicketsComponent} from "./tickets.component";

const routes: Routes = [
  { path: '', component: TicketsComponent, children: [

      {
        path: '',
        redirectTo: 'news',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: 'news'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsRoutingModule { }
