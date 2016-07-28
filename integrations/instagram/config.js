module.exports = {
	authenticatable:         true,
	authentication_url:      'https://instagram.com/oauth/authorize/?scope=basic+public_content&client_id=' + process.env.INSTAGRAM_CLIENT_ID + '&redirect_uri=https://EXTENSION_ID.chromiumapp.org/callback&response_type=token', // FIXME Use chrome.i18n.getMessage('@@extension_id')
	content_security_policy: {
		'img-src':   ['https://scontent.cdninstagram.com'],
		'media-src': ['https://scontent.cdninstagram.com']
	},
	discussion_integrations: ['instagram', 'reddit', 'twitter'],
	environment:             'client'
};
