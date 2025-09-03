import dotnev from "dotenv";
import PromptSync from "prompt-sync";
import axios from 'axios';

dotnev.config() //this loads the env file

const prompt = PromptSync();

const apiKey = process.env.API_KEY;
console.log('Apikey_length', apiKey?.length)

let urlRequest = prompt("Enter url you want to check: ")

const options = {
  method: 'GET',
  url: "https://malicious-scanner.p.rapidapi.com/rapid/url",
  params: {
    url: urlRequest,
  },
  headers: {
    'x-rapidapi-key': `${apiKey}`,
    'x-rapidapi-host': 'malicious-scanner.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
  let results = response.data;
	
console.log("\n======== 👾 Log Results =======");
console.log(`\nURL 🌐 : ${results.data?.url || "N/A"}`);
console.log(`\nStatus 📝 : ${results.data.status}`);
console.log(`\nOutcome 📂 : ${results.data.message}`);
console.log("\n=========================================");

} catch (error) {
	console.error(error);
}
