export default function Services(){
    return(
    <section className="what-we-do">
        <h1 id="service-h1">WHAT WE DO</h1>
        <div className="services">
        <Service/>
        <Service/>
        <Service/>
        <Service/>
        </div>

    </section>   
)
}
export function Service(){
    return(
<div className="service">
<img src="./public\vite.svg" alt="" />

<h3>Easy Customization</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, mollitia!</p>
</div>
    )
}