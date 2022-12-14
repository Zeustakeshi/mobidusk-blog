import { useEffect } from "react";

function useClickOutside(ref, refControl, handler) {
    useEffect(() => {
        const listener = (event) => {
            if (
                !ref.current ||
                ref.current.contains(event.target) ||
                (refControl && refControl.current.contains(event.target))
            )
                return;
            // console.log(event.ta);
            handler();
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, handler]);
}

export default useClickOutside;
