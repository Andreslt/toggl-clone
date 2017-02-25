require(process.cwd()+'/.env');
module.exports = {
    'twitterAuth': {
        'consumerKey': TWITTER_KEY,
        'consumerSecret': TWITTER_SECRET,
        'callbackURL': 'http://192.168.0.5:3000/auth/twitter/callback'
    }
}