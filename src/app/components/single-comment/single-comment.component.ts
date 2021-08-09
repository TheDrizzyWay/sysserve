import { Component, Input, OnInit } from '@angular/core';
import { CommentModel } from 'src/app/models/comment';
import { checkSameDay } from 'src/app/utils/same-date';

const monthsList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

@Component({
  selector: 'app-single-comment',
  templateUrl: './single-comment.component.html',
  styleUrls: ['./single-comment.component.css']
})
export class SingleCommentComponent implements OnInit {
  @Input() comment: CommentModel;
  @Input() showDate: boolean;

  myComment: boolean;
  isPressed: boolean;

  constructor() { 
    this.isPressed = false;
  }

  ngOnInit(): void {
    this.myComment = this.comment.creator.id == 1;
  }

  showOptions(): void {
    this.isPressed = true;
  }

  clearPress(): void {
    this.isPressed = false;
  }

  getDateString(date: string): string {
    const today = new Date();
    const commentDate = new Date(Number(date));

    if (checkSameDay(commentDate, today)) {
      return 'TODAY';
    }

    return `${monthsList[commentDate.getMonth()]}, ${commentDate.getDate()}`;
  }

}
