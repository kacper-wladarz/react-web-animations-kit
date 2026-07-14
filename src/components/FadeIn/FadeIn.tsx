import {
    cloneElement,
    isValidElement,
    useState,
    type CSSProperties,
} from "react";
import type { FadeInProps } from "./FadeIn.types";
import useMountAfterRender from "../../hooks/useMountAfterRender";

const FadeIn = ({
    children,
    settings,
    initialOpacity = 0,
    finalOpacity = 1,
}: FadeInProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const { duration, delay } = { duration: 500, delay: 0, ...settings };

    useMountAfterRender(() => {
        setIsVisible(true);
    });

    const fadeInStyle: CSSProperties = {
        transitionProperty: "opacity",
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "ease-in-out",
        opacity: isVisible ? finalOpacity : initialOpacity,
    };

    if (!isValidElement<{ style?: CSSProperties }>(children)) {
        return children;
    }

    return cloneElement(children, {
        style: {
            ...children.props.style,
            ...fadeInStyle,
        },
    });
};

FadeIn.displayName = "FadeIn";

export default FadeIn;
