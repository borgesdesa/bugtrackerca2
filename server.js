require('dotenv-safe').config()
require('dotenv/config');
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const compression = require('compression')
// const helmet = require('helmet')
const cors = require('cors')
const passport = require('passport')
const app = express()
const mongoose = require('mongoose');
const initMongo = require('./config/mongo')
const path = require('path')
const hostname = '0.0.0.0';

//Import routes
const projectsRoute = require('./routes/projects');
const usersRoute = require('./routes/users');
const issuesRoute = require('./routes/issues');
const commentsRoute = require('./routes/comments');

// Setup express server port from ENV, default: 3000
app.set('port', process.env.PORT || 3000)

// Enable only in development HTTP request logger middleware
/*if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}*/

// Redis cache enabled by env variable
if (process.env.USE_REDIS === 'true') {
  const getExpeditiousCache = require('express-expeditious')
  const cache = getExpeditiousCache({
    namespace: 'expresscache',
    defaultTtl: '1 minute',
    engine: require('expeditious-engine-redis')({
      redis: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT
      }
    })
  })
  app.use(cache)
}

// for parsing json
app.use(
  bodyParser.json({
    limit: '20mb'
  })
)
// for parsing application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    limit: '20mb',
    extended: true
  })
)

// Init all other stuff
app.use(cors())
app.use(passport.initialize())
app.use(compression())
// app.use(helmet())
app.use(express.static('public'))

//Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use('/projects', projectsRoute);
app.use('/users', usersRoute);
app.use('/issues', issuesRoute);
app.use('/comments', commentsRoute);
app.set('views', path.join(__dirname, 'views'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')
app.use(require('./app/routes'))
app.listen(app.get('port'))

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

// Init MongoDB
initMongo()

module.exports = app // for testing
