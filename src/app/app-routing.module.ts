import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DeptlistComponent } from './deptlist/deptlist.component';
import { DcreateComponent } from './dcreate/dcreate.component';


const routes: Routes = [
  {path:'deptlist', component:DeptlistComponent},
  {path:'dcreate', component:DcreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
