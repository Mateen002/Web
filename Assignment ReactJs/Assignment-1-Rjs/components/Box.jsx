export default function Box(props){
    return(
        <>
        <div className="con">
            
            <div id="a1">
                <div>{props.month}</div>
                <div>{props.year}</div>
                <div className="date">{props.day}</div>
            </div>
            <div className="product">{props.prod}</div>
            <div className="price">{props.price}</div>
        </div>
        </>
    );
}