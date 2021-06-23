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

const YTModal = ({ open, setOpen, darkMode }) => {
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
        <iframe
          className="w-10/12 h-5/12 lg:w-[896px] lg:h-[504px] xl:w-[896px] xl:h-[504px]"
          src="https://www.youtube.com/embed/bFFDe6Inyno"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Fade>
    </Modal>
  );
};

export default YTModal;
