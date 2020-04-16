const Device = require("../models/Device");
const AllDataFromOneDevice = async (req, res) => {
    const deviceName = req.params.deviceName;
    let device = await Device.find(deviceName);
    let tabTemperature = null,
        tabWindSpeed = null,
        tabHumidity = null;
    device.map((element) => {
        tabTemperature.push(element.temperature);
        tabWindSpeed.push(element.windSpeed);
        tabHumidity.push(element.humidity);
    });
    res
        .status(200)
        .json({
            tabTemperature: tabTemperature,
            tabWindSpeed: tabWindSpeed,
            tabHumidity: tabHumidity,
        });
};

module.exports = AllDataFromOneDEvice;
