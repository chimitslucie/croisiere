import Nav from "./nav"

function Hero({ title }) {
    return (
        <section className="hero">
            <div className="container">
                <Nav />
                <div className="heroContent">
                    <h1 className="heroTitle textUppercase textBold">
                        {title}
                    </h1>
                </div>
            </div>
        </section>
    )
}

export default Hero