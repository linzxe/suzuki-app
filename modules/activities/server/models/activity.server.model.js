'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Activity Schema
 */
var ActivitySchema = new Schema({
  name: {
    type: String,
    default: '',
    required: 'Please add Activity name',
    trim: true
  },
  description: {
    type: String,
    default: '',
    required: 'Please add Description',
    trim: true
  },
  teacher: {
    type: String,
    default: '',
    required: 'Please add Teacher',
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Activity', ActivitySchema);
