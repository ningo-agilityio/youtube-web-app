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
  toggleForm: (e: React.MouseEvent) => void;
  toggleDetail: (e: React.MouseEvent) => void;
  handleChangeSelectedIssue: (newIssue: Issue) => void;
}

export interface FormProps {
  selectedIssue: Issue;
  toggleForm: (e: React.FormEvent) => void;
  handleSaveChange: (issue: Issue) => void;
  handleChangeSelectedIssue: (issue: Issue) => void;
}
