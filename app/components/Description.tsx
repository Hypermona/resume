import React from "react";

const Paragraph = ({ text, size }: IDescription) => {
  return <div className={`text-gray-600 text-${size}`}>{text}</div>;
};

export interface IDescription {
  text: string | readonly string[];
  size: "sm" | "md" | "lg";
}

function Description(props: IDescription) {
  if (Array.isArray(props.text)) {
    return (
      <ul>
        {props.text.map((p, i) => (
          <li key={i}>
            <Paragraph {...props} text={p} />
          </li>
        ))}
      </ul>
    );
  } else {
    return <Paragraph {...props} />;
  }
}

export default Description;
