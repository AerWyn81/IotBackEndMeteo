import { Schema, model } from "mongoose";

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

const Device = model("Device", deviceSchema);

export default Device;
