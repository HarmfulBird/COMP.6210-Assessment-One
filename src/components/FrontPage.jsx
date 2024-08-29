import { Link } from "react-router-dom";
import { scps } from "../scripts/scp.js";

function FrontPage() {
  return (
    <>
      <div className="content-main">
        <div className="warning-home">
          <h1>
            <span id="warn">WARNING:</span> THE FOUNDATION DATABASE IS
          </h1>
          <h1>
            <span id="classified">CLASSIFIED</span>
          </h1>
          <h2>UNAUTHORIZED PERSONNEL WILL BE TRACKED, LOCATED, AND DETAINED</h2>

          <h1 id="scp">SECURE. CONTAIN. PROTECT.</h1>
        </div>
      </div>
      <hr />
      <div className="grid-container">
        {scps.map((scp) => (
          <Link
            to={`/scp/${scp.subject}`}
            className="grid-item"
            key={scp.subject}
          >
            <img src={"/scpImages/" + scp.subject + ".jpg"} alt={scp.subject} />
            <div className="grid-info">
              <h1>Item #: {scp.subject}</h1>
              <h1>Object Class: {scp.class}</h1>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default FrontPage;
