import React from 'react';
export interface ThreeColumnProps {
    leftComponent?: React.ReactNode | null;
    middleComponent?: React.ReactNode | null;
    rightComponent?: React.ReactNode | null;
}
export default function ThreeColumn({ leftComponent, middleComponent, rightComponent }: ThreeColumnProps): JSX.Element;
