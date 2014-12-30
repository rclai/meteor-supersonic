Package.describe({
	name: 'rl:supersonic',
	summary: 'SuperSonic wrapped in Meteor!',
	version: '1.0.0',
	git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
	api.versionsFrom('1.0.2.1');

	// These are (most of) the Cordova plugins that Supersonic actually uses
	// I also did find out that AppGyver did fork some of these plugins and distribute
	// Supersonic with modified versions, but out of simplicity and to get things
	// going I decided to include the original Apache ones
	Cordova.depends({
		'org.apache.cordova.dialogs': '0.2.11',
		'org.apache.cordova.device-motion': '0.2.11',
		'org.apache.cordova.camera': '0.3.4',
		'org.apache.cordova.device-orientation': '0.3.10',
		'org.apache.cordova.geolocation': '0.3.11',
		'org.apache.cordova.vibration': '0.3.12',
		'org.apache.cordova.battery-status': '0.2.12',
		'org.apache.cordova.contacts': '0.2.15',
		'org.apache.cordova.globalization': '0.3.3',
		'org.apache.cordova.inappbrowser': '0.5.4',
		'org.apache.cordova.media': '0.2.15',
		'org.apache.cordova.media-capture': '0.3.5',
		'org.apache.cordova.network-information': '0.2.14',
		'com.ionic.keyboard': '1.0.3',
		'com.phonegap.plugins.barcodescanner': '2.0.1'
	});

	api.use([
		// I included this so that supersonic loads later
		'meteor-platform',
		// this is important as it will let you include things like webcomponents
		// Steroids and other stuff
		'mquandalle:bower@0.1.11'],
    'client');

	api.addFiles([
		// Supersonic icons have to be included manually like so
		'fonts/ionicons.eot',
		'fonts/ionicons.svg',
		'fonts/ionicons.ttf',
		'fonts/ionicons.woff',
		// I modified the CSS to properly reference the font files properly
		'supersonic.css',
		// this file is the magical file were you include the bower libraries needed
		// some steroids dependencies were included explicitly
		'smart.json',
		// supersonic dependency
		// for some reason, including it in the smart.json 
		// caused the clicking not to work
		'webcomponents.js',
		// This is actually the supersonic.core.js, I just renamed it to this for simplicity
		// This is the non-angularized version of Supersonic as stated in Supersonic's github readme
		'supersonic.js'
	], 'client');
});

Package.onTest(function(api) {
	api.use('tinytest');
	api.use('rl:supersonic');
	api.addFiles('supersonic-tests.js');
});
