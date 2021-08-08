import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CommentsComponent } from './components/comments/comments.component';
import { LongPressDirective } from './directives/long-press.directive';
import { SingleCommentComponent } from './components/single-comment/single-comment.component';
import { AudioPlayerComponent } from './components/audio-player/audio-player.component';
import { ConvertTimePipe } from './pipes/convert-time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
    LongPressDirective,
    SingleCommentComponent,
    AudioPlayerComponent,
    ConvertTimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
