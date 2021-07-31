import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentComponent } from './components/comment/comment.component';


const routes: Routes = [
  {
    path: '',
    component: CommentComponent
  },
  {
    path: '**',
    component: CommentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false,
    urlUpdateStrategy: 'deferred',
    relativeLinkResolution: 'legacy'
  })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
