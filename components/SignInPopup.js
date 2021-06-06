import React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Btn } from ".";

const SignInPopup = ({ open, setOpen }) => {
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
        <div className="bg-white p-5 rounded-xl shadow-md w-[45%]">
          <h1 className="text-2xl font-bold">Code Copied</h1>
          <p className="text-[#555] mb-3">
            You have copied your twitter intent code to your clipboard. You can
            now start using it in your site. Here is quick example ✌️
          </p>
          <Btn className="button !p-0 !mt-2" onClick={() => setOpen(false)}>
            <div className="px-4 py-2 flex items-center capitalize text-md border border-[#936BF3] hover:border-[#EF5FAD] rounded-md">
              Got it, thanks!
            </div>
          </Btn>
        </div>
      </Fade>
    </Modal>
  );
};

export default SignInPopup;
