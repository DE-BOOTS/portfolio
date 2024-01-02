// variable name declaration
let qMessage;

export async function fetchQuote() {
	try {
		const url = 'https://zenquotes.io/api/random';
		const response = await fetch(url);
		const [quoteMessage] = await response.json();
		qMessage = { text: quoteMessage.q, author: quoteMessage.a };
		return qMessage;
	} catch (error) {
		throw new Error('Quote API not working');
	}
}
