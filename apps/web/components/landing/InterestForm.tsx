import { Heading, Stack } from "@chakra-ui/react";
import { Button, Input } from "ui";
import Image from "next/image";

export const InterestForm = () => {
    return (
        <Stack gap={4}>
            <Image
                objectFit="contain"
                width={150}
                height={150}
                src="https://res.cloudinary.com/dwacr3zpp/image/upload/v1657997898/inspirers/images/arabica-1092.svg"
                alt="Inspirers"
            />
            <Heading>We’ll let you know as soon we are ready!</Heading>
            <Input placeholder="Your email" />
            <Button>Notify me</Button>
        </Stack>
    )
}