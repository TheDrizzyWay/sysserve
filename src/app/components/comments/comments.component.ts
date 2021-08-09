import { Component, OnInit } from '@angular/core';
import { CommentModel } from 'src/app/models/comment';
import { CommentsService } from 'src/app/services/comments.service';
import { checkSameDay } from 'src/app/utils/same-date';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  textBox: HTMLTextAreaElement;
  targetWrapper: HTMLDivElement;
  target: HTMLDivElement;
  showAttachments: boolean;
  isPressed = false;
  allComments: CommentModel[];

  constructor(private commentsService: CommentsService) { 
    this.showAttachments = false;
    this.allComments = [];
  }

  ngOnInit(): void {
    this.setTextAreaHeight();
    this.commentsService.getAll().subscribe(data => this.allComments = data);
  }

  ngAfterViewInit() {
    // this.target = <HTMLDivElement>document.getElementById('target');
    this.target = document.querySelector('.last');
    this.target.scrollIntoView();
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

  postComment() {
    if (this.showAttachments) {
      this.showAttachments = false;
      return;
    }

    const newComment = {
      id: this.allComments[this.allComments.length - 1].id + 1,
      creator: {
        id: 1,
        name: 'Chris Drizzy',
        imageUrl: null
      },
      dateCreated: (Date.now() * 1000).toString(),
      commentType: "text",
      content: "The plumbers have not yet responded to my calls"
    };

    console.log('pushed');
    this.allComments.push(newComment);
    this.target.scrollIntoView();
  }

  showDate(index: number): boolean {
    const currentDate = Number(this.allComments[index].dateCreated);
    const previousComment = this.allComments[index - 1];

    if (!previousComment) {
      return true;
    }

    const previousDate = Number(previousComment.dateCreated);
    return !checkSameDay(new Date(currentDate), new Date(previousDate));
  }

}
