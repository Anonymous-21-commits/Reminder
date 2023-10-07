const mailRepo = require("../repository/mailRepo");
class MailService {
  updateMail = async (id, data) => {
    try {
      const repo = new mailRepo();
      return await repo.update(id, data);
    } catch (err) {
      throw err;
    }
  };
  createMail = async (data) => {
    try {
      const repo = new mailRepo();
      return await repo.create(data);
    } catch (err) {
      throw err;
    }
  };
  fetchPendingEmails = async () => {
    try {
      const repo = new mailRepo();
      return await repo.get({ status: "PENDING" });
    } catch (err) {
      throw err;
    }
  };
}

module.exports = MailService;
