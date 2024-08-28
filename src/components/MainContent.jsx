import { scps } from "../scripts/scp.js";

function MainContent(props) {
  const { subject } = props;
  const scp = scps.find((s) => s.subject === subject);

  return (
    <>
      <div id="dataDisplay">
        <div className="content">
          <div className="image">
            <img src={"/scpImages/" + scp.subject + ".jpg"} alt={scp.subject} />
            <h1>Item #: {scp.subject}</h1>
            <h1>Object Class: {scp.class}</h1>
          </div>
          <div className="scp-info">
            <div className="scp-containment-info">
              <h3>Special Containment Procedures:</h3>

              <p>{scp.containment}</p>
            </div>

            <hr />

            <div className="scp-description">
              <h3>Description:</h3>

              <p>{scp.summary}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainContent;
