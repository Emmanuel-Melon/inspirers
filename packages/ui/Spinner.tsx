// it's recommended to use the
import Image from "next/image";

export const Spinner = () => {
  return (
    <Image
      className="image_rotate"
      src="https://res.cloudinary.com/dwacr3zpp/image/upload/v1661190166/inspirers/size_ipad.svg"
      alt="banner"
      width={300}
      height={300}
    />
  );
};
