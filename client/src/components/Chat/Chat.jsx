import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Send as SendIcon } from '@mui/icons-material';
import Message from './Message';

const ChatContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #F9FAFB;
`;

const ChatHeader = styled.div`
  padding: 16px;
  border-bottom: 1px solid #e6e6e6;
  background: white;
`;

const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const InputContainer = styled.div`
  padding: 16px;
  background: white;
  border-top: 1px solid #e6e6e6;
  display: flex;
  gap: 12px;
  align-items: flex-end;
`;

const Input = styled.textarea`
  flex: 1;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  padding: 12px;
  resize: none;
  min-height: 24px;
  max-height: 200px;
  font-family: inherit;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #4F46E5;
  }
`;

const SendButton = styled.button`
  background: #4F46E5;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;

  &:hover {
    background: #4338CA;
  }
`;

const Chat = ({ chat, onUpdateChat }) => {
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    const element = messagesEndRef.current;
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [chat?.messages]);

  const handleSend = async () => {
    if (!input.trim() || !chat) return;

    const newMessage = {
      id: Date.now(),
      content: input,
      sender: 'user',
      timestamp: new Date(),
    };

    const updatedChat = {
      ...chat,
      messages: [...(chat.messages || []), newMessage],
    };
    onUpdateChat(updatedChat);
    setInput('');

    // TODO: Add API call here for bot response
  };

  if (!chat) {
    return (
      <ChatContainer>
        <div style={{ padding: '24px', textAlign: 'center', color: '#6B7280' }}>
          Select a chat or start a new conversation
        </div>
      </ChatContainer>
    );
  }

  return (
    <ChatContainer>
      <ChatHeader>
        <h2>{chat.title}</h2>
      </ChatHeader>

      <MessagesContainer>
        {chat.messages?.map((message) => (
          <Message key={message.id} message={message} />
        ))}
        <div ref={messagesEndRef} />
      </MessagesContainer>

      <InputContainer>
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          onKeyPress={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
        />
        <SendButton onClick={handleSend}>
          <SendIcon />
        </SendButton>
      </InputContainer>
    </ChatContainer>
  );
};

export default Chat;
