import { ReactNode } from 'react';

declare global {
    interface HeaderProps {
        children?: ReactNode;
    }

    interface MainProps {
        children?: ReactNode;
    }

    interface NameLinkProps {
        name: string;
        URL: string;
        active?: boolean;
    }
}

export {};
