import React from 'react';
import { Container, ListItem } from './MoreModalStyled';
import { FiArrowRight, FiArrowLeft, FiTrash2 } from 'react-icons/fi';
import { BiEditAlt } from 'react-icons/bi';

const MoreModal = () => {
  return (
    <Container>
      <ListItem>
        <FiArrowRight size={16} /> Move Right
      </ListItem>
      <ListItem>
        <FiArrowLeft size={16} /> Move Left
      </ListItem>
      <ListItem>
        <BiEditAlt size={20} /> Edit
      </ListItem>
      <ListItem delete>
        <FiTrash2 size={18} /> Delete
      </ListItem>
    </Container>
  );
};

export default MoreModal;
