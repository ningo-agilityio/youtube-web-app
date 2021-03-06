import { ApiResponse } from 'apisauce';

export interface InputProps {
  type: string;
  placeholder: string;
  defaultValue?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
}

export interface TextareaProps {
  placeholder: string;
  defaultValue?: string;
  textareaRef?: React.RefObject<HTMLTextAreaElement>;
}

export interface ButtonProps {
  name: string;
  value: string;
  type: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent) => void;
}

export interface HeaderProps {
  onToggleLoginForm?: () => void;
}

export interface FormProps {}

export interface VideoCardProps {
  video: Video;
}

export interface VideoListProps {
  selectedVideo?: Video;
  videoList: Video[];
  isShowForm?: boolean;
}

export interface CommentListProps {
  commentList: Comment[];
}

export interface ToggleAction {
  type: string;
  isShow: boolean;
}

export interface HandleVideoListState {
  pending: boolean;
  videoList: Video[];
  error: Error | null;
}

export interface HandleVideoListAction {
  type: string;
  pending: boolean;
  video?: Video;
  videoList: Video[];
  error: Error;
}

export interface RootState {
  toggleForm: boolean;
  handleVideoList: HandleVideoListState;
  selectedVideo: Video;
  commentList: Comment[];
}

export interface Video {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
  };
}

export interface Comment {
  snippet: {
    topLevelComment: {
      id: string;
      snippet: {
        textOriginal: string;
        authorDisplayName: string;
        authorProfileImageUrl: string;
      };
    };
  };
}

export interface SelectedVideoAction {
  type: string;
  video: Video;
}

export interface CommentListAction {
  type: string;
  commentList: Comment[];
}
