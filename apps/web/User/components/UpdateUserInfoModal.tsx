import { useState } from "react";
import { CustomModal } from "ui";

export const UpdateUserInfoModal = () => {
    const [isOpen, setOpen] = useState<boolean>(false);
    const openModal = () => {
        setOpen(prevState => !prevState);
    }
    return (
        <>
            <p>hello</p>
            <CustomModal show={isOpen} open={openModal}>
                <p>Man</p>
            </CustomModal>
        </>
    )
}