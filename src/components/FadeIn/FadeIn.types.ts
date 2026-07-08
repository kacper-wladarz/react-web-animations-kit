import { HTMLAttributes, ReactNode } from "react";

export interface FadeInProps extends HTMLAttributes<HTMLDivElement> {
    settings?: DefaultComponentSettings;
    children: ReactNode;
}