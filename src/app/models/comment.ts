interface Creator {
  id: number;
  name: string;
  imageUrl: string;
}

export interface CommentModel {
  id: number;
  creator: Creator;
  dateCreated: string;
  commentType: string;
  content: string;
  fileName?: string;
  fileSize?: string;
  fileExtension?: string;
}