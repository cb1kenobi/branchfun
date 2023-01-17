export default async function handler(req, res) {
	res.status(200).end(`Branch: foo API_KEY=${process.env.API_KEY || 'No API key set'} // ${new 
Date().toISOString()}\n`);
}
