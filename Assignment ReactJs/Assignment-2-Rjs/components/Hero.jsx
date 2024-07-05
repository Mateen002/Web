export default function Hero(props){
    return(
        <section className="hero"> 
        <p>{props.heroPintro}</p>
        <h1>{props.heroH1heading}</h1>
        <p>{props.contentP}</p>
        <button className="btns">{props.heroBtn}</button>
        </section>
    )
}