Meteor Supersonic Integration
=============================

An attempt at integrating AppGyver's SuperSonic UI with the Meteor framework of awesomemess. I put out what I've done so far in order to encourage community contribution (in case AppGyver decides not to do anything about it). This was started as a result of this issue: https://github.com/AppGyver/steroids/issues/716

##THIS IS WORK IN PROGRESS (NOTHING REALLY AMAZING TO SEE, just read the below stuff and the code)##

Installation
============

- Just git clone this repo, then just ```meteor run```.
- Right now this played around only in the Android platform, feel free to play with iOS if you want.
- Currently your Meteor app will only be a blank screen in the AppGyver Scanner app because Steroids doesn't load Meteor because it doesn't load the Cordova plugins because of this: http://docs.appgyver.com/tooling/build-service/plugins/configuring-custom-plugins/.

###How did I get it to work with Steroids###

- Do ```meteor run android-device``` or just ```meteor run```
- After you've done this, you'll see that Meteor had created a Cordova project in the ```.meteor/local/cordova-build``` (it's a hidden folder in your app) folder of your app.
- ```cd``` into that folder in a new terminal and run ```steroids connect```. Now your Meteor app has been opened with Steroids!
- You can now AppGyver Scan it, but unfortunately you just see a blank screen because Steroids doesn't load Cordova plugins, one of which is required to load the Meteor app.
- This blank screen is not nothing, it is actually displaying the ```www/index.html``` file of the Cordova build. See my below Notes.

Notes
=====

- Steroids reads the parent ```index.html``` file of the ```www``` folder. In that file there's a script reference to the ```meteor_cordova.loader.js``` file, which is what loads your Meteor app, which lives in your ```www/application/``` folder. 
- I verified that it doesn't load the Meteor files ```www/meter_cordova_loader.js, line 57``` because ```cordova.plugins``` is ```undefined```, so the app unfortunately crashes silently at that point.

### Some Supersonic stuff I got working without Steroids + other notes ###

- I was able to get the ```supersonic.ui.dialog``` API calls to work, but that's about it because they're just plain vanilla Cordova plugins. This is the only thing I tested.
- I'm sure some other native calls work, that involve Supersonic wrapper functions around ```navigator.somePlugin.calls```, like geolocation and whatnot but that's about it.
- The stuff that definitely don't work are the supersonic wrappers around ```steroid.nativeUI.calls``` (WHICH IS THE JUICY STUFF AHH!). I was trying to get the native title bar to work but couldn't because that is a steroids native call that can only work with the steroids server.
- I got the Ionicons to work hehe.
