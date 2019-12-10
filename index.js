const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/applicant', require('./routes/api/applicant'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/search', require('./routes/api/search'));
app.use('/api/job', require('./routes/api/job'));
app.use('/api/company', require('./routes/api/company'));
app.use('/api/post', require('./routes/api/post'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));