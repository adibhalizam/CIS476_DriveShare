// const mongoose = require('mongoose');

// const notificationSchema = new mongoose.Schema({
//   user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   message: { type: String, required: true },
//   read: { type: Boolean, default: false },
//   timestamp: { type: Date, default: Date.now },
// });

// const Notification = mongoose.model('Notification', notificationSchema);

// module.exports = Notification;

// notification.js
const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  recipient: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;
