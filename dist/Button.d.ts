import { ReactChild } from 'react';
declare type ButtonColor = 'primary' | 'secondary';
export interface ButtonProps {
    title?: string;
    titleComponent?: ReactChild | ReactChild[];
    onPress?: (() => void) | (() => Promise<void>);
    disabled?: boolean;
    loading?: boolean;
    size?: string;
    color?: ButtonColor;
    fullWidth?: boolean;
    preTextComponent?: ReactChild | ReactChild[];
}
export default function Button({ preTextComponent, title, titleComponent, onPress, disabled, size, fullWidth, color, loading, }: ButtonProps): JSX.Element;
export {};
