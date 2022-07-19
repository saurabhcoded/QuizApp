const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
    <div className="container p-2">
      <a className="navbar-brand fw-bold fs-2" href="#">QUIZ APP</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0 fs-6 fw-semibold">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">contact</a>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control rounded-0 border-0" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success rounded-0" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  )
}

export default Navbar