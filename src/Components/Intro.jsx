function Intro({ text }) {
    return (
        <div className="intro">
            <div className="container">
                <p className="introText textSecondary">
                    {text}
                </p>
            </div>
        </div>
    )
}

export default Intro