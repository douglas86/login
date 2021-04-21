import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const memorySchema = new Schema({
    username: String,
    title: String,
    message: String,
    tags: String,
    img: {
        data: Buffer,
        contentType: String,
    },
});

const Memory = mongoose.model('memory', memorySchema);

export default Memory;
