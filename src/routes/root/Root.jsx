import { WrapperInit,
  Wrapper,
  InitTitle,
  InitButton,
} from './style'

import { Link } from 'react-router-dom';

export default function Root() {
    return (
      <WrapperInit>
        <Wrapper>
          <InitTitle>
            Hola <br/>
            Mi nombre es Ignacio, <br/>
            Soy Full Stack Web Developer
          </InitTitle>
          <Link style={{textDecoration: 'none'}} to={'/about'}>
            <InitButton>Continuar</InitButton>
          </Link>
        </Wrapper>
      </WrapperInit>
    );
  }