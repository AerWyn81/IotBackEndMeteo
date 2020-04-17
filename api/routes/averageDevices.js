const Device = require("../models/Device");
const Function = require("../functions");
const averageDevices = async (req, res) => {
    let devices = await Device.find({}).sort({ createdAt: -1 });
    let finalDevices = [];
    let sortDevices = [];
    let addValue = true;

    devices.forEach(element =>{
        sortDevices.forEach(devicesSorted =>{
            if(element.deviceName === devicesSorted.deviceName){
                addValue = false;
            }
        });
        if(addValue){
            sortDevices.push(element);
        }
        addValue = true;
    });
    if(sortDevices){
        sortDevices.forEach(element =>{
            finalDevices.push({[element.deviceName]:Function.averageDataFromDevice(devices,element.deviceName)}) ;
        });
    }
    res
        .status(200)
        .json({Devices: finalDevices})
    };

module.exports = averageDevices;
