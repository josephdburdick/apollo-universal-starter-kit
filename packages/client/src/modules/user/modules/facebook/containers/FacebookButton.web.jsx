import React from 'react';
import faFacebookSquare from '@fortawesome/fontawesome-free-brands/faFacebookSquare';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { Button } from '../../../../common/components/web/index';
import { urlHandlerWeb } from '../../../common/helpers';

const facebookLogin = () => {
  window.location = urlHandlerWeb('facebook');
};

const FacebookButton = () => {
  return (
    <Button color="primary" type="button" onClick={facebookLogin} style={{ marginTop: 10 }}>
      Login with Facebook
    </Button>
  );
};

const FacebookLink = () => {
  return (
    <Button color="link" onClick={facebookLogin} style={{ marginTop: 10 }}>
      Login with Facebook
    </Button>
  );
};

const FacebookIcon = () => {
  return <FontAwesomeIcon icon={faFacebookSquare} size="2x" style={{ marginTop: 10 }} onClick={facebookLogin} />;
};

const FacebookComponent = props => {
  switch (props.type) {
    case 'button':
      return <FacebookButton />;
    case 'link':
      return <FacebookLink />;
    case 'icon':
      return <FacebookIcon />;
    default:
      return <FacebookButton />;
  }
};

export default FacebookComponent;