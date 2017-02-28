require(process.cwd()+'/.env');
module.exports = {
    'twitterAuth': {
        'consumerKey': TWITTER_KEY,
        'consumerSecret': TWITTER_SECRET,
        'callbackURL': process.env.TW_CB + 'auth/twitter/callback'
    }
}