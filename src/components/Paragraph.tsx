import { FC } from "react";

interface IParagraphProps {
  text: string;
  imageUrl?: string;
  imageAlt?: string;
  imagePosition?: "left" | "right";
}

const Paragraph: FC<IParagraphProps> = ({
  text,
  imageUrl,
  imageAlt,
  imagePosition,
}) => {
  imagePosition = imagePosition || "left";
  const image = (
    <img
      src={imageUrl}
      alt={imageAlt || text}
      className={"h-48 rounded-2xl m-5"}
    />
  );

  return (
    <div className={"flex flex-col md:flex-row items-center"}>
      {imageUrl && imagePosition === "left" && image}
      <p className={"text-justify m-5"}>{text}</p>
      {image && imagePosition === "right" && image}
    </div>
  );
};

export default Paragraph;
