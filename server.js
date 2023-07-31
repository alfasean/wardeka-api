const express = require('express');
const cors = require('cors');
const db = require('./app/models');

const app = express();

const corsOptions = {
  origin: '*',
};

// register cors middleware
app.use(cors(corsOptions));
app.use(express.json());

// konek ke database
const mongoseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

db.mongoose
  .connect(db.url, mongoseConfig)
  .then(() => console.log('database connected'))
  .catch((err) => {
    console.log(`gagal konek ${err.message}`);
    process.exit();
  });

require('./app/routes/players.route')(app);
require('./app/routes/achievements.route')(app);
require('./app/routes/achievements_players.route')(app);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`server started on port ${PORT}`));
