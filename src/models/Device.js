import {model, Schema} from "mongoose";

const deviceSchema = new Schema({
  deviceName: String,
  status: Boolean,
  zoneLat: Number,
  zoneLong: Number,
  temperature: Number,
  humidity: Number,
  windSpeed: Number,
  createdAt: { type: Date, default: Date.now() },
});

deviceSchema.statics.findByName = async function(name) {
  return this.findOne({
    deviceName: name
  });
};

const Device = model("Device", deviceSchema);

export default Device;
