import express from 'express'

const app = express();

app.get('/',(req,res)=>{
	res.send('Hello');
});

app.get('/cpu',(req,res)=>{
	for (let i = 0; i < 100000000; i++) {
		Math.random();
	}
	res.send("Hello world");
});

app.listen(3000,()=>{
	console.log('Listening on port 3000');
})
