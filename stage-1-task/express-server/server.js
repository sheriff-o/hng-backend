import express from 'express';
const app = express();
const port = 5000;


app.get('/api/hello', (req, res) => {
    const visitorName = req.query.visitor_name;
    const clientIp = '127.0.0.1';
    const location = 'New York';
    const temperature = 11;
    const greeting = `Hello, ${visitorName}!, the temperature is ${temperature} degrees Celsius in ${location}`;

    const apiResponse = {
        client_ip: clientIp,
        location: location,
        greeting: greeting
    };
    if (visitorName) {
        res.json(apiResponse);
    } else {
        res.send('Hello, visitor!');
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
