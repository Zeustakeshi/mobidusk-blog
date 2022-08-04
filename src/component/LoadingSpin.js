import React from "react";
import PropTypes from "prop-types";

const LoadingSpin = ({ size = 30, borderSize = 4, color = "white" }) => {
    return (
        <div
            style={{
                width: `${size}px`,
                height: `${size}px`,
                border: `${borderSize}px solid transparent`,
                borderTopColor: color,
                borderBottomColor: color,
            }}
            className={`rounded-full animate-spin`}
        ></div>
    );
};

// LoadingSpin.propTypes = {
//     size: PropTypes.number,
//     borderSize: PropTypes.number,
//     color: PropTypes.string,
// };

export default LoadingSpin;
