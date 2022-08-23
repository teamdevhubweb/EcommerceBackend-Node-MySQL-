const config = require('config.json');
const db = require('_helpers/db');

module.exports = {
    CreateReview,
    FetchReview
};

async function CreateReview(params){
    await db.Review.create(params);
}

async function FetchReview() {
    return await db.Review.findAll();
}