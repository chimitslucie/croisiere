function Card({ src, alt, title, pont, text }) {
    return (
        <div className="card">
            <img src={src} alt={alt} />
            <div className="cardContent">
                <h3 className="cardTitle textDarkblue textUppercase">{title}</h3>
                <p className="cardPont textDarkblue textUppercase textLight">{pont}</p>
                <p className="cardText textSecondary">{text}</p>
            </div>
        </div>
    )
}

export default Card