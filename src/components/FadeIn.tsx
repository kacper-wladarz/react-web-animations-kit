import { ReactNode, useState, useEffect, HTMLAttributes } from "react";
import clsx from "clsx";

interface Props extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    duration?: number;
}

const FadeIn = ({ children, duration = 500, ...props }: Props) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 50);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            {...props}
            style={{
                transitionDuration: `${duration}ms`,
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
