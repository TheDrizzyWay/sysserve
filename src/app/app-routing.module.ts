import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentComponent } from './components/comment/comment.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'comment',
    pathMatch: 'full'
  },
  {
    path: 'comment',
    component: CommentComponent
  },
  {
    path: '**',
    component: CommentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
