import React from 'react';
export interface Props {
    infuraId?: string;
}
export interface Context {
    connect: () => void;
    connected: boolean;
}
export default function WalletSelectorProvider({ infuraId, children }: React.PropsWithChildren<Props>): JSX.Element;
export declare function useWalletSelector(): Context;
