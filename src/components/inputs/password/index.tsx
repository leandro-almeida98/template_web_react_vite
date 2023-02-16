import React from "react";
import { Container } from "./styles";
// import { Input, InputProps } from "rsuite";
import { Input, InputGroup, InputProps } from "rsuite";
import EyeIcon from "@rsuite/icons/legacy/Eye";
import EyeSlashIcon from "@rsuite/icons/legacy/EyeSlash";

interface IInputPasswordControled extends InputProps {
  style: React.CSSProperties;
}

const InputPasswordControled: React.FC<IInputPasswordControled> = (props) => {
  const { style } = props;
  const [visible, setVisible] = React.useState(false);

  const handleChange = () => {
    setVisible(!visible);
  };

  return (
    <InputGroup inside style={style}>
      <Input type={visible ? "text" : "password"} {...props} />
      <InputGroup.Button onClick={handleChange}>
        {visible ? <EyeIcon /> : <EyeSlashIcon />}
      </InputGroup.Button>
    </InputGroup>
  );
};

export default InputPasswordControled;
