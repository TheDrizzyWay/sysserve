import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentsComponent } from './components/comments/comments.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'comment',
    pathMatch: 'full'
  },
  {
    path: 'comment',
    component: CommentsComponent
  },
  {
    path: '**',
    component: CommentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
