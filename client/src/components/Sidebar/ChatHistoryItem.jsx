import React from 'react';
import styled from 'styled-components';
import { Message as MessageIcon } from '@mui/icons-material';

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;
  background: ${props => props.active ? '#F3F4F6' : 'transparent'};

  &:hover {
    background: #F3F4F6;
  }
`;

const Icon = styled.div`
  color: #6B7280;
`;

const Title = styled.div`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${props => props.active ? '#111827' : '#6B7280'};
`;

const ChatHistoryItem = ({ chat, active, onClick }) => {
  return (
    <ItemContainer active={active} onClick={onClick}>
      <Icon>
        <MessageIcon />
      </Icon>
      <Title active={active}>{chat.title}</Title>
    </ItemContainer>
  );
};

export default ChatHistoryItem;
