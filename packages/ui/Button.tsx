import { FC } from "react";

type ButtonProps = {
  onClick?: Function
  primary?: boolean
  fullWidth?: boolean
}

export const Button: FC<ButtonProps> = (props) => {
  return <button>Boop</button>;
};
