const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/applicant', require('./routes/api/applicant'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/search', require('./routes/api/search'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));