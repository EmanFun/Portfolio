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
                    <a href="whatsapp://send?phone=5493518018687" target="blank">
                        <FaPhoneAlt color="black" size={30}/>
                    </a>
                </div>
                <div>
                    <a href="https://www.google.com/maps/@-31.4170235,-64.1899042,13z?entry=ttu" target="blank">
                        <SiHomeadvisor color="black" size={30}/>
                    </a>
                </div>
                <div>
                    <a href="https://github.com/EmanFun" target="blank">
                        <SiGithub color="black" size={30}/>
                    </a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/emanuelfun" target="blank">
                        <SiLinkedin color="black" size={30}/>
                    </a>
                </div>
                <div>
                    <a href="https://www.instagram.com/emanuel_funs/" target="blank">
                        <SiInstagram color="black" size={30}/>
                    </a>
                </div>


            </div>
        </div>
    </footer>
  );
};

export default Social;
