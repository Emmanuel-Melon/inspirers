import React, { useState } from "react";
import {
    Flex,
    Text,
    Heading,
    Select,
    Stack,
    Tag,
    Divider
} from "@chakra-ui/react";
import toast, { Toaster } from "react-hot-toast";

import { Button, IconButton, Input } from "ui";
import {
    FiPlus,
    FiTrash,
    FiCheck,
    FiTag,
    FiUserPlus,
    FiLink2,
    FiClock,
    FiX,
    FiLink,
    FiImage,
    FiVideo,
    FiMoreHorizontal,
    FiEye
} from "react-icons/fi";
import { client } from "utils/client";
import { ResourceType } from "@prisma/client";
import { AddResourceForm } from "./AddResourceForm";
import { UploadView } from "./UploadView";
import { InviteCompanionView } from "./InviteCompanionView";
import { ExpandedResourceView } from "./ExpandedResourceView";


// clear form fields after submit
// add loading state
// add drag and drop for images/videos uploads
// pick links from the clipboard
// add tags
// add a preview of the link
// 




type AddResourceProps = {}

type AddResourceState = "success" | "error" | "loading" | "empty";
type AddResourceStateMap = {
    [key in AddResourceState]: "Hello"
}
type AddResourceView = "form" | "invite" | "video" | "image" | "expanded";

export const AddResource = ({ closeModal }) => {
    const [title, setTitle] = useState<string>("");
    const [url, setUrl] = useState<string>("");
    const [isLoading, setIsLoading] = useState(false);
    const [view, setView] = useState<AddResourceView>("form");

    // text overflows when the url is too long
    const addResource = () => {
        setIsLoading(true);
        client.post(`/backpacks/cl8u2b5ci24107gbt0drlynhj`, {
            title,
            resourceUrl: url,
            type: ResourceType.Video
        })
            .then((response) => {
                setIsLoading(false);
                successToast("Resources Added");
            }).then(() => closeModal())
    }

    const toggleView = (view: AddResourceView) => {
        setView(view);
    }

    const previousView = () => {
        if (view === "form") {
            closeModal();
        } else {
            setView("form");
        }
    }

    const errorToast = (message: string) => toast.error(message);
    const successToast = (message: string) => toast.success(message);

    // it's best to use a context provider to manage the state of the modal
    return (
        <>
            {view === "form" && <AddResourceForm previousView={previousView} toggleView={toggleView} />}
            {view === "invite" && <InviteCompanionView previousView={previousView} toggleView={toggleView} />}
            {view === "image" && <UploadView previousView={previousView} toggleView={toggleView} />}
            {view === "video" && <UploadView previousView={previousView} toggleView={toggleView} />}
            {view === "expanded" && <ExpandedResourceView previousView={previousView} toggleView={toggleView} />}
        </>
    )
}