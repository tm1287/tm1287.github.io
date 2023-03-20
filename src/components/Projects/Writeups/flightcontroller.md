# **Longhorn Racing - Telemetry**

  

## Background
Multicopters are ariel vehicles that use multiple rotors in order to generate lift. The control of the aircraft is maintained by varying the speed of each of the rotors, based on constant feedback from sensors present on the control board of the aircraft. In addition to being controllable through remote controlled transmitters, some advanced multicopters are capable of fully autonomous flight, and can follow a predetermined path without the intervention of human control.

During the summer of 2022, I was interested in designing my own flight controller. Although many flight controllers are currently available for very affordable prices, I chose this project as a way to get more experience with PCB design as well as embedded software development.

  
## Hardware Design

Due to my familiarity with the STM32 family of microcontrollers (MCU), I chose to use a STM32F405RGT6 as the main processor for this controller. The F4 series of MCUs contains an ARM Cortex M4 processor which had sufficient computational power to compute the position of the aircraft on the fly, and generate actions to stabilize the aircraft.

In order to estimate the position of the aircraft in 3D space, I chose to use the MPU-6050 inertial measurement unit (IMU). This device contains a MEMS accelerometer and a gyroscope that allows for the measurement of acceleration in all three axes, as well as rate of rotation about all three axes.

The board was also designed with multiple PWM timer channels enabled in order to control the speed of brushless motors through the use of electronic speed controllers (ESCs). Additionally, the USB OTG capabilities of the STM32F405 were wired through a USB Type B port, in order to allow for serial communication between the controller and a connected device such as a personal laptop.

Finally, a 128 Mb Flash memory chip was included on the board in order to store configuration data  necessary for the flight controller firmware.

Once the board was fully designed, JLCPCB was used to manufacture the PCB and assemble most of the components using the in-house SMT service. The remaining components were ordered through Digikey and assembled by hand.

## Software - Ongoing

The first task in writing the firmware for this board involved the estimation of aircraft pose from the MPU-6050 IMU. After further research, I discovered that relying on either the accelerometer or gyroscope alone would lead to staggering inaccuracies in vehicle pose estimation over time. To remedy this issue, I implemented a simple complementary filter that estimates vehicle pose through a combination of accelerometer and gyroscope data. This process, named sensor fusion, corrects for static and time-based error in the pose estimation process, allowing me to estimate the [Euler Angles](https://en.wikipedia.org/wiki/Euler_angles) of the aircraft at any point in time.

Currently, development is being done in order to estimate pose using [Quaternions](https://en.wikipedia.org/wiki/Quaternion) rather than Euler angles. This is due to a phenomenon known as the Euler angle singularity, which renders Euler angles useless when the aircraft is at extreme orientations.

## Next Steps

The next steps will involve the creation of firmware drivers for the flash memory chip, allowing for configuration data to be written onto the chip from an external interface. Additionally, I will write drivers to control the speed of the motors wired on the output channels using the provided PWM timers. Finally, I will create a main control loop that aims to stabilize the aircraft by estimating the pose and varying motor output speed until the aircraft is in a stable position.
