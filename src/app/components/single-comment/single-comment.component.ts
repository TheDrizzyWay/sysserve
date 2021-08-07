import { Component, Input, OnInit } from '@angular/core';
import { CommentModel } from 'src/app/models/comment';

@Component({
  selector: 'app-single-comment',
  templateUrl: './single-comment.component.html',
  styleUrls: ['./single-comment.component.css']
})
export class SingleCommentComponent implements OnInit {
  @Input() comment: CommentModel;

  isPressed = false;
  myComment: boolean;

  constructor() { }

  ngOnInit(): void {
    this.myComment = this.comment.creator.id == 1;
  }

  showOptions() {
    console.log('long pressed');
    this.isPressed = true;
  }

}
