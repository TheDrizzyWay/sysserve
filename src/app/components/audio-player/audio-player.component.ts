import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.css']
})
export class AudioPlayerComponent implements OnInit {
  playing: boolean;

  @Input() myComment: boolean;
  @Input() commentTime: string;
  @Input() duration: number;
  @ViewChild('playPause') playBtn: ElementRef<HTMLDivElement>;

  constructor(private renderer: Renderer2) { 
    this.playing = false;
  }

  ngOnInit(): void {
  }

  setPlayerClass(): object {
    return {
      'is-playing': this.playing,
      'history-sent': this.myComment,
      'history-received': !this.myComment
    }
  }

  play(): void {
    if (this.playBtn.nativeElement.classList.contains('play')) {
      this.renderer.addClass(this.playBtn.nativeElement, 'pause');
      this.renderer.removeClass(this.playBtn.nativeElement, 'play');
      this.playing = true;
    } else {
      this.renderer.removeClass(this.playBtn.nativeElement, 'pause');
      this.renderer.addClass(this.playBtn.nativeElement, 'play');
      this.playing = false;
    }
  }

}
