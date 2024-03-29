import React, {
  useState,
  useEffect,
  FunctionComponent,
  ReactChild,
} from "react";
import BaseModal from "react-modal";
import { Flex } from "@chakra-ui/react";

BaseModal.setAppElement("#__next");

type ModalProps = {
  show: boolean;
  children: ReactChild | ReactChild[] | null;
  close: () => void;
};

export const Modal: FunctionComponent<ModalProps> = ({
  show,
  close,
  children,
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Tracks mouse position
  useEffect(() => {
    const setFromEvent = (e: { clientX: any; clientY: any }) =>
      setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("click", setFromEvent);

    return () => {
      window.removeEventListener("click", setFromEvent);
    };
  }, []);

  const customStyles = {
    content: {
      background: "#fff",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "50%",
      padding: 0,
      borderRadius: "1rem",
      border: "none",
      outline: "0",
      boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 12px",
    },
    overlay: {
      background: "rgba(0, 0, 0, 0.08)",
    },
  };
  return (
    <BaseModal isOpen={show} onRequestClose={close} style={customStyles}>
      {children}
    </BaseModal>
  );
};
