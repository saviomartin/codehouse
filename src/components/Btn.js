// material design btn
import Ripple from "react-ripples";

const Btn = ({ children, className, onClick }) => {
  return (
    <Ripple
      className={`cursor-pointer ${className} overflow-hidden rounded-md`}
      onClick={onClick}
      duration={300}
    >
      {children}
    </Ripple>
  );
};

export default Btn;
