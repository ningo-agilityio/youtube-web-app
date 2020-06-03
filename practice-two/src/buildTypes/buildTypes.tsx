export interface Issue {
  id?: number | null;
  number?: number | null;
  title: string;
  body: string;
  locked?: boolean;
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
  disabled?: boolean;
  locked?: boolean;
  type: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent) => void;
}

export interface InputProps {
  type: string;
  placeholder: string;
  defaultValue?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface TextareaProps {
  placeholder: string;
  defaultValue?: string;
  textareaRef?: React.RefObject<HTMLTextAreaElement>;
  onBlur?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface IssueItemProps {
  issue: Issue;
  issueList: Issue[];
  isShowDetail: boolean;
}

export interface IssueListProps {
  issueList: Issue[];
  isShowDetail: boolean;
  isShowForm: boolean;
}

export interface IssueDetailProps {
  issue: Issue;
  toggleForm: (e: React.MouseEvent) => void;
  toggleDetail: (e: React.MouseEvent) => void;
  handleChangeSelectedIssue: (newIssue: Issue) => void;
}

export interface FormProps {
  issueList: Issue[];
  selectedIssue: Issue;
  ref?: React.RefObject<HTMLInputElement>;
  toggleForm: (e: React.FormEvent) => void;
  handleUpdateIssue: (list: Issue[]) => void;
  handleChangeSelectedIssue: (issue: Issue) => void;
}
