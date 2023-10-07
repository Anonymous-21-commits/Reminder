const mongoose = require("mongoose");
const Notification = mongoose.Schema({
  subject: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  recipientMail: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ["PENDING", "SUCCESS", "FAILED"],
    required: true,
    default: "PENDING",
  },
});
const NotificationSchema = mongoose.model("Notification", Notification);
module.exports = NotificationSchema;
