import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function AvatarTable({ deliveryman }) {
  return (
    <Container>
      <img
        src={
          (deliveryman.avatar && deliveryman.avatar.url) ||
          `https://ui-avatars.com/api/?name=$${deliveryman.name}`
        }
        alt=""
      />
      <span>{deliveryman.name}</span>
    </Container>
  );
}

AvatarTable.propTypes = {
  deliveryman: PropTypes.object.isRequired,
};
