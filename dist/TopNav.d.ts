import React from 'react';
export interface TopNavItem {
    id: string;
    label: string;
}
export interface TopNavProps {
    items: TopNavItem[];
    onClick?: (_id: string) => void;
    infoComponent?: React.ReactChild;
}
export default function TopNav({ items, onClick, infoComponent }: TopNavProps): JSX.Element;
