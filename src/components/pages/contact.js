import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import contactPagePicture from "../../../static/assets/images/auth/login.jpg";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div className="left-column">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT7fiEEyK2Jp4Dufxw7itsx02OTMoBF4Po8ruhMp9dxFSVKNPnF&usqp=CAU" />
      </div>
      
      <div className="right-column">
        <div className="contact-bullet-points">
          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="phone" />
            </div>

            <div className="text">555-555-5555</div>
          </div>

          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="envelope" />
            </div>

            <div className="text">hsa.angelamiller@gmail.com</div>
          </div>

          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="map-marked-alt" />
            </div>

            <div className="text">Lehi, UT</div>
          </div>
        </div>
      </div>
    </div>
  );
}