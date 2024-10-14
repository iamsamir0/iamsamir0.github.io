// App.js (Frontend)
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import axios from 'axios';

const socket = io('http://localhost:3000');

function App() {
  const [theme, setTheme] = useState('light');
  const [user, setUser] = useState(null);
  const [friends, setFriends] = useState([]);
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);
  const [friendEmail, setFriendEmail] = useState('');

  // Toggle theme
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  // Handle login
  const login = async (email, username) => {
    const { data } = await axios.post('http://localhost:3000/login', { email, username });
    setUser(data);
  };

  // Fetch friends
  useEffect(() => {
    const fetchFriends = async () => {
      const { data } = await axios.get('http://localhost:3000/friends');
      setFriends(data);
    };
    fetchFriends();
  }, []);

  // Real-time chat
  useEffect(() => {
    socket.on('message', (data) => {
      setChat((prevChat) => [...prevChat, data]);
    });
  }, []);

  // Send message
  const sendMessage = () => {
    socket.emit('message', { sender: user.username, text: message });
    setMessage('');
  };

  // Add friend
  const addFriend = async () => {
    await axios.post('http://localhost:3000/add-friend', { email: user.email, friendEmail });
    setFriendEmail('');
  };

  return (
    <div className={`app ${theme}`}>
      {!user ? (
        <div>
          <h2>Login</h2>
          <input type="text" placeholder="Email" id="email" />
          <input type="text" placeholder="Username" id="username" />
          <button onClick={() => login(document.getElementById('email').value, document.getElementById('username').value)}>
            Login
          </button>
        </div>
      ) : (
        <div>
          <h2>Welcome, {user.username}</h2>
          <button onClick={toggleTheme}>Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode</button>

          <h3>Chat</h3>
          <div className="chat-box">
            {chat.map((msg, i) => (
              <p key={i}>
                <strong>{msg.sender}</strong>: {msg.text}
              </p>
            ))}
          </div>
          <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type a message" />
          <button onClick={sendMessage}>Send</button>

          <h3>Friends</h3>
          <div>
            {friends.map((friend) => (
              <p key={friend._id}>{friend.username}</p>
            ))}
            <input
              type="text"
              value={friendEmail}
              onChange={(e) => setFriendEmail(e.target.value)}
              placeholder="Add friend by email"
            />
            <button onClick={addFriend}>Add Friend</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
        
