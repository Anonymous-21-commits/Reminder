const Notification = require("../models/notification");
class MailRepo {
  async findAll() {
    try {
      return await Notification.find();
    } catch (err) {
      throw err;
    }
  }
  async update(id, data) {
    try {
      const mail = await Notification.findOne({ _id: id });
      if (data.status) {
        mail.status = data.status;
        await mail.save();
      }
      return mail;
    } catch (err) {
      throw err;
    }
  }
  async get(filter) {
    try {
      return await Notification.find({
        status: filter.status,
        time: { $lt: new Date() }, // Find emails with time less than the current date
      });
    } catch (err) {
      throw err;
    }
  }
  async create(data) {
    try {
      return await Notification.create(data);
    } catch (err) {
      throw err;
    }
  }
}
module.exports = MailRepo;
