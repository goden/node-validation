module.exports = {
	isEmail: function(email) {
		return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(email);
	},
	isEnglish: function(str) {
		return /^[a-zA-Z]+$/.test(str);
	},
	isNumeric: function(num) {
		return /^[0-9]+$/.test(num);
	},
	isUrl: function(url) {
		return /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(url);
	},
	isIPAddress: function(ip) {
		return /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ip);
	},
	isHtmlTag: function(tag) {
		return /^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/.test(tag);
	}
};