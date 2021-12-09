const mongoose = require('mongoose');

(async () => {
  try {
    // mongoose.set('debug', true);
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/dfrank', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    console.log(`error: ${err}`);
  }
})();

module.exports = mongoose.connection;
