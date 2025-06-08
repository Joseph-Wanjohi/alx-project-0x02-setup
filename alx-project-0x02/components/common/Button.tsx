import { type ButtonProps } from "@/interfaces";

export default function Button({
  children,
  onClick,
  variant = "primary",
  size = "medium",
  shape = "rounded-md",
  disabled = false,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "rounded-md font-semibold focus:outline-none transition-colors duration-200";
  
  const variantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-300 text-gray-800 hover:bg-gray-400",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  const sizeStyles = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

    const shapeStyles = {
        "rounded-sm": "rounded-sm",
        "rounded-md": "rounded-md",
        "rounded-lg": "rounded-lg",
        "rounded-full": "rounded-full",
    };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${shapeStyles[shape]}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
}