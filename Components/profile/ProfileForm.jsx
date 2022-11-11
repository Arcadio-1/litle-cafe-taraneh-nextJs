import React from "react";
import { useRef } from "react";

const ProfileForm = () => {
  const currentPasswordRef = useRef();
  const newPasswordRef = useRef();
  const rNewPasswordRef = useRef();
  const changePasswordHandler = async (e) => {
    e.preventDefault();
    const currentPassword = currentPasswordRef.current.value;
    const newPassword = newPasswordRef.current.value;
    const rNewPassword = rNewPasswordRef.current.value;
    try {
      if (
        currentPassword.trim() === "" ||
        newPassword.trim() === "" ||
        rNewPassword === ""
      ) {
        throw new Error("please fillup the form");
      }
      if (rNewPassword !== newPassword) {
        throw new Error("new password doesn't match");
      }
      const req = await fetch("/api/user/changePassword", {
        method: "PATCH",
        body: JSON.stringify({ currentPassword, newPassword, rNewPassword }),
        headers: { "Content-Type": "application/json" },
      });
      const result = await req.json();
      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="card">
      <form className="form">
        <div className="form-line">
          <label htmlFor="currentPassword">Old Password: </label>
          <input
            type="password"
            id="currentPassword"
            ref={currentPasswordRef}
          />
        </div>
        <div className="form-line">
          <label htmlFor="newPassword">New Password: </label>
          <input type="password" id="newPassword" ref={newPasswordRef} />
        </div>
        <div className="form-line">
          <label htmlFor="rNewPassword">Cunferm New Password: </label>
          <input type="password" id="rNewPassword" ref={rNewPasswordRef} />
        </div>
        <div className="form-action">
          <button onClick={changePasswordHandler}>Change Password</button>
          <button>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
