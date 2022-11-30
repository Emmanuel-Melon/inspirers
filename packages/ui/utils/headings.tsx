
type UnderlineOptions = {
    color?: string;
    bg?: string;
    width?: string;
}

export const gradientUnderline = ({
    bg,
    width,
}: UnderlineOptions = {
    bg: "linear-gradient(90.44deg, #F4C85A -7.46%, #E3A6F2 54.28%, #FBBE95 119.85%)",
}) => {

    console.log(bg)
    return {
        bg: bg,
        display: "block",
        content: '""',
        width,
        height: "15px",
        marginTop: "-15px"
    }
}
// = "linear-gradient(90.44deg, #F4C85A -7.46%, #E3A6F2 54.28%, #FBBE95 119.85%)"

//  = "fit-content"