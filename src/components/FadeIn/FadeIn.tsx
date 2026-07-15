import { type ReactNode, type CSSProperties, HTMLAttributes } from "react";
import { useState } from "react";
import useMountAfterRender from "../../hooks/useMountAfterRender";

interface FadeInProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    settings?: { duration?: number; delay?: number };
    initialOpacity?: number;
    finalOpacity?: number;
}

const FadeIn = ({
    children,
    settings,
    initialOpacity = 0,
    finalOpacity = 1,
    ...props
}: FadeInProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const { duration = 500, delay = 0 } = settings ?? {};

    useMountAfterRender(() => {
        setIsVisible(true);
    });

    const style: CSSProperties = {
        transitionProperty: "opacity",
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "ease-in-out",
        opacity: isVisible ? finalOpacity : initialOpacity,
    };

    return (
        <div {...props} style={{ ...props.style, ...style }}>
            {children}
        </div>
    );
};

FadeIn.displayName = "FadeIn";

export default FadeIn;
