import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg container ">
            <div className="container-fluid gap-3">
                <a className="navbar-brand text-uppercase fw-bold" href="#"><img src="./src/assets/Icon.png" alt="" />Nextcent</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-5">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Service</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Feature</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Product</a>
                        </li>
                    </ul>
                    <div>
                    <form className="d-flex gap-2" role="search">
                        <button className="btn text-success" type="submit">Login</button>
                        <button className="btn btn-success" type="submit">Sign Up</button>
                    </form>
                </div>
                </div>
            </div>
        </nav>
    );
}
