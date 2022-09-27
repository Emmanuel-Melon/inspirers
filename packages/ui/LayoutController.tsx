import { FC } from 'react';
import {
    Flex,
    Text,
    useDisclosure,
} from "@chakra-ui/react";
import { Avatar, Button } from "ui";
import {
    FiBarChart2,
    FiFilter,
    FiList,
    FiInfo,
    FiArrowDown,
    FiPlus,
    FiLayout,
    FiCalendar,
    FiLayers,
    FiGrid,
} from "react-icons/fi";
import { IconButton } from "ui";

export type LayoutControllerProps = {};
export type LayoutButtonProps = {};



const LayoutButton: FC<LayoutButtonProps> = ({ layout, view, changeView }) => {
    return (
        <Button
            size="sm"
            icon={layout.icon}
            onClick={() => changeView(view)}
            bg={ layout.active ? "brand.secondary" : "brand.white" }
            color={ layout.active ? "brand.white" : "brand.secondaryText" }
        >
            {layout.title}
        </Button>
    )
}

export const LayoutController: FC<LayoutControllerProps> = ({ changeView, openModal, view, layouts = [] }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Flex
                borderRadius="1rem"
                gap={4}
                color="brand.primaryText"
                justifyContent="space-between"
            >
                <Flex gap={4} p="4" justifyContent="space-between">
                    <Flex gap={4}>
                        <Flex alignItems="center" gap={2}>
                            <FiLayout />
                            <Text color="brand.secondaryText">Layout</Text>
                        </Flex>
                        {
                            layouts.length > 0 ? layouts.map(layout => <LayoutButton layout={layout} key={layout.id} />) : null
                        }
                    </Flex>
                </Flex>
                <Flex gap={2} alignItems="center">
                    <IconButton label="info button" onClick={() => { }}>
                        <FiInfo />
                    </IconButton>
                    <Button icon={<FiPlus />} size="sm" onClick={openModal}>
                        New Routine
                    </Button>
                </Flex>
            </Flex>
        </>
    );
};
