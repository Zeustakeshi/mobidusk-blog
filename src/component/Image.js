import { forwardRef, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Image(
    { src, alt = "", imgErrorClass = "", className = "", ...props },
    ref
) {
    const [failBack, setFallback] = useState(false);

    useEffect(() => {
        setFallback(false);
    }, [src]);

    const handleError = () => {
        setFallback(true);
    };

    if (failBack) {
        return (
            <ImgWrapper to={props.to}>
                <div
                    className={`rounded-[inherit] w-full h-full bg-white flex justify-center items-center shadow-md ${imgErrorClass}`}
                >
                    <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="42"
                        height="42"
                        viewBox="0 0 32 32"
                    >
                        <title>photo-error</title>
                        <path
                            fill="#2EBAC1"
                            d="M24.166 17.759h0.105v7.247c0 1.628-1.313 2.993-2.993 2.993h-14.284c-1.628 0-2.993-1.313-2.993-2.993v-14.6c0-1.681 1.365-2.993 3.046-3.046h9.978c-0.368 0.84-0.525 1.786-0.525 2.731 0 4.201 3.414 7.667 7.667 7.667zM9.777 10.144c-1.365 0-2.468 1.103-2.468 2.468s1.103 2.468 2.468 2.468c1.365 0 2.468-1.103 2.468-2.468s-1.103-2.468-2.468-2.468zM7.256 25.322l14.6 0.053-3.991-7.93c-0.263-0.578-0.998-0.578-1.313-0.053l-1.733 3.046c-0.315 0.525-1.050 0.63-1.47 0.158l-0.683-0.735c-0.683-0.735-1.891-0.63-2.416 0.263l-2.993 5.199zM24.166 4c3.361 0 6.092 2.731 6.092 6.092s-2.731 6.092-6.092 6.092c-3.361 0-6.092-2.731-6.092-6.092s2.731-6.092 6.092-6.092zM24.954 6.363h-1.208l0.105 4.569h0.998l0.105-4.569zM24.376 13.453c0.368 0 0.683-0.315 0.683-0.683s-0.315-0.683-0.683-0.683c-0.368 0-0.683 0.315-0.683 0.683s0.315 0.683 0.683 0.683z"
                        ></path>
                    </svg>
                </div>
            </ImgWrapper>
        );
    }
    return (
        <ImgWrapper to={props.to}>
            <img
                ref={ref}
                src={src}
                alt={alt}
                className={`w-full h-full object-cover rounded-[inherit] ${className}`}
                {...props}
                onError={handleError}
            />
        </ImgWrapper>
    );
}

const ImgWrapper = ({ children, to }) => {
    if (to) {
        return (
            <NavLink to={to} className="block w-full h-full rounded-[inherit]">
                {children}
            </NavLink>
        );
    } else {
        return children;
    }
};

export default forwardRef(Image);
