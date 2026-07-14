import { ReactElement } from "react";
import { DefaultComponentSettings } from "../../types";

export interface FadeInSettings extends DefaultComponentSettings { }

export interface FadeInProps {
    settings?: FadeInSettings;
    initialOpacity?: number;
    finalOpacity?: number;
    children: ReactElement;
}