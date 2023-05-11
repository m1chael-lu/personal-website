import React from "react";
import { SocialIcon } from "react-social-icons";
type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="bg-main-color flex flex-col pt-3">
      <div className="flex justify-center space-x-2 mb-2">
        <SocialIcon url="https://www.linkedin.com/in/michael-lu1/" />
        <SocialIcon url="https://github.com/m1chael-lu" />
        <SocialIcon network="email" url="mailto:lumich@wharton.upenn.edu" />
      </div>
    </div>
  );
};

export default Contact;
