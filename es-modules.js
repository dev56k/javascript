//Example file sum.js
export function sum(a,b){}

export function otherFunction() {}

//Example file rest.js
export function rest() {}

import { sum, otherFunction} from './sum'
import rest from './rest'

function calculator() {
    sum();
    rest();
}

// Example React
import React, {useState, useEffect} from 'react';
