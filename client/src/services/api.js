import axios from 'axios';

const API_URL = 'http://localhost:3001/api'; // We'll set up the backend server later

export const chatService = {
  async sendMessage(message) {
    try {
      const response = await axios.post(`${API_URL}/chat`, { message });
      return response.data;
    } catch (error) {
      console.error('Error sending message:', error);
      throw error;
    }
  },

  async getChats() {
    try {
      const response = await axios.get(`${API_URL}/chats`);
      return response.data;
    } catch (error) {
      console.error('Error fetching chats:', error);
      throw error;
    }
  }
};
