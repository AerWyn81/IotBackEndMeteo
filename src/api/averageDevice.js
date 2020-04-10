import Device from "../models/Device";
const AverageDevice = async  (req, res) => {
    const deviceName = req.params.deviceName;
    let devices = await Device.findAllByName(deviceName);
    let totalTemperature=null,totalWindSpeed=null,totalHumidity=null,AverageTemperature,AverageWindSpeed,AverageHumidity;
    devices.map(element=>{
        totalTemperature += element.temperature;
        totalWindSpeed += element.windSpeed;
        totalHumidity += element.humidity;
        }
    )
    AverageTemperature = totalTemperature/(devices.length);
    AverageWindSpeed = totalWindSpeed/(devices.length);
    AverageHumidity = totalHumidity/(devices.length);
    res.status(200).json({AverageTemperature:AverageTemperature,AverageWindSpeed:AverageWindSpeed,AverageHumidity:AverageHumidity});
};

export default AverageDevice