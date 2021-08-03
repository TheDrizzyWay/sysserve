import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  textBox: HTMLTextAreaElement;
  playing: boolean;
  showAttachments: boolean;

  @ViewChild('playPause') playBtn: ElementRef<HTMLDivElement>;

  constructor() { 
    this.playing = false;
    this.showAttachments = false;
  }

  ngOnInit(): void {
    this.setTextAreaHeight()
  }

  get isTyping(): boolean {
    return this.textBox.value.trim().length > 0;
  }

  setTextAreaHeight(): void {
    this.textBox = <HTMLTextAreaElement>document.getElementById('post-comment');

    this.textBox.setAttribute('style', 'height:' + (this.textBox.scrollHeight + 4) + 'px;overflow-y:hidden;');
    this.textBox.addEventListener('input', () => {
      this.textBox.style.height = 'auto';
      this.textBox.style.height = (this.textBox.scrollHeight) + 'px';
    }, false);
  }

  openAttachments(): void {
    this.showAttachments = true;
  }

  // TODO separate audio component
  play(): void {
    if (this.playBtn.nativeElement.classList.contains('play')) {
      this.playBtn.nativeElement.classList.remove('play');
      this.playBtn.nativeElement.classList.add('pause');
      this.playing = true;
    } else {
      this.playBtn.nativeElement.classList.remove('pause');
      this.playBtn.nativeElement.classList.add('play');
      this.playing = false;
    }
  }

  postComment() {
    if (this.showAttachments) {
      this.showAttachments = false;
      return;
    }
  }

}
