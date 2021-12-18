/// <reference types="react" />
import { Props as ButtonProps } from './Button';
export declare type Props<T> = {
    action(): Promise<T>;
    errorText?: string;
    errorColor?: string;
    errorDelay?: number;
} & ButtonProps;
export default function AsyncButton<T>(props: Props<T>): JSX.Element;
