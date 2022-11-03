import { useState } from "react";
import { Button, Card, IconButton, Input, Modal, CustomCheckbox } from "ui";
import {
    Avatar,
    Image,
    Img,
    Stack,
    Text,
    Link,
    Flex,
    Heading,
    Box,
    LinkBox,
    LinkOverlay,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Tag,
    Checkbox,
    TagLeftIcon,
    TagLabel,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    CheckboxGroup,
    useCheckboxGroup,
    useCheckbox
} from "@chakra-ui/react";
import { useFetch } from "hooks/useSwr";
import { useSession } from "next-auth/react";

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
    FiEye,
    FiMaximize2,
    FiArrowRight,
    FiChevronsRight,
    FiFolder,
    FiRotateCw,
    FiUsers
} from "react-icons/fi";

const Folder = ({ folder }) => {
    return (
        <Flex>
            <CustomCheckbox value={folder.title} text={folder.title} />
        </Flex>
    )
}

export const LinkFolderModal = ({ routine, ...props }) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [name, setName] = useState<string>("");
    // this component needs to access the current backpack!

    const { data: folders, isLoading, isError } = useFetch(`/backpacks/cl9odbs5g0255vwbtk7wo8osu/folders`);

    // two options
    // we can fetch the current user's backpack and then fetch the folders from the session object!
    const session = useSession();
    console.log(session);

    function openModal() {
        setShowModal(true);
    }

    function closeModal() {
        setShowModal(false);
    }

    const handleSubmit = async (e) => {
        console.log("submitting");
        console.log(routine)
    }

    const { value, getCheckboxProps } = useCheckboxGroup({});

    return (
        <>
            <Button onClick={openModal}>Link Folder</Button>
            <Modal show={showModal} close={closeModal}>
                <Stack>
                    <Flex px="4" py="2" justifyContent="space-between" alignItems="center">
                        <Flex gap={1} alignItems="center" color="brand.secondaryText">
                            <Tag
                                color="brand.secondaryText"
                                bg="brand.highlight2"
                                boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
                            >
                                Routine
                            </Tag>
                            <FiChevronsRight />
                            <Text size="sm">Link Folder</Text>
                        </Flex>
                        <Flex gap={2} alignItems="center">
                            <IconButton label={""} onClick={() => { }}>
                                <FiMaximize2 />
                            </IconButton>
                            <IconButton label={""} onClick={() => { }}>
                                <FiX />
                            </IconButton>
                        </Flex>
                    </Flex>
                    <Stack px="4" py="2">
                        <CheckboxGroup>
                            {
                                folders?.map((folder) => <Folder folder={folder} />)
                            }
                        </CheckboxGroup>
                    </Stack>
                    <Flex px="4" py="4" alignItems="center" justifyContent="space-between" bg="brand.highlight2">
                        <Flex gap={2}>
                            <Button size="sm" bg="brand.white" onClick={() => { }}>Draft</Button>
                            <Button size="sm" onClick={handleSubmit}>Continue</Button>
                        </Flex>
                    </Flex>
                </Stack>
            </Modal>
        </>
    )
}