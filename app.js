

//Routes
app.get('/', (req, res) => {
    res.send('home');
});

//Disable mongoose buffering
mongoose.set('bufferCommands', false);

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true },
    () => console.log('Connected to DB')
);

app.listen(port, hostname, () => {
    console.log(`App listening at http://${hostname}:${port}`);
});

