import { useRef } from "react";
import classes from "./profile-form.module.css";

function ProfileForm(props) {
  const op = useRef(null);
  const np = useRef(null);

  function changePasswordHandler(e) {
    e.preventDefault();

    const oldPassword = op.current.value;
    const newPassword = np.current.value;

    props.onChange({ oldPassword, newPassword });
  }

  return (
    <form className={classes.form} onSubmit={changePasswordHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={op}/>
      </div>
      <div className={classes.control}>
        <label htmlFor="old-password">Old Password</label>
        <input type="password" id="old-password" ref={np}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
