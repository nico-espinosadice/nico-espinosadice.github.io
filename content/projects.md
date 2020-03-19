---
title: "Projects"
draft: false
menu: main
weight: 2
---

Descriptions and links for past and present projects.

### [Automated Trading System](https://github.com/nico-espinosadice/quant-trading-system/tree/nico-branch)
**Researcher and Developer**  
*2019 - Present*  
This is an independent project I began to explore time series data. I decided to analyze stock market data, a type of time series data that is readily accessible. I built a recurrent neural network with long short-term memory (LSTM) architecture to predict changes in a company’s stock price based upon market history. I wrote code in Python and used the TensorFlow library to build the neural network. I then used the predictions of the neural network to trade stock through Alpaca, a stock brokerage, and its API. (Alpaca allows for “paper-money” trading: trading with fake money). I automated the trading of the stock using Bash scripting. Currently, I am working on optimizing the algorithm; as an unlicensed trader, there is a limit to the number of trades I can execute in a given time frame.

### [MARS-I (Mudders Aspiring to Reach Space)](https://sites.google.com/g.hmc.edu/mars)
**IMU Subsystem**  
*2018 - Present*  
The goal of the MARS-I project is to design and build a rocket that will reach the Karman Line: 100 kilometers above the Earth, the edge of space. The project is entirely student-led.

I work on the electronics and telemetry team. Our team is responsible for designing and building a robust parachute deployment, telemetry, and data logging system for the rocket. We aim to incorporate 6DOF tracking for the rocket, environmental sensors, a camera, and real-time telemetry over several radio links.

Within the electronics and telemetry team, I lead the IMU design subsystem. Our team is responsible for designing and implementing an IMU array to determine the position of the booster and the dart throughout its flight. [An IMU (inertial measurement unit) is a sensor that calculates the position and orientation of an object in space]. We are currently implementing a Kalman filter that will allow us to filter the noise generated from the IMU sensors.

### [Regression Analysis of Housing Prices](https://github.com/nico-espinosadice/house-price-prediction)
**Researcher and Developer**  
*2017*  
[Housing_Prices_Analysis.pdf](/img/Housing_Prices_Analysis.pdf)  
In the summer of 2017, I took General Assembly's data science course, taught in New York City. During the course, we learned how to build machine learning algorithms – including decision trees, random forest regression and classification models, K-nearest neighbors, and logistic regression. We used Python's Pandas and NumPy libraries for collecting and cleaning the data, and we used the Scikit-Learn library for implementing the models.

As part of the final project for the course, I built a random forest regression model in Python to predict the final sale prices of Iowa houses with over 90% accuracy. I then presented the model’s results to General Assembly faculty and students. The project is linked about.
