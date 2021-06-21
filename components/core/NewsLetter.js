import React, { useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { FiSend } from "react-icons/fi";
import { harperFetch } from "../../utils/HarperFetch";
import ConfettiGenerator from "confetti-js";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    if (email) {
      try {
        await harperFetch({
          operation: "insert",
          schema: "dev",
          table: "subscribers",
          records: [
            {
              email: email,
            },
          ],
        });

        // toasting success
        toast.success("Successfully Created!");

        // making everything default
        setEmail("");
      } catch (err) {
        console.log(err);
        toast.error("Something went wrong");
      }
    } else {
      toast.error("Please Fill All Fields");
    }
  };

  useEffect(() => {
    const confettiSettings = { target: "my-canvas", max: "200" };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    return () => confetti.clear();
  });

  return (
    <div className="bg-image h-auto w-full">
      <div className="h-auto min-h-[45vh] w-full rounded-md bg-[rgba(0,0,0,0.6)] flex items-center justify-center flex-wrap flex-col relative overflow-hidden">
        <canvas id="my-canvas" className="absolute"></canvas>
        <h1
          className="text-[#ECF2F5] text-2xl lg:text-4xl xl:text-4xl font-bold relative"
          data-aos="fade-up"
        >
          Join Our NewsLetter
        </h1>
        <p
          className="text-xs lg:text-sm xl:text-sm text-[#aaa] text-center lg:text-left xl:text-left relative"
          data-aos="fade-up"
        >
          Never miss any new amazing cheatsheets, get them right onto your
          mails!
        </p>
        <div
          className="w-11/12 lg:w-6/12 xl:w-6/12 relative"
          data-aos="fade-up"
        >
          <div className="w-full p-[1px] bg-app-gradient-2 mt-4 rounded-md">
            <form
              className="bg-[#0A0719] flex duration-500 focus:border-[#3d5eff] pl-3 rounded-lg p-1 w-full items-center justify-between"
              onSubmit={onSubmit}
            >
              <input
                type="text"
                placeholder="johndoe@gmail.com"
                className="h-full py-1 pl-1 w-full bg-transparent text-white text-sm lg:text-base"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div
                className="bg-[#764dff] p-2 lg:p-3 cursor-pointer shine rounded-lg text-sm lg:text-base"
                onClick={onSubmit}
              >
                <FiSend
                  className="text-white -ml-1"
                  style={{ transform: "rotate(45deg)" }}
                />
              </div>
            </form>
          </div>
          <h3 className="bg-text-gradient font-semibold mb-2 uppercase mt-2 tracking-wider text-sm lg:text-base xl:text-base">
            PS: We won't spam
          </h3>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
