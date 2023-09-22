const mongoose = require('mongoose');


const connectDB = async () => {
    try {
      const conn = await mongoose.connect(`mongodb+srv://kshitijjogi8821:kshitij8821@kj.ey5aaff.mongodb.net/blog`, {
        useNewUrlParser: true,
      });
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.error(error.message);
      
    }

  }
  module.exports = {connectDB};
