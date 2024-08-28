import ProfileForm from './profile-form';
import classes from './user-profile.module.css';

import {useSession} from 'next-auth/react';

function UserProfile() {

  // const {status} = useSession();

  // if(status === 'loading'){
  //   return <p className={classes.profile}>Loading...</p>
  // }

  // if(status === 'unauthenticated'){
  //   window.location.href = '/auth';
  // }

  async function changePassword(data){
    const response = await fetch('/api/user/change-password', {
      method : 'PATCH',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify(data)
    });

    const resData = await response.json();
    console.log(resData);
  }

  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm onChange={changePassword} />
    </section>
  );
}

export default UserProfile;