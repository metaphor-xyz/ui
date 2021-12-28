import { ReactChild } from 'react';
export interface PillProps {
    iconComponent?: ReactChild | ReactChild[];
    text?: string;
    loading?: boolean;
}
export default function Pill({ iconComponent, loading, text }: PillProps): JSX.Element;
