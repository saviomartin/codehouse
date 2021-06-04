// material design btn
import { Button } from "@material-ui/core";

const Btn = ({ children, shine = true, className }) => {
  return (
    <Button
      className={`!p-0 !h-auto !m-auto !block !min-w-0 hover:!bg-transparent ${className} ${
        shine && "shine"
      }`}
    >
      {children}
    </Button>
  );
};

export default Btn;
