export type ButtonProps = {
  isActive: boolean;
  activeColors: ActiveColors;
  icon: React.ReactElement;
  buttonText: string;
  handleClick: () => void;
};

type ActiveColors = {
  dark: string;
  light: string;
};