import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { SiHomeadvisor } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";



import { container, wrap, social} from './social.module.css'

const Social = () => {
  return (
    <footer className={container}>
        <div className={wrap}>

            <div className={social}>
                <div>
                    <FaPhoneAlt color="white" size={40}/>
                </div>
                <div>
                    <SiHomeadvisor color="white" size={40}/>
                </div>
                <div>
                    <SiGithub color="white" size={40}/>
                </div>
                <div>
                    <SiLinkedin color="white" size={40}/>
                </div>
                <div>
                    <SiInstagram color="white" size={40}/>
                </div>


            </div>
        </div>
    </footer>
  );
};

export default Social;
