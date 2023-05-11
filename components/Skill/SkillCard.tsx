import React from "react";

type Props = {
    name: string;
};

const SkillCard = (props: Props) => {
    return (
        <p className="bg-main-color p-2 rounded-md mb-4 whitespace-nowrap font-mono transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-opacity-90 select-none cursor-default">
            {props.name}
        </p>
    );
}

export default SkillCard;