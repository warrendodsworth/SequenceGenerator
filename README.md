# Numeric Sequence Calculator

# Calculation

The entry of a number (between 0 to n positive) by a user will prompt the system to do a calculation.
Results will be a sequence of numbers from 0 up until and including the number entered.

##Demo on Azure
[Click here](http://sequencegenerator.azurewebsites.net) to have a look.

## S3.1 The following numeric sequences shall be displayed

S3.1.1 All numbers up to and including the number entered

S3.1.2 All odd numbers up to and including the number entered

S3.1.3 All even numbers up to and including the number entered

S3.1.4 All numbers up to and including the number entered, except when

    S3.1.4.1 A number is a multiple of 3 output C
    S3.1.4.2 A number is a multiple of 5 output E
    S3.1.4.3 A number is a multiple of both 3 and 5 output Z

S3.1.5 All fibonacci number up to and including the number entered


## End to End UI testing

Done with angular protractor
Checks that all sequences are as expected based on the number input

Run from cmd using protractor protractor.spec.js

## Unit Testing

Done with .Net Unit testing framework
Checks that all sequences are valid, that the number of elements is correct and that each expected element is in position.
