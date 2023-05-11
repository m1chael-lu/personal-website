import React, { useState } from "react";
import Image from "next/image";
type Props = {};

const Education = () => {
  const [isMobile, setisMoble] = useState(false);
  return (
    <div className="bg-main-color text-center p-6">
      <h1 className="text-5xl font-bold p-4 text-cool-blue-color">
        Education
      </h1>
      <div
        className="bg-cool-blue-color w-24 h-2 mx-auto
          rounded-md"
      ></div>
      <div className="md:flex items-center text-center justify-between p-4">
        <div className="mx-auto p-4">
          <Image
            src="images/whartonlogo.png"
            width={400}
            height={200}
            alt="Wharton Image"
          ></Image>
          <h1 className="font-bold text-cool-blue-color">
            Bachelors of Economics
          </h1>
        </div>
        <div className="mx-auto">
          <Image
            src="images/engineering.png"
            width={400}
            height={300}
            alt="Engineering IMage"
          ></Image>
          <h1 className="font-bold text-cool-blue-color mt-2">
            Bachelors of Science in Engineering
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Education;
