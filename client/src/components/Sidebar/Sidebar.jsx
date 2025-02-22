import React from 'react';
import styled from 'styled-components';
import { Add as AddIcon, Settings as SettingsIcon } from '@mui/icons-material';
import ChatHistoryItem from './ChatHistoryItem';

const SidebarContainer = styled.div`
  width: 260px;
  background: #ffffff;
  border-right: 1px solid #e6e6e6;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const NewChatButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: #4F46E5;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px;
  margin: 16px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s;

  &:hover {
    background: #4338CA;
  }
`;

const Logo = styled.div`
  padding: 16px;
  font-size: 20px;
  font-weight: bold;
  color: #111827;
`;

const ChatList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 8px;
`;

const Footer = styled.div`
  padding: 16px;
  border-top: 1px solid #e6e6e6;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

const Sidebar = ({ chats, activeChat, onNewChat, onSelectChat }) => {
  return (
    <SidebarContainer>
      <Logo>CHAT A.I+</Logo>
      <NewChatButton onClick={onNewChat}>
        <AddIcon /> New chat
      </NewChatButton>
      
      <ChatList>
        {chats.map((chat) => (
          <ChatHistoryItem
            key={chat.id}
            chat={chat}
            active={activeChat?.id === chat.id}
            onClick={() => onSelectChat(chat)}
          />
        ))}
      </ChatList>

      <Footer>
        <UserInfo>
          <Avatar src="/assets/user-avatar.png" alt="User" />
          <span>User Name</span>
        </UserInfo>
        <SettingsIcon style={{ cursor: 'pointer', color: '#6B7280' }} />
      </Footer>
    </SidebarContainer>
  );
};

export default Sidebar;
