import React, { useState } from "react";
import {Link} from 'react-router-dom';
import VerifyPage from "./VerifyPage";

const BodySection = function () {
    const [email, setEmail] = useState("");
    

    function CallPage(){
      return(
        <div>
          <Link to='/verify' element={<VerifyPage />} />
        </div>
      )
    }


  return (
    <div className="body-landing">
      <div className="landing-content">
        <h1>PRODUCTIVITY ON STEROIDS</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>

      <div className="email-area">
        <form>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </form>
        <button className="btn" type="submit"><Link className="sub" to='/verify' element={<VerifyPage />}> Submit </Link></button>
      </div>
    </div>
  );
};

export default BodySection;
