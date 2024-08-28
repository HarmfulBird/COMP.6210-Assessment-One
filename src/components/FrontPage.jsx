import { Link } from "react-router-dom";
import { scps } from "../scripts/scp.js";

function FrontPage(props)
{
    const { Subject } = props;
    const scp = scps.find((s) => s.subject === Subject);

    return(
        <>
        <div className="content-main">
            <div className="warning-home">
                <h1><span id="warn">WARNING:</span> THE FOUNDATION DATABASE IS</h1>
                <h1><span id="classified">CLASSIFIED</span></h1>
                <h2>UNAUTHORIZED PERSONNEL WILL BE TRACKED, LOCATED, AND DETAINED</h2>


                <h1 id="scp">SECURE. CONTAIN. PROTECT.</h1>
            </div> 
        </div>
        <div style={{ marginTop: '200px' }}>
            <ul>
                  {scps.map((scp) => (
                    <li key={scp.subject}>
                      <Link to={`/scp/${scp.subject}`}>{scp.subject}</Link>
                    </li>
                  ))}
                </ul>
            </div>
        </>
    );
}

export default FrontPage;