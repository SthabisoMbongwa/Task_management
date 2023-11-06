import React from "react";

const VerifyBody = function () {
  return (
    <div className="verify-bodySection">
      <h1>Please verify your email</h1>
      <p>You're almost there! We sent an email to</p>
      <p>
        <b>sipho.mathebula@gmail.com</b>
      </p>
      <p>
        Just click on the link in that email to complete your sign-up. If you
        don't see it, you may need to
        <span style={{ color: "#62BEF5" }}> check your spam</span> folder.
      </p>
      <p>Still can't find the email? No problem.</p>
      <button> Resend Verification Email </button>
    </div>
  );
};

export default VerifyBody;