import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperationsListComponent } from './components/operations-list/operations-list.component';
import { OperationDetailsComponent } from './components/operation-details/operation-details.component';
import { AddOperationComponent } from './components/add-operation/add-operation.component';

const routes: Routes = [
  { path: '', redirectTo: 'operations', pathMatch: 'full' },
  { path: 'operations', component: OperationsListComponent },
  { path: 'operations/:id', component: OperationDetailsComponent },
  { path: 'add', component: AddOperationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
