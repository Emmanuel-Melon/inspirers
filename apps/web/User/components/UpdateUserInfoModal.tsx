import { useState } from "react";
import { Modal } from "ui";

export const UpdateUserInfoModal = () => {
    const [isOpen, setOpen] = useState<boolean>(false);
    const openModal = () => {
        setOpen(prevState => !prevState);
    }
    return (
        <>
            <p>hello</p>
            <Modal show={isOpen} open={openModal}>
                <p>Man</p>
            </Modal>
        </>
    )
}