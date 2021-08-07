import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CommentsComponent } from './components/comments/comments.component';
import { LongPressDirective } from './directives/long-press.directive';
import { SingleCommentComponent } from './components/single-comment/single-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
    LongPressDirective,
    SingleCommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
