import { ReactNode, useState, useEffect, HTMLAttributes } from "react";
import clsx from "clsx";
import { FadeInProps } from "./FadeIn.types";

const FadeIn = ({
    children,
    settings = { duration: 500, delay: 0 },
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
                transitionDuration: `${settings.duration}ms`,
                transitionDelay: `${settings.delay}ms`,
                ...props.style,
            }}
            className={clsx(
                "transition-opacity",
                isVisible ? "opacity-100" : "opacity-0",
                props.className,
            )}
        >
            {children}
        </div>
    );
};

export default FadeIn;
