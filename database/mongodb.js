const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect(connectionUri, {useNewUrlParser: true, useUnifiedTopology: true});

//todo: export mongoose

//todo: add environment variables

const connectionUri = 'mongodb://localhost:27017';

const deviceSchema = new Schema({
    deviceName: String,
    status: Boolean,
    zoneLat: Number,
    zoneLong: Number,
    temperature: Number,
    humidity: Number,
    windSpeed: Number,
    createdAt: { type: Date, default: Date.now()}
});

const Device = Schema('Device', deviceSchema);

module.exports = {
  Device
};
