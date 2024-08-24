const Button = ({children, onclick, style, className}) =>{
    return <button className={className} style={style} onClick={onclick} type="submit">{children}</button>
}

export default Button