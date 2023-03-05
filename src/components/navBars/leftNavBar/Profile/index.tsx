import React from "react";
import { RxExit } from "react-icons/rx";
import { FiLogOut } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { persistor } from "../../../../redux/persistor";
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

interface IProfile {}
export const handleLogout = () => {
  persistor.purge();
  location.reload();
};

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
      <ContainerIconExit onClick={() => handleLogout()}>
        <FiLogOut size={StyleIconMenu.size} color={StyleIconMenu.color} />
      </ContainerIconExit>
    </Container>
  );
};

export default Profile;
