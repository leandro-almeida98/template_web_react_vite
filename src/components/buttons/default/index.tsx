import * as React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import ReactLoading from "react-loading";

interface IBttnDefault extends ButtonProps {
  text: string;
  loading?: boolean;
}

const BttnDefault: React.FC<IBttnDefault> = (props) => {
  const { text, loading = false } = props;

  const DataBttn = () => {
    if (loading)
      return <ReactLoading type="spin" width={25} height={25} color="#fff" />;
    return <>{text}</>;
  };

  return (
    <Button style={{ height: 56 }} variant="contained" {...props}>
      <DataBttn />
    </Button>
  );
};

export default BttnDefault;
