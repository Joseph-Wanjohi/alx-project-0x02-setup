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
  shape?: 
    | 'rounded-sm'
    | 'rounded-md'
    | 'rounded-lg'
    | 'rounded-full'
    ;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export interface PostProps {
  title: string;
  content: string;
  userId: number;
}