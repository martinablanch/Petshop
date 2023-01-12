const Refugio = () => {
    return (
        <div className="container">
            <h1>NUESTRO REFUGIO</h1>
            <h3>Todos tenemos derecho a una familia y a una buena vida.</h3>
            <div className="row">
                <div className="col-md-6">
                    <img src="../images/refugio.webp" alt="Refugio" className="img-fluid"/>
                </div>
                <div className="col-md-6">
                    <p>Nuestro refugio se encarga de rescatar a los perros y gatos abandonados y maltratados.</p>
                    <p>Los animalitos son curados por nuestro equipo de veterinarios para que estén saludables y listos para ser adoptados. Además, mientras esperan a una familia que los quieran, los animalitos son adiestrados, y en caso de ser necesario, son castrados.</p>
                    <p>El único fin de este refugio es encontrarle una familia a todos ellos.</p>
                </div>
            </div>
        </div>
    )
}

export default Refugio;