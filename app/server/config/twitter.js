require(process.cwd()+'/.env');
module.exports = {
    'twitterAuth': {
        'consumerKey': TWITTER_KEY,
        'consumerSecret': TWITTER_SECRET,
        'callbackURL': 'http://localhost:9000/auth/twitter/callback'
    }
}