import { auth } from "../firebase";

const socialMediaAuth = (provider) => {
  auth()
    .signInWithPopup(provider)
    .then((res) => {
      return res.user;
    })
    .catch((err) => {
      return err;
      console.log(err);
    });
};

export default socialMediaAuth;
