const Button = ({ contained, children, ...rest }) => {
    return <button {...rest} className={`button ${contained ? "contained" : ""}`}>{children}</button>
}

export default Button