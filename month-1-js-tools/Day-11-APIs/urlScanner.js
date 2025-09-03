import dotnev from "dotenv";
import PromptSync from "prompt-sync";
import axios from 'axios';

dotnev.config() //this loads the env file

const prompt = PromptSync();

const apiKey = process.env.API_KEY;
console.log('Apikey_length', apiKey?.length)

const options = {
  method: 'GET',
  url: 'https://malicious-scanner.p.rapidapi.com/rapid/url',
  params: {
    url: 'https://vryjm.page.link/jS6a'
  },
  headers: {
    'x-rapidapi-key': apiKey,
    'x-rapidapi-host': 'malicious-scanner.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}