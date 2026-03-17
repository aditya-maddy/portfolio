import './project.css'

function Projects() {
    return (
        <>
            <div className="row project1">
                <h1 className='pro1 '>My Projects</h1>
                <p className='pro2'>Check Out Some of My Recent Work </p>
            </div>
            <h3 className='pro3'>Projects I've Built</h3>
            <p className='pro4'>Here are some of the projects I've built to showcase my skills and learning in web development.</p>
            <div className="row p-5">
                <nav style={{ height: "4  0px",zIndex:"0" }} class="navbar bg-body-tertiary p-4">
                    <div className="container-fluid">
                        <a className="navbar-brand btn">Search Projects</a>

                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
                <br /><br />



                
                <div className="row row-cols-sm-2 row-cols-md-3 g-4">

                    <div className="col-md-4 mb-4 ">
                        <div className="card-img-container">
                            <img src="/image/card.png" className="card-img-top" alt="..." />

                            <div className="overlay">
                                <a href="https://github.com/aditya-maddy/airbnb_demo_clone" target="_blank" className="btn btn-dark">GitHub</a>
                                <a href="https://airbnb-democlone.onrender.com" target="_blank" className="btn btn-success">Live</a>
                            </div>
                        </div>

                        <div className="card-body">
                            <h5 className="card-title">Airbnb Clone</h5>
                            <p className="card-text">
                              This webside have frontend and backend with authorization and authentication!
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="card-img-container">
                            <img src="/image/card.png" className="card-img-top" alt="..." />

                            <div className="overlay">
                                <a href="https://github.com/aditya-maddy/zerodha_colne"  target="_blank" className="btn btn-dark">GitHub</a>
                                <a href="https://zerodha-colne-dshboard-w8n4.vercel.app/"  target="_blank" className="btn btn-success">Live</a>
                            </div>
                        </div>

                        <div className="card-body">
                            <h5 className="card-title">Zerodha Clone</h5>
                            <p className="card-text">
                                This webside have frontend and backend with authorization and authentication!
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="card-img-container">
                            <img src="/image/card.png" className="card-img-top" alt="..." />

                            <div className="overlay">
                                <a href="#" className="btn btn-dark">GitHub</a>
                                <a href="#" className="btn btn-success">Live</a>
                            </div>
                        </div>

                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                This is a wider card with supporting text below.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="card-img-container">
                            <img src="/image/card.png" className="card-img-top" alt="..." />

                            <div className="overlay">
                                <a href="#" className="btn btn-dark">GitHub</a>
                                <a href="#" className="btn btn-success">Live</a>
                            </div>
                        </div>

                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                This is a wider card with supporting text below.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="card-img-container">
                            <img src="/image/card.png" className="card-img-top" alt="..." />

                            <div className="overlay">
                                <a href="#" className="btn btn-dark">GitHub</a>
                                <a href="#" className="btn btn-success">Live</a>
                            </div>
                        </div>

                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                This card has supporting text below.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="card-img-container">
                            <img src="/image/card.png" className="card-img-top" alt="..." />

                            <div className="overlay">
                                <a href="#" className="btn btn-dark">GitHub</a>
                                <a href="#" className="btn btn-success">Live</a>
                            </div>
                        </div>

                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                This is a wider card with supporting text below.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}

export default Projects;