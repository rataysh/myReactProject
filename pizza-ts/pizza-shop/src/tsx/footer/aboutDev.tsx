import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";

interface GitLinkTg {
  gitLink: string;
  linkedLink: string;
  telegramLink: string;
}

export const AboutDev:React.FC<GitLinkTg> = (props: GitLinkTg) => {
  return (
    <ul className="flex items-center space-x-1 text-footer">
      <button className="hover:scale-110 transition-all duration-200">
        <a href={props.gitLink} target="_blank" rel="noreferrer">
          <AiFillGithub />
        </a>
      </button>
      <button className="hover:scale-110 transition-all duration-200">
        <a href={props.linkedLink} target="_blank" rel="noreferrer">
          <AiFillLinkedin />
        </a>
      </button>
      <button className="hover:scale-110 transition-all duration-200">
        <a href={props.telegramLink} target="_blank" rel="noreferrer">
          <BsTelegram />
        </a>
      </button>
    </ul>
  );
}
