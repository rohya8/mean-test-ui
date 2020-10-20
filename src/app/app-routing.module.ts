import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUpdateComponent } from './component/create-update/create-update.component';
import { ListComponent } from './component/list/list.component';


const routes: Routes = [{
  path: '',
  component: ListComponent
}, {
  path: 'createUpdate',
  component: CreateUpdateComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
