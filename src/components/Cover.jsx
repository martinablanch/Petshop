
const Cover = () => {
    return (
        <div className="container-fluid bg-black px-0 my-5 position-relative">
            <img src="../images/cover.jpg" className="img-fluid opacity-50" alt="Portada Petshop" />
            <div className="text-center text-light position-absolute top-50 start-50 translate-middle-x">
                <h1 className="fw-bold display-1">BARTO</h1>
                <h3 className="fw-light">PETSHOP</h3>
            </div>
        </div>
    )
}

export default Cover;