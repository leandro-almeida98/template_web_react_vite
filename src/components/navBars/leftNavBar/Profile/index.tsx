import React from "react";
import { RxExit } from "react-icons/rx";
import { FiLogOut } from "react-icons/fi";

import StyleIconMenu from "../Menu/stylesMenu";
import {
  Container,
  ContainerInforProfile,
  ContainerIconExit,
  DataProfile,
  StatusProfile,
  ContainerImageProfile,
  ImageProfile,
  SubDataProfile,
} from "./styles";
import { useDispatch, useSelector } from "react-redux";

interface IProfile {}

const Profile: React.FC<IProfile> = (props) => {
  const dispatch = useDispatch();

  return (
    <Container>
      <ContainerImageProfile>
        <ImageProfile></ImageProfile>
        <StatusProfile></StatusProfile>
      </ContainerImageProfile>
      <ContainerInforProfile>
        <DataProfile>Elisabeth Draka</DataProfile>
        <SubDataProfile>
          leandro.sacramento98@gmail.com222222222222
        </SubDataProfile>
      </ContainerInforProfile>
      <ContainerIconExit
        onClick={() =>
          dispatch({
            type: "LOGOFF",
          })
        }
      >
        <FiLogOut size={StyleIconMenu.size} color={StyleIconMenu.color} />
      </ContainerIconExit>
    </Container>
  );
};

export default Profile;
