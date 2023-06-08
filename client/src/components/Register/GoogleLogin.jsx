import React from "react";
import { LoginSocialGoogle } from "reactjs-social-login";
import { GoogleLoginButton } from "react-social-login-buttons";
import { CLIENT_ID } from "../../../secrets";
const GoogleLogin = () => {
  return (
    <span>
      <LoginSocialGoogle
        client_id={CLIENT_ID}
        scope="openid profile email"
        discoveryDocs="claims_supported"
        access_type="offline"
        onResolve={({ provider, data }) => {
          console.log(provider, data);
        }}
        onReject={(err) => {
          console.log(err);
        }}
      >
        <GoogleLoginButton />
      </LoginSocialGoogle>
    </span>
  );
};

export default GoogleLogin;
