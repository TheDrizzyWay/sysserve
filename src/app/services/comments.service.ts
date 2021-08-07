import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import MOCK_DATA from '../mocks/comments.json';
import { CommentModel } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor() { }

  getAll(): Observable<CommentModel[]> {
    return of(MOCK_DATA) as unknown as Observable<CommentModel[]>;
  }
}
