// server.js (Backend)
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { Server } = require('socket.io');
const http = require('http');

// App setup
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*' },
});

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/chatApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Schemas
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

const messageSchema = new mongoose.Schema({
  sender: String,
  text: String,
  timestamp: { type: Date, default: Date.now },
});

const User = mongoose.model('User', userSchema);
const Message = mongoose.model('Message', messageSchema);

// Routes
app.post('/login', async (req, res) => {
  const { email, username } = req.body;
  let user = await User.findOne({ email });
  if (!user) user = new User({ email, username, friends: [] });
  await user.save();
  res.json(user);
});

app.get('/friends', async (req, res) => {
  const friends = await User.find();
  res.json(friends);
});

app.post('/add-friend', async (req, res) => {
  const { email, friendEmail } = req.body;
  const user = await User.findOne({ email });
  const friend = await User.findOne({ email: friendEmail });
  user.friends.push(friend._id);
  await user.save();
  res.send('Friend added');
});

// Real-time communication
io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('message', async (data) => {
    const message = new Message(data);
    await message.save();
    io.emit('message', data);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Start server
server.listen(3000, () => console.log('Server running on port 3000'));
      
