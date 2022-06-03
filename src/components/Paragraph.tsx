import { FC } from "react";

interface IParagraphProps {
  text: string;
  imageUrl: string;
  imageAlt?: string;
  imagePosition: "left" | "right";
}

const Paragraph: FC<IParagraphProps> = ({
  text,
  imageUrl,
  imageAlt,
  imagePosition,
}) => {
  return (
    <div className={"flex flex-col md:flex-row"}>
      {imagePosition === "left" && (
        <img
          src={imageUrl}
          alt={imageUrl || text}
          className={"h-48 rounded-2xl m-5"}
        />
      )}
      <p className={"text-justify m-5"}>{text}</p>
      {imagePosition === "right" && (
        <img src={imageUrl} alt={imageAlt || text} />
      )}
    </div>
  );
};

export default Paragraph;
