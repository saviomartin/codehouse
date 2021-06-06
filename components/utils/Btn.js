// material design btn
import Ripples from "react-ripples";

const Btn = ({ children, className, onClick }) => {
  return (
    <div
      className={`cursor-pointer ${className} overflow-hidden rounded-md`}
      onClick={onClick}
    >
      <Ripples>{children}</Ripples>
    </div>
  );
};

export default Btn;
