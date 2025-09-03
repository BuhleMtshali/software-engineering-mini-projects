require('dotenv').config();
const prompt = require("prompt-sync")();
import axios from 'axios';

const apiKey = process.env.API_KEY;
console.log('Apikey_length', apiKey?.length)