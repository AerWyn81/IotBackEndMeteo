const { model, Schema } = require("mongoose");

const deviceSchema = new Schema({
  deviceName: String,
  status: Boolean,
  zoneLat: Number,
  zoneLong: Number,
  temperature: Number,
  humidity: Number,
  windSpeed: Number,
  createdAt: { type: Date, default: Date.now },
});

deviceSchema.statics.findByName = async (name) =>
  await Device.findOne({
    deviceName: name,
  }).sort({ createdAt: -1 });

deviceSchema.statics.findAllByName = async (name) =>
  await Device.find({
    deviceName: name,
  }).limit(20).sort({ createdAt: -1 });

const Device = model("Device", deviceSchema);

module.exports = Device;
