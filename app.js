"use strict";

var ev3dev = require("ev3dev"),
    _      = require("lodash");

var motor = new ev3dev.Motor();

if (!motor.connected)
    console.log("No motor could be found. Are you sure that one is connected?");

console.log(' Port: ' + motor.portName);
console.log(' Driver: ' + motor.driverName);

console.log('Setting motor properties...');
motor.rampUpSp = 100;
motor.rampDownSp = 100;
motor.timeSp = 1000;
motor.dutyCycleSp = 50;
console.log('Available commands: ' + motor.commands);
console.log('Sending motor command...');
motor.command = 'run-timed';

do {
    console.log("Motor speed: " + motor.speed);
    
    {   //Hack to sleep for time
        //    SHOULD NOT BE USED IN PRODUCTION CODE
        var start = new Date().getTime();
        while (new Date().getTime() < start + 80) {
            ;
        }
    }
} while(motor.speed > 10);
