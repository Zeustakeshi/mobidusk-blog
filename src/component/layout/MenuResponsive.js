import { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import useClickOutside from "../../hooks/useClickOutside";
import { IconClose } from "../icons";
import Portal from "../portal/Portal";

const MenuResponsive = ({
    className = "",
    children,
    containerRef,
    show = false,
    setShow = () => {},
    directionClassName = "move-right",
}) => {
    const ref = useRef();
    useClickOutside(ref, containerRef, () => {
        setShow(false);
    });
    return (
        <CSSTransition
            unmountOnExit
            in={show}
            timeout={1500}
            classNames={directionClassName}
        >
            {(status) => (
                <Portal>
                    <div
                        ref={ref}
                        style={{
                            [`${
                                directionClassName === "move-right"
                                    ? "left"
                                    : "right"
                            }`]: 0,
                        }}
                        className={` fixed top-0 z-[100] transition-all bg-white shadow-style-6 py-6 pt-10 px-1 min-w-[80vw] min-h-[100vh] ${
                            status !== "exited"
                                ? "visible opacity-100 "
                                : "invisible opacity-0"
                        } ${className}`}
                    >
                        <span
                            onClick={() => setShow(false)}
                            style={{
                                top: 10,
                                [`${
                                    directionClassName === "move-right"
                                        ? "right"
                                        : "left"
                                }`]: 10,
                            }}
                            className="absolute transition-all p-3 hover:text-primary text-gray-300"
                        >
                            <IconClose />
                        </span>
                        {children}
                    </div>
                    {show && (
                        <div className="fixed top-0 left-0 w-[100vw] h-[100vh] z-[80] bg-slate-500 bg-opacity-60"></div>
                    )}
                </Portal>
            )}
        </CSSTransition>
    );
};

export default MenuResponsive;
