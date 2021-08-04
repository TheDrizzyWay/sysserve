import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit, AfterViewInit {
  textBox: HTMLTextAreaElement;
  playing: boolean;
  showAttachments: boolean;
  isPressed = false;

  @ViewChild('playPause') playBtn: ElementRef<HTMLDivElement>;

  constructor(private renderer: Renderer2) { 
    this.playing = false;
    this.showAttachments = false;
  }

  ngOnInit(): void {
    this.setTextAreaHeight()
  }

  ngAfterViewInit() {
   
  }

  get isTyping(): boolean {
    return this.textBox.value.trim().length > 0;
  }

  setTextAreaHeight(): void {
    this.textBox = <HTMLTextAreaElement>document.getElementById('post-comment');

    this.textBox.setAttribute('style', 'height:' + (this.textBox.scrollHeight + 1) + 'px;overflow-y:hidden;');
    this.textBox.addEventListener('input', () => {
      this.textBox.style.height = 'auto';
      this.textBox.style.height = (this.textBox.scrollHeight) + 'px';
    }, false);
  }

  openAttachments(): void {
    this.showAttachments = true;
  }

  handleEnterKey(event: KeyboardEvent) {
    event.preventDefault();
    this.postComment();
  }

  // TODO separate audio component
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

  postComment() {
    if (this.showAttachments) {
      this.showAttachments = false;
      return;
    }
  }

  showOthers() {
    console.log('long pressed');
    this.isPressed = true;
  }

}
