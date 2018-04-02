---
layout: page 
title: Projects 
permalink: /projects/
sidebar_link: true
---

Here's a list of some of the projects I've done.

## WiFinder ##

A robot that drives towards the location of the best possible WiFi signal. This robot uses an Arduino Mega as the brains and two ESP826 boards two compare signal strength. The robot moves forward if the signal in the front is stronger than the one in the back, and turns otherwise. A phone access point was used as the test.

There were several improvements that could be made. First, the ESP8266 modules and the motors combined drained a lot of the Arduino's power, so much so that the modules would have to reset, and the 9V batteries supplied would drain quickly. Either a wall power source should be used or a way to conserve power better. Also the robot qwould be more efficient in finding its access point using three modules, with a triangulation algorithm. Of course, considering two modules drained the power as much as it did, three would be even more difficult to manage.

![WiFinder](/images/wifinder.png)

## Meteor Flies Drone ##

This project was created at the 2014 Meteor Summer Hackathon. It won in the category Most Entertaining. The code for this can be found [here](https://github.com/afuhrtrumpet/meteorfliesdrone).

"This app utilizes the Twitch Plays Pokemon method of control to allow many users to control a drone at once. It provides two modes of control: anarchy (queue of commands) and democracy (popular voted command is used). In order to host this on Meteor's servers, PubNub was used to communicate between the Meteor server and a client server that is controlling the drone. The app was also demoed live at Meteor Devshop SF in July 2014.

![Meteor Flies Drone 1](/images/meteorhack/anarchy.png)

## OSU FEH Robot ##

This robot was created as a part of the FEH (Fundamentals of Engineering Honors) robot competition at the Ohio State University. The robot won first place in the elimination round of the competition with a score of 89 out of 100 possible points.

The tasks required included pressing a button repeatedly, turning a switch from right to left, picking up a skid, placing the skid in a container, dropping a small spoon in a bin identified by a color on the floor, and pulling out a pin lodged in a pipe.

I worked on the code and testing of this robot. The code is located [here](https://github.com/afuhrtrumpet/FEHRobotCode). It was written in C++ for the internally developed Proteus board, and utilized a modular sequence of steps using input from multiple sensors.

![FEH Robot 1](/images/robotpics/robot.png)

## Arduino Ocarina ##

Using a Sparkfun MIDI shield and a Wii Nunchuk, I replicated the ocarina from the Legend of Zelda series with an Arduino. The code for this is located [here](https://github.com/afuhrtrumpet/arduino-ocarina), and contains songs from both Ocarina of Time and Majora's Mask.

I ran into several interesting challenges with this. Parsing songs with JSON was not the easiest task to do, and I was not initially able to do this with the existing libraries as of January, but used a new library that appeared several months later to parse JSON strings. Memory management was (and still is) also an issue--the program was mysteriously not running properly until I tried running it on an Arduino Mega. I may still look into ways to cut down on memory usage, but the variety of songs held in memory already make this difficult.

## Arduino Christmas Lighting ##

This project uses an Arduino to control both EL wire and an RGB (non-addressable) LED strip simultaneously. It also reads input from a potentiometer, two buttons, a PIR sensor, and displays text to an LCD screen. The wiring diagram is show below.

The source code for each program can be found [here](https://github.com/afuhrtrumpet/arduinochristmaslights)

The first program does not utilize the buttons or LCD. It gradually fades the LED strip through the entire color spectrum and blinks the EL wire in an interval specified by the position of the potentiometer. After doing this for a certain amount of time, both components shut off to save power. They are reactivated when the PIR sensor detects motion.

The second program performs similarly to the first program, but at the start it asks the user to input a sequence of colors by twisting the potentiometer to specify levels of red, green, and blue. After each color has been entered, the user can hit the bottom button to add another color or the top button to finish and start the sequence. Then, the EL wire performs as described in the first program while the LED strip switches between the user-defined sequence of colors in the same time interval the EL wire blinks. Both lights shut off after a certain period of time to wait for motion. The user can also press the top button during the light sequence to enter a new sequence of colors.

I had my fair share of problems and issues during the implementation of this project. Here are some of the ones I solved along the way:

* The diode on the Arduino burned off due to a short circuit of the 12V power required to light the LED strip. I discovered that the other end of the strip connectors were also wired to ground, causing the short circuit.
* The Arduino could not supply the power required to control the LED strip or EL wire. To solve this, I used an relay to switch on and off the power of the 9V inverter to the EL wire and hooked a 12V power supply up to the Arduino and used N-channel MOSFETs to control the power.

And some improvements that could still be made:

* Two potentiometers should be used: one to set the colors, and one to control the blink delay. In the current configuration, for example, if blue is set to 0 in the last color added and the user forgets to set the potentiometer back to a non-zero value, the blinking occurs faster than the relay can handle, causing a buzzing sound.
* The option to have the LED strip fade could still exist, or an option to have the strip fade between colors could be added.
* For some reason when setting colors, a low blue value makes the LED strip blink rapidly between a blue and non-blue color.
* The relay used to control the EL wire is noisy. Alternate control methods could be looked into for this.

![Christmas Lights](/images/christmaslights.png)

## KivaMe ##

This project was created at HackSummit 2014 in San Francisco. I worked on a team of 10 for this project, and managed the API layer in a Django application. The backend can be found [here](https://github.com/afuhrtrumpet/hacksummit) and the frontend can be found [here](https://github.com/kvindasAB/kivame-ui)

This app was created in response to the Kiva challenge at the hackathon which involved creating a recommendation engine and UI for loans on Kiva that read data from various sources including Facebook. The team (because it was large) decided to split the application into separate frontend and backend servers to also make way for an iOS app. The application uses a Netflix-style UI to display different loan categories to the user, and utilizes an API that can be easily configurable to accomodate different categories.

![KivaMe 1](/images/kivame/demo.jpeg)

## DAE Sickness? ##

This project was created at Cardinal Health Codefest, and won the popular vote prize.

It provides an information service to patients, containing a "bulletin board" where they can share or see advice from others, a buddy system in which two patients with the same condition can sign up to email each other, and online news information about recent developments in the condition.

![DAESickness 1](/images/daesickness/bulletin.png)
