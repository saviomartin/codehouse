import { Button } from "@material-ui/core";

const Btn = ({ children, shine = true }) => {
  return (
    <Button
      className={`!p-0 !h-auto !m-auto !block !min-w-0 ${shine && "shine"}`}
    >
      {children}
    </Button>
  );
};

export default Btn;
