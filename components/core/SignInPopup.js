import React from "react";

// modal popup for material ui
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

// components
import { Btn } from "..";

// icons
import { FaGithub, FaGoogle } from "react-icons/fa";

// sign In providers
import { githubProvider, googleProvider } from "../../utils/Auth/auth-methods";
import socialMediaAuth from "../../utils/Auth/auth";

const SignInPopup = ({ open, setOpen }) => {
  // handling onClick for buttons
  const handleOnClick = async (provider) => {
    const res = await socialMediaAuth(provider);
    await setOpen(false);
  };

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      className="flex items-center justify-center"
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className="bg-white p-5 rounded-xl shadow-md w-[95%] lg:w-[45%] xl:w-[45%] md:w-[65%]">
          <h1 className="text-3xl font-bold mb-2">Join Codehouse!</h1>
          <p className="text-[#555] mb-5">
            We're super excited to have you here! Welcome to Code House. I hope
            you have fun, Sign In with any of the following methods✌️
          </p>
          <div className="flex">
            <Btn>
              <button
                className="bg-[#4385F4] border border-[#4385F4] text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline shine flex items-center"
                onClick={() => handleOnClick(googleProvider)}
              >
                Sign In with Google <FaGoogle className="text-xl ml-1 -mr-1" />
              </button>
            </Btn>
            <Btn className="ml-1">
              <button
                className="bg-[#333] border border-[#333] text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline shine flex items-center"
                onClick={() => handleOnClick(githubProvider)}
              >
                Sign In with Github
                <FaGithub className="text-2xl ml-1 -mt-1 -mr-1" />
              </button>
            </Btn>
          </div>
        </div>
      </Fade>
    </Modal>
  );
};

export default SignInPopup;
