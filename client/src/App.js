import React from 'react';
import styled from 'styled-components';
import Sidebar from './components/Sidebar/Sidebar';
import Chat from './components/Chat/Chat';
import { useChat } from './context/ChatContext';

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  background: #F9FAFB;
`;

function App() {
  const { chats, activeChat, setActiveChat, createNewChat, updateChat } = useChat();

  return (
    <AppContainer>
      <Sidebar
        chats={chats}
        activeChat={activeChat}
        onNewChat={createNewChat}
        onSelectChat={setActiveChat}
      />
      <Chat
        chat={activeChat}
        onUpdateChat={updateChat}
      />
    </AppContainer>
  );
}

export default App;
