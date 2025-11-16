/**
 * Author: Amit Jaggernauth
 * Date: 11/16/2025
 * File Name: Week4_Chapter4
 * Description:
 */

const EventEmitter = require("events");

// TODO: Create a TacoStandEmitter class that extends EventEmitter and implements the following methods: serveCustomer, prepareTaco, and handleRush
'use strict';
import EventEmitter from 'events';

class TacoStandEmitter extends EventEmitter {
  serveCustomer(customer) {
    this.emit('serve', customer);
  }

  prepareTaco(taco) {
    this.emit('prepare', taco);
  }

  handleRush(rush) {
    this.emit('rush', rush);
  }
}

export default TacoStandEmitter;