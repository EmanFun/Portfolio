import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { SiHomeadvisor } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { RiMailSendFill } from "react-icons/ri";
import { MdWork } from "react-icons/md";
import { FaUser } from 'react-icons/fa';


import {
    SocialWrapper,
    Wrapper,
    Link
} from './style'

const message = `"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."%0D%0A\nNo hay nadie que ame el dolor mismo, que lo busque, lo encuentre y lo quiera, simplemente porque es el dolor.%0D%0A`
const subject = `Saludos!`;
const mailTo = 'emanuelfun.95@gmail.com'
const Social = () => {
  return (
    <SocialWrapper >

            <Wrapper >
                <Link>
                    <a href="whatsapp://send?phone=5493518018687" target="blank">
                        <FaPhoneAlt color="black" size={30}/>
                    </a>
                </Link>
                <Link>
                    <a href="https://www.google.com/maps/@-31.4170235,-64.1899042,13z?entry=ttu" target="blank">
                        <SiHomeadvisor color="black" size={30}/>
                    </a>
                </Link>
                <Link>
                    <a href="https://github.com/EmanFun" target="blank">
                        <SiGithub color="black" size={30}/>
                    </a>
                </Link>
                <Link>
                    <a href="https://www.linkedin.com/in/emanuelfun" target="blank">
                        <SiLinkedin color="black" size={30}/>
                    </a>
                </Link>
                <Link>
                    <a href="https://www.instagram.com/emanuel_funs/" target="blank">
                        <SiInstagram color="black" size={30}/>
                    </a>
                </Link>
                <Link>
                    <a href={`mailto:${mailTo}?subject=${subject}&body=${message}`} target="blank">
                        <RiMailSendFill color="black" size={31}/>
                    </a>
                </Link>
                <Link>
                    <a href="https://docs.google.com/document/d/1KB9wznPHuY8QpyjwljzCYfs07XKwbC_0OZyxnY0FjCI/edit?usp=sharing" target="blank">
                        {/* <FaUser color="black" size={30}/> */}
                        <img style={{height: "32px"}} src="./cv-icon.png" alt='CV Link'/>
                    </a>
                </Link>
            </Wrapper>

    </SocialWrapper>
  );
};

export default Social;
