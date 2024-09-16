import { ReactNode } from 'react';

declare global {
    interface HeaderProps {
        children?: ReactNode;
    }

    interface MainProps {
        children?: ReactNode;
    }
}

export {};
