import React from "react";
const Button = ({children, ...rest }) => {
    return (
        <button {...rest} className="">
            {children}
        </button>
    )
}
export default Button