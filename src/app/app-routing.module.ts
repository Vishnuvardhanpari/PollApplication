import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpinionComponent } from './opinion/opinion.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  {path:'',component:OpinionComponent},
  {path:'results', component:ResultsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
