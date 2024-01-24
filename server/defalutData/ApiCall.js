import fetch from 'node-fetch'
import apiSchema from '../models/models.js'
import mongoose from 'mongoose';


async function fetchTop10Results() {
    const response = await fetch('https://api.wazirx.com/api/v2/tickers');
    const data = await response.json();

    let top10Results = [];
    if (Array.isArray(data)) { // Check if data is an array
        top10Results = data.slice(0, 10); // Get the first 10 items from the array
    } else if (typeof data === 'object' && data !== null) { // Check if data is an object
        const values = Object.values(data); // Extract the values of the object properties
        top10Results = values.slice(0, 10); // Get the first 10 items from the array of values
    }

    // storing data in database

    await apiSchema.deleteMany();
    for (let i = 0; i < top10Results.length; i++) {
        const post = apiSchema({
            name: top10Results[i]['name'],
            last: top10Results[i]['last'],
            buy: top10Results[i]['buy'],
            sell: top10Results[i]['sell'],
            volume: top10Results[i]['volume'],
            base_unit: top10Results[i]['base_unit']
        })
        post.save();
    }
    return top10Results;
}

export default fetchTop10Results