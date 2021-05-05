// This file is used to define database schema

import mongoose from 'mongoose';

const cardSchema = mongoose.Schema({
    name: String,
    imgUrl: String
})

export default mongoose.model('cards', cardSchema); // In sql, we have tabels, in MongoDB, we have collections