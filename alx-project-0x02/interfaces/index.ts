export interface CardProps {
  title: string;
  content: string;
}

export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (title: string, content: string) => void;
}

export interface Post {
  id: number;
  title: string;
  content: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded' | 'square';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}