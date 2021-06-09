import { auth } from "../firebase";

const socialMediaAuth = (provider) => {
  auth()
    .signInWithPopup(provider)
    .then((res) => {
      return res.user;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

export default socialMediaAuth;
