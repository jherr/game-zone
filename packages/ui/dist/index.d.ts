import * as zustand from 'zustand';
import React from 'react';

declare type Store = {
    user: string | null;
    score: number;
    setUser: (user: string | null) => void;
    addToScore: (amount: number) => void;
};
declare const useAppShell: zustand.UseBoundStore<Store, zustand.StoreApi<Store>>;

declare const Shell: React.FunctionComponent<{
    title: string;
}>;

export { Shell, useAppShell };
