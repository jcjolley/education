import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShapeMatchingComponent } from './shape-matching/shape-matching/shape-matching.component';
import { SuccessComponent } from './success/success/success.component';

const routes: Routes = [
    {path: 'matching', component: ShapeMatchingComponent},
    {path: 'matching/:numOptions', component: ShapeMatchingComponent},
    {path: 'success/:return', component: SuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
