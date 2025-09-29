export default function Hero() {
    return(
        <>
            <div id='Home' className="px-4 pt-5 my-5 text-center border-bottom"> 
            <h1 className="display-4 fw-bold text-body-emphasis">We Sell Original Sealed Old Books Only For You!</h1> 
            <div className="col-lg-6 mx-auto"> 
                <p className="lead mb-4">Welcome to Old Times Literia, a haven for book lovers who cherish the charm of timeless stories. Here, every page whispers nostalgia,
                every cover holds a piece of history, and every book invites you to journey through the beauty of the past while creating new memories for the future.</p> 
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5"> 
                <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3">It is Real?</button> 
                <button type="button" className="btn btn-outline-secondary btn-lg px-4">I Want It!</button> 
                </div> 
            </div> 

            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner" style={{ height: "500px", objectFit: "cover" }}>
                    <div className="carousel-item active">
                    <img src="https://www.voicesofruralindia.org/wp-content/uploads/2020/11/ylswjsy7stw-scaled.jpg" className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                    <img src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/blogs/20044/images/VoNLCopMRhSPSTxOO4hQ_caleb-woods-fulXJYIvRi8-unsplash.jpg" className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                    <img src="https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F1337793f-7d43-455f-9bce-f157e07455ca.jpg?source=next-article&fit=scale-down&quality=highest&width=700&dpr=1" className="d-block w-100" alt="..."></img>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
            </div>
        </>
    )
}