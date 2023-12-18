const Notifications = ({ msg, style }) => {
    if(msg === null){
        return
    }
    return(
        <div style={style}>
            <p>{msg}</p>
        </div>
    )
}

export default Notifications