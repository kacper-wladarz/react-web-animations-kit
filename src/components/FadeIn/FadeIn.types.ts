import { HTMLAttributes, ReactNode } from "react";
import { DefaultComponentSettings } from "../../types";

export interface FadeInSettings extends DefaultComponentSettings { }

export interface FadeInProps extends HTMLAttributes<HTMLDivElement> {
    settings?: FadeInSettings;
    initialOpacity?: number;
    finalOpacity?: number;
    children: ReactNode;
}