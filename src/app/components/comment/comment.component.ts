import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.setTextAreaHeight()
  }

  setTextAreaHeight(): void {
    const textArea = document.getElementById('post-comment');

    textArea.setAttribute('style', 'height:' + (textArea.scrollHeight) + 'px;overflow-y:hidden;');
    textArea.addEventListener('input', () => {
      textArea.style.height = 'auto';
      textArea.style.height = (textArea.scrollHeight) + 'px';
    }, false);
  }

}
