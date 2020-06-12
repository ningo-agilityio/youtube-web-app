export interface Issue {
  id?: number | null;
  number?: number | null;
  title: string;
  body: string;
  locked?: boolean;
}

export interface ToggleAction {
  type: string;
  isShow: boolean;
}

export interface handleIssueListAction {
  type: string;
  pending: boolean;
  issue: Issue;
  issueList: Issue[];
  error: Error;
}

export interface handleIssueListState {
  pending: boolean;
  issueList: Issue[];
  error: Error | null;
}

export interface RootState {
  toggleForm: boolean;
  toggleDetail: boolean;
  handleIssueList: handleIssueListState;
}

export interface TitleProps {
  value: string;
}

export interface LabelProps {
  value: string;
  locked?: boolean;
  name?: string;
  onClick?: (e: React.MouseEvent) => void;
}

export interface ButtonProps {
  name?: string;
  value: string;
  locked?: boolean;
  type: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent) => void;
}

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

export interface IssueItemProps {
  issue: Issue;
}

export interface IssueListProps {
  selectedIssue: Issue;
  isShowForm: boolean;
}

export interface IssueDetailProps {
  issue: Issue;
  handleChangeSelectedIssue: (newIssue: Issue) => void;
}

export interface FormProps {
  selectedIssue: Issue;
  handleSaveChange: (issue: Issue) => void;
  handleChangeSelectedIssue: (issue: Issue) => void;
}
