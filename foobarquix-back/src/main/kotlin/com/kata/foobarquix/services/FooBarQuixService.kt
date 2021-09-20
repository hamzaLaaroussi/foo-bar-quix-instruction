package com.kata.foobarquix.services

import org.springframework.stereotype.Component

@Component
class FooBarQuixService {

    val  FOO : String = "Foo";
    val  BAR : String = "Bar";
    val  QUIX : String = "Quix";

    fun convertNumber(inputNumber: Int): String {
        var convertedNumber: String;

        var divisibility : String = getInputNumberDivisibility(inputNumber)
        
        var digitsContent : String  = getInputNumberDigitsContent(inputNumber)

        if("".equals(divisibility) && "".equals(digitsContent)){
            convertedNumber = inputNumber.toString();
        } else {
            convertedNumber = divisibility + digitsContent;
        }

       return convertedNumber;
    }


    fun getInputNumberDivisibility (inputNumber: Int): String {
        var result : String = "";

        if(inputNumber % 3 ==0){
            result += FOO;
        }

        if(inputNumber % 5 ==0){
            result += BAR;
        }

        return result;
    }

    fun getInputNumberDigitsContent (inputNumber: Int): String {
        var result : String = "";

        var inputNumberToString : String = inputNumber.toString();

        for (digit in inputNumberToString) {
            if (digit == '3') {
                result += FOO
            } else if (digit == '5') {
                result += BAR
            } else if (digit == '7') {
                result += QUIX
            }
        }
       return result;
    }

}