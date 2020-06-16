export interface InputProps {
  type: string;
  placeholder: string;
  defaultValue?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
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

export interface ToggleAction {
  type: string;
  isShow: boolean;
}

export interface RootState {
  toggleForm: boolean;
}
