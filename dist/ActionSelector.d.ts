import { ButtonProps } from "./Button";
import React from "react";
export interface ActionSelectorItemAction extends ButtonProps {
    id: string;
}
export interface ActionSelectorItemProps {
    name: string;
    icon?: string;
    actions?: ActionSelectorItemAction[];
}
export declare function ActionSelectorItem(_props: ActionSelectorItemProps): null;
export interface ActionSelectorProps {
    children: React.ReactElement<ActionSelectorItemProps> | React.ReactElement<ActionSelectorItemProps>[];
}
export default function ActionSelector({ children }: ActionSelectorProps): JSX.Element;
