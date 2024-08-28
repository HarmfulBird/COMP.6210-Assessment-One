import { Link } from "react-router-dom";
import { scps } from "../scripts/scp";

function Header() {
  return (
    <>
      <div className="containerr">
        <header className="header">
          <div className="logo" id="chk1">
            <img
              src="https://scpwiki.github.io/sigma/images/header-logo.svg"
              alt="Logo"
              aria-label="Website Logo"
            />
            <div className="logo-names">
              <h1>
                <Link to={`/`}>SCP Foundation</Link>
              </h1>
              <h2>
                <Link to={`/`}>Secure, Contain, Protect</Link>
              </h2>
            </div>
          </div>

          <div className="center-nav .navli" id="chk2">
            <nav className="navbar navbar-dark">
              <button
                className="navbar-toggler ms-auto"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon bg-transparent"></span>
              </button>

              <div
                className="collapse navbar-collapse navli"
                id="navbarNavAltMarkup"
              >
                <ul className="navbar-nav  ms-auto ">
                  {scps.map((scp) => (
                    <li key={scp.subject}>
                      <Link to={`/scp/${scp.subject}`}>{scp.subject}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;
