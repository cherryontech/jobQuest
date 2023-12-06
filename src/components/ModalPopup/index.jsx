import {Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure} from "@nextui-org/react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { XClose } from "../../assets/XClose";
import "./style.css";

export const ModalPopup = ({ heading, subHeading, cta, bottomLine }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const navigateTo = useNavigate();

  return (
    <>
      <Button onPress={onOpen}>Open Modal</Button>
      <Modal
        hideCloseButton="true"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="3xl"
        className="modal-dialog bg-transparent flex flex-row justify-center w-full overflow-x-hidden w-[698px] h-[479px]"
      >
        <ModalContent className="relative bg-[#eff2f9] top-0 left-0">
          {(onClose) => (
            <>
              <ModalHeader
                className="text-4xl font-bold absolute w-[100%] top-[97px] left-[45px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#24264c] text-[48px] text-center tracking-[0] leading-[71.8px] whitespace-nowrap"
                style={{ color: "#25274D" }}
              >
                {heading}
              </ModalHeader>
              <ModalBody>
                <p className="absolute w-[312px] top-[204px] left-[178px] [font-family:'Inter-Light',Helvetica] font-light text-[#24264c] text-[20px] text-center tracking-[0] leading-[26px]">
                  {subHeading}
                </p>
                <XClose
                  className="!absolute !w-[36px] !h-[36px] !top-[26px] !left-[602px] cursor-pointer"
                  color="#25274C"
                  onPress={onClose}
                />
                <Button
                  onClick={() => navigateTo("/signup")}
                  className="text-white text-3xl font-bold h-[84px] w-[363px] rounded-[23px] top-[281px] left-[127px]"
                  style={{
                    backgroundColor: "#090459",
                  }}
                >
                  {cta}
                </Button>
                <p className="absolute w-[218px] top-[388px] left-[219px] [font-family:'Inter-Regular',Helvetica] font-normal text-transparent text-[14px] text-center tracking-[0] leading-[27.9px] whitespace-nowrap">
                  <span className="text-[#24264c]">{bottomLine}</span>
                  <span className="[font-family:'Inter-Bold',Helvetica] font-bold text-[#396ed4]">
                    &nbsp;
                  </span>
                  <span
                    className="[font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-[#ff6667] underline cursor-pointer"
                    onClick={() => navigateTo("/login")}
                  >
                    Log In
                  </span>
                </p>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

ModalPopup.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string,
  cta: PropTypes.string,
  bottomLine: PropTypes.string,
};
