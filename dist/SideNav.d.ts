import React from "react";
export interface SideNavItemProps {
}
export declare function SideNavItem({}: SideNavItemProps): JSX.Element;
export interface SideNavProps {
    items: React.ReactNode;
    headerComponent?: React.ReactNode | null;
}
export default function SideNav({ items, headerComponent }: SideNavProps): JSX.Element;
