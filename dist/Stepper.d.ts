import React from 'react';
export interface StepperItemProps {
    id: string;
    label: string;
}
export declare function StepperItem(_props: StepperItemProps): null;
export interface StepperProps {
    children: React.ReactElement<StepperItemProps> | React.ReactElement<StepperItemProps>[];
    activeItem: string;
    headerComponent?: React.ReactNode | null;
}
export default function Stepper({ children, activeItem, headerComponent }: StepperProps): JSX.Element;
