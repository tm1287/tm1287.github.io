# **Longhorn Racing - Telemetry**

  

## Background
[Longhorn Racing Combustion](https://www.longhornracing.org/combustion-vehicle) is a [Formula SAE](https://www.fsaeonline.com/) (FSAE) team at The University of Texas at Austin dedicated to the design and manufacturing of an internal combustion engine racecar within a one-year build cycle. As the software lead for the combustion team, I am responsible for the design and creation of any software running on the electronic control systems for the racecar.

  
## Telemetry (2021-2022 Season)

The most important part of evaluating racecar performance involves the analysis of data from the plethora of sensors present on the car. However in most cases, the consolidation and analysis of this data is a tremendous feat, and requires some sort of centralized pipeline in order to pull meaningful conclusions from the data.

During the 2021-2022 competition season, I was involved in the creation of a pipeline to collect data from the various sensors on the car, store it in a database on the cloud, and visualize the data within a custom React web application.

The consolidation of sensor data during the 2021-22 season was performed by the [Racecapture Pro](https://www.autosportlabs.com/product/racecapture-pro-mk4-lap-timer-data-logger-telemetry-system/) Telemetry System. Once this data was pulled off of the device, users would use the React application to upload the file to our cloud infrastructure on AWS. During the upload process, users could add comments and tags used to filter and sort the data, allowing for additional context to be applied to the data.

Once the data was uploaded through the web app, it was sorted according to a timestamp field, and the data was indexed in an containerized InfluxDB database running on Amazon Elastic Container Service (ECS). InfluxDB was chosen over other conventional database technologies due to it's stature as a timeseries database. Since all of the data we were dealing with was timeseries based, InfluxDB's indexing allowed us to make expensive queries in a fraction of the time that it would have taken in a conventional RDBMS.

In addition to InfluxDB, other AWS services such as DynamoDB and Amazon S3 were used to store additional media and metadata relating to the telemetry files. 

These data sources were all accessible through a backend REST API written using Express JS. In addition to ferrying data from various data sources, the API also handled authentication and authorization through the use of a credential store and JWT tokens. This allowed other users on our team to setup accounts with fine-grained permission control, allowing for safe and structured use of telemetry data.

These users would be able to log into the web application, and select a previously uploaded telemetry file. This would bring them to a view where they could select multiple sensor fields and display them on a variety of graphs. Additionally, if onboard video was available, the users could view live playback of the data in conjunction with video playback.

## Data Acquisition and Telemetry (2022-2023 Season)
 
 At the close of the 2021-22 season, we were very dissatisfied with the hardware used to collect and consolidate telemetry data used on the car. As a result, I led an initiative to develop an in-house data acquisition (DAQ) solution for interfacing with the various data communication systems on the car that was capable of storing data and transmitting it to a base station for live monitoring of the car's performance.

Over the past summer and this year, the DAQ PCB was designed in KiCAD (an electronic design automation (EDA) software) and was capable of interfacing with serial communication protocols such as I<sup>2</sup>C, SPI, UART, as well as more specialized protocols such as CANBus. This data was collected at polling rates varying from 1Hz to 1 KHz and saved to an onboard SD Card.

One additional requirement we had this season was the ability to monitor any of our onboard sensors during a testing run in real-time, through the use of a portable base station. In order to achieve this we considered the use of wireless communication over the 802.11 LAN protocol. However, based on past issues with the protocol, we opted to use a transmitter operating on the license free 915 MHz radio band.

Since the DAQ system for this season was built completely in house, it required custom firmware and software in order to operate and interface with the existing telemetry pipeline. The DAQ board, like all of our other PCBs, were designed using microcontrollers from the STM32 family. This allowed us to quickly write firmware that interacts with the microcontroller's hardware abstraction layer, to quickly communicate with the various communication interfaces. Likewise, similar firmware was written for the 915 MHz receiver in order to collect data being broadcasted from the car, and transformed it before displaying it on a web application running the base station.