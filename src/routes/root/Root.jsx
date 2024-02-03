import { WrapperInit,
  Wrapper,
  InitTitle,
  LinkButton,
} from './style'

import { Link } from 'react-router-dom';

export default function Root() {
    return (
      <WrapperInit>
        <Wrapper>
          <InitTitle>
          Hola.<br/>
          Mi nombre es Ignacio.<br/>
          Soy Full Stack Web Developer
          </InitTitle>
          <LinkButton style={{textDecoration: 'none'}} to={'/about'}>
            Continuar
          </LinkButton>
        </Wrapper>
      </WrapperInit>
    );
  }