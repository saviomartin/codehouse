// material design btn
import Ripples from "react-ripples";

const Btn = ({ children, className }) => {
  return (
    <div className={`cursor-pointer ${className} overflow-hidden rounded-md`}>
      <Ripples>{children}</Ripples>
    </div>
  );
};

export default Btn;
