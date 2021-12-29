import React, { ReactChild } from 'react';
export interface InfoCardProps {
    icon: string;
    title?: string;
    titleComponent?: ReactChild | ReactChild[];
    description?: string;
    descriptionComponent?: ReactChild | ReactChild[];
    postTextComponent?: ReactChild | ReactChild[];
    onPress?: (() => void) | (() => Promise<void>);
    disabled?: boolean;
    loading?: boolean;
}
export declare function InfoCard(_props: InfoCardProps): null;
export interface ActionCardGroupProps {
    children: React.ReactElement<InfoCardProps> | React.ReactElement<InfoCardProps>[];
}
export default function ActionCardGroup({ children }: ActionCardGroupProps): JSX.Element;
