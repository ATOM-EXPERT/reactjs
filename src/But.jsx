const sizeMap ={
    md: {
        height:50,
        width:100,
    },
    lg: {
        height:80,
        width:160,
    },
    xl: {
        height:90,
        width:180,
    },
}
function Button({color="#ff0000", title, size}) {
    return(
        <button style={{
            width: sizeMap[size].width,
            height: sizeMap[size].height,
            backgroundColor: color,
            padding:"5px",
            color:"white",
            borderRadius: "9px"
        }}>
            {title}
        </button>
    )
}
export default Button;