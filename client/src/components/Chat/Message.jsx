import React from 'react';
import styled from 'styled-components';

const MessageContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  padding: 16px;
  background: ${props => props.isUser ? '#F3F4F6' : 'white'};
  border-radius: 8px;
  max-width: 80%;
  align-self: ${props => props.isUser ? 'flex-end' : 'flex-start'};
`;

const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${props => props.isUser ? '#4F46E5' : '#10B981'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 14px;
`;

const Content = styled.div`
  flex: 1;
  white-space: pre-wrap;
`;

const Message = ({ message }) => {
  const isUser = message.sender === 'user';

  return (
    <MessageContainer isUser={isUser}>
      <Avatar isUser={isUser}>
        {isUser ? 'U' : 'AI'}
      </Avatar>
      <Content>
        {message.content}
      </Content>
    </MessageContainer>
  );
};

export default Message;
