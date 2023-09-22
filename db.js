const mongoose = require('mongoose');


const connectDB = async () => {
    try {
      const conn = await mongoose.connect(`https://backend-x9r5.onrender.com/blogApp`, {
        useNewUrlParser: true,
      });
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.error(error.message);
      
    }

  }
  module.exports = {connectDB};