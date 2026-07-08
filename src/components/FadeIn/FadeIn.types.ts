import { HTMLAttributes, ReactNode } from "react";
import { DefaultComponentSettings } from "..";

export interface FadeInProps extends HTMLAttributes<HTMLDivElement> {
    settings?: DefaultComponentSettings;
    children: ReactNode;
}