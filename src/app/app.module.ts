import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CommentComponent } from './components/comment/comment.component';
import { LongPressDirective } from './directives/long-press.directive';

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    LongPressDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
