import { useEffect, useRef } from "react";

const useMountAfterRender = (callback: () => void) => {
    const callbackRef = useRef(callback);
    callbackRef.current = callback;

    useEffect(() => {
        let secondFrame: number;

        const firstFrame = requestAnimationFrame(() => {
            secondFrame = requestAnimationFrame(() => {
                callbackRef.current();
            });
        });

        return () => {
            cancelAnimationFrame(firstFrame);
            cancelAnimationFrame(secondFrame);
        };
    }, []);
};

export default useMountAfterRender;
