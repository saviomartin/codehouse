import { auth } from "../firebase";

export const googleProvider = new auth.GoogleAuthProvider();
export const githubProvider = new auth.GithubAuthProvider();
// export const facebookProvider = new auth.FacebookAuthProvider(); TODO:
