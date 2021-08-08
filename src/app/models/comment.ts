interface Creator {
  id: number;
  name: string;
  imageUrl: string;
}

interface MediaModel {
  fileName: string;
  fileSize: string;
  fileExtension: string;
}

export interface CommentModel {
  id: number;
  creator: Creator;
  dateCreated: string;
  commentType: string;
  content: string;
  file?: MediaModel;
}