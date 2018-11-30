import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdmingamesComponent } from './components/admingames/admingames.component';
import { AdminplayersComponent } from './components/adminplayers/adminplayers.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        children: [
          { path:'admingames', component: AdmingamesComponent },
          { path:'adminplayers', component: AdminplayersComponent },
          { path: '', component: AdminComponent }
        ]
      }
    ]
  }

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
