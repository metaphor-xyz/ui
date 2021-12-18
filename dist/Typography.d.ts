import { ReactChild } from 'react';
import { TextProps } from 'react-native';
export declare type TypographyType = 'h1' | 'h2' | 'h3' | 'body-bold' | 'body' | 'button' | 'info' | 'small-button';
declare type Props = {
    children?: ReactChild | ReactChild[];
    style?: any;
    fontWeight?: 200 | 300 | 400 | 500 | 600;
    variant?: string;
    type?: TypographyType;
} & TextProps;
export default function Typography(props: Props): JSX.Element;
export {};
