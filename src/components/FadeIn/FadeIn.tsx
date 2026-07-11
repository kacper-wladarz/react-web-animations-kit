import { ReactNode, useState, useEffect, HTMLAttributes } from "react";
import clsx from "clsx";
import { FadeInProps } from "./FadeIn.types";

const FadeIn = ({
    children,
    settings = { duration: 500, delay: 0 },
    initialOpacity = 0,
    finalOpacity = 1,
    ...props
}: FadeInProps) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 50);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            {...props}
            style={{
                transition: "opacity",
                transitionDuration: `${settings.duration}ms`,
                transitionDelay: `${settings.delay}ms`,
                ...props.style,
                transitionTimingFunction: "ease-in-out",
                opacity: isVisible ? finalOpacity : initialOpacity,
            }}
        >
            {children}
        </div>
    );
};

export default FadeIn;
