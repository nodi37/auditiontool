const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors({ origin: '*' }));
const port = 3001;

const noteFilters = require('./src/notefilters');
const userFilters = require('./src/userfilters');

const { sliceArray } = require('./src/helpFunctions');

const maxQueryCount = 3;

app.get('/get/reviewnotes', async (req, res) => {
    try {
        const { id, keyword, type, priority, skip, limit } = req.query;

        const filtered = await Promise.all([noteFilters.byId(id), noteFilters.byKeyword(keyword), noteFilters.byPriority(priority), noteFilters.byType(type)]);
        const results = filtered.reduce((pValue, cValue) => {
            return pValue.filter(value => cValue.includes(value));
        });

        const toSend = sliceArray(results, skip, limit, maxQueryCount);

        res.status(200).json(toSend);

    } catch (error) {
        console.log(error);
        res.status(500);
    }

});


app.get('/get/users', async (req, res) => {

    try {
        const { id, name, skip, limit } = req.query;

        const filtered = await Promise.all([userFilters.byName(name), userFilters.byId(id)]);
        const results = filtered.reduce((pValue, cValue) => {
            return pValue.filter(value => cValue.includes(value));
        });
        const toSend = sliceArray(results, skip, limit, maxQueryCount);
    
        res.status(200).json(toSend);
    } catch (error) {
        console.log(error);
        res.status(500);
    }
});


app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});