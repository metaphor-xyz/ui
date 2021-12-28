import React, { ReactChild } from 'react';
export interface ActionCardProps {
    iconComponent: ReactChild | ReactChild[];
    title?: string;
    titleComponent?: ReactChild | ReactChild[];
    description?: string;
    descriptionComponent?: ReactChild | ReactChild[];
    postTextComponent?: ReactChild | ReactChild[];
    onPress?: (() => void) | (() => Promise<void>);
    disabled?: boolean;
    loading?: boolean;
}
export declare function ActionCard(_props: ActionCardProps): null;
export interface ActionCardGroupProps {
    children: React.ReactElement<ActionCardProps> | React.ReactElement<ActionCardProps>[];
}
export default function ActionCardGroup({ children }: ActionCardGroupProps): JSX.Element;
