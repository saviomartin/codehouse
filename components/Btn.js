import { Button } from "@material-ui/core";

const Btn = ({ children }) => {
  return (
    <Button className="!p-0 !h-auto !m-auto shine !block !min-w-0">
      {children}
    </Button>
  );
};

export default Btn;
