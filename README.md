A tutorial app, made for a paired mobile device using the Expo mobile App

From Academind's Youtube Channel:

https://www.youtube.com/watch?v=6ZnfsJ6mM5c&t=831s

Below is the draft version of my own personal walkthrough for creating this app. They are very rough and I do not recommend using them (yet...) as a guide to learn the basic setup of this app or react native.

React Native :: Acdemind Video YT
"Learn once, write everywhere"
The Mantra of React Native.
Intro
RN allows you to create mobile apps without using java or swift. Does not contain a library of pre-styled components as you would find built in on anroid or iOS.
Build real mobile apps by using Javascript and React (native)
What a React Native App is and is NOT
IS
JS + React Native App, compiled to Native Code
No CSS or traditional HTML, you will work with device-based markup
IS NOT
Web App running on Mobile Device
Web App hosted in WebView in Native App (e.g. Ionic)
Important takeaway: react native does not work with normal HTML, DOM, CSS or Javascript support as is found in the browser.
Styling
In a fresh init React Native project you will find a custom JS object type called Stylesheet, it emualates styling into an object whose syntax is the same as creating styling in a react web app:
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
alignItems: 'center',
justifyContent: 'center',
},
});
They are assigned the same way as in web React, to the style property of elements: (example using the above stylesheet object)
<View style={styles.container}/>
Installation
Quick Install
npm install -g expo-cli
Creates the commands used to create a react native project
expo init ProjectName
create the new RN project
npm start
Use this in the Project directory
You can run the project on an emulated android or use the expo mobile app on another device to host the app, so long as the mobile device is on the same network as your PC.
It is best to run npm run eject in your app directory to get acces to other options, the full scale of the app to be customised. This changes your package.json file and the script commands. If you have ejected you will need to keep this in mind.( So far I have been unable to run this on a same-network mobile device via the Expo mobile app). This also creates two directories.
this can take some time.... five minutes or so.
.android
.ios
Both of these hold the config files for the native app were it to be put on either system
Windows :: Emulated Android Device

1. Install android studio, the app itself will install at first, then once you install the binary file, first time setup will allow you to choose what components are installed. You want the following:
   Android SDK
   Android SDK Platform
   Performance (Intel ® HAXM) (See here for AMD)
   Android Virtual Device
2. Install the Android SDK: Android Studio installs the latest Android SDK by default. Building a React Native app with native code, however, requires the Android 9 (Pie) SDK in particular. Additional Android SDKs can be installed through the SDK Manager in Android Studio. The SDK Manager can be accessed from the "Welcome to Android Studio" screen. Click on "Configure", then select "SDK Manager".
   Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. Look for and expand the Android 9 (Pie) entry, then make sure the following items are checked:
   Android SDK Platform 28
   Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image
   Next, select the "SDK Tools" tab and check the box next to "Show Package Details" here as well. Look for and expand the "Android SDK Build-Tools" entry, then make sure that 28.0.3 is selected.
   Finally, click "Apply" to download and install the Android SDK and related build tools.
3. The React Native tools require some environment variables to be set up in order to build apps with native code.
   Open the System pane under System and Security in the Windows Control Panel, then click on Change settings.... Open the Advanced tab and click on Environment Variables.... Click on New... to create a new ANDROID_HOME user variable that points to the path to your Android SDK:
   The SDK is installed, by default, at the following location:
   c:\Users\YOUR_USERNAME\AppData\Local\Android\Sdk
   You can find the actual location of the SDK in the Android Studio "Preferences" dialog, under Appearance & Behavior → System Settings → Android SDK.
   Open a new Command Prompt window to ensure the new environment variable is loaded before proceeding to the next step.
4. Open the System pane under System and Security in the Windows Control Panel, then click on Change settings.... Open the Advanced tab and click on Environment Variables.... Select the Path variable, then click Edit. Click New and add the path to platform-tools to the list.
   The default location for this folder is:
   c:\Users\YOUR_USERNAME\AppData\Local\Android\Sdk\platform-tools
   Creating a new application
   Use the React Native command line interface to generate a new React Native project called "AwesomeProject":
   react-native init AwesomeProject
   This is not necessary if you are integrating React Native into an existing application, if you "ejected" from Create React Native App, or if you're adding Android support to an existing React Native project (see Platform Specific Code). You can also use a third-party CLI to init your React Native app, such as Ignite CLI.
   [Optional] Using a specific version
   If you want to start a new project with a specifc React Native version, you can use the --version argument:
   react-native init AwesomeProject --version X.XX.X
   react-native init AwesomeProject --version react-native@next
   Preparing the Android device. You will need an Android device to run your React Native Android app. This can be either a physical Android device, or more commonly, you can use an Android Virtual Device which allows you to emulate an Android device on your computer. Either way, you will need to prepare the device to run Android apps for development.
   Using a physical device
   If you have a physical Android device, you can use it for development in place of an AVD by plugging it in to your computer using a USB cable and following the instructions here (https://facebook.github.io/react-native/docs/running-on-device)
   Using a virtual device
   If you use Android Studio to open ./AwesomeProject/android, you can see the list of available Android Virtual Devices (AVDs) by opening the "AVD Manager" from within Android Studio.
   If you have just installed Android Studio, you will likely need to create a new AVD. Select "Create Virtual Device...", then pick any Phone from the list and click "Next", then select the Pie API Level 28 image.
   If you don't have HAXM installed, click on "Install HAXM" or follow these instructions to set it up, then go back to the AVD Manager.
   Click "Next" then "Finish" to create your AVD. At this point you should be able to click on the green triangle button next to your AVD to launch it, then proceed to the next step.
   Running your React Native application
   Run react-native run-android inside your React Native project folder:
   cd AwesomeProject
   react-native run-android
   If everything is set up correctly, you should see your new app running in your Android emulator shortly.
   react-native run-android is just one way to run your app - you can also run it directly from within Android Studio or Nuclide.
   Modifying your app
   Now that you have successfully run the app, let's modify it.
   Open App.js in your text editor of choice and edit some lines.
   Press the R key twice or select Reload from the Developer Menu (Ctrl + M) to see your changes!
   The Basics :: setup and differing react-native syntax
   Just like in web react the index.js file kicks off the whole app and builds off of AppRegistry.registerComponent()
   this method call registerComponent() takes two arguments, the name of the app and a arrow function running our App.js file
   Markup Components Provided by React Native
   React Native gives you a core set of components to work with. Things such as a map will need to be imported from a third party library.
   <View/>, basically a div
   <Text/>, <p> or <span> replacments
   Components can be found here (this is the first article in the docs on components, work forward from here)
   https://facebook.github.io/react-native/docs/activityindicator
   Starting to work on the Project
   from here on in I'm using the un-ejected version of this bundler
   we can create and import components just like in react, there are a few differences with built in event listeners as with the markup. To run a method on a button click, the event is called onPress. We have made a button that accesses a prop called onGetLocation.
   [check the documentation to see the JavaScript Environment info, which details what JS features you can use in the Rnative app. Bear in mind that the app is in a JS environment which is initialized via ReactNative.]
   For this project the Navigator.geolocation object can be used to get the user's location via a method. The full app.js method looks like this at its most basic:
   getUserLocationHandlder = () => {
   console.log('\***\*Pressed the button!\*\***')
   navigator.geolocation.getCurrentPositoin(position => {
   console.log(position)
   }, err => console.log(err));
   }
   This early in the project we do not have the permissions to get the user's location. This is easily done when running this app on a phone. But when running on a simulated device there is more config required:
5. access the anroid folder > app > src > main > AndroidManifest.xml (this would have been made upon running the eject command)
6. see permissoin entries and copy this line into the manifest file (this can be found in the documentation)
   <uses permission android:name="android.permission.ACCESS_FINE_LOCATION" />
   Now we need a map, and thus , a third party library. The one used in this project is react-native-maps a creation of AirBnB for iOS and Anroid. It is a wrapper for both google and apple map SDKs and gives components that can be used in a ReactNative App. Make sure you read the install instructions!:
   https://github.com/react-native-community/react-native-maps/blob/1e71a21f39e7b88554852951f773c731c94680c9/docs/installation.md#ios
   first simply npm install react-native-maps
   now it needs to be linked to react-native, this is done like so: react-native link react-native-maps
   the manual way:
   !!!!you need google play services installed in your SDK manager for this!!!!
   go to the build.gradle file in : anrdroid/app/build.gradle
   in here go to the dependencies object
   add the line: compile project (':react-native-maps')
   then copy these two lines:
   include ':react-native-maps'
   project(':react-native-maps').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-maps/android')
   and go to android/settings.gradle and place them below whatever else is already there, beneath include ':app'
   next you will need a Google maps API key, chekc your credentials here, create and then copy a new key:
   https://console.developers.google.com/apis/credentials
   now you will need to add a new entry to the application element in the AndroidManifest.xml file that can be found in the adroid/app/src/main/ folder path in your app.
   in the <applicatoin> element paste these lines
   <meta-data
   android:name="com.google.android.geo.API_KEY"
   android:value="Your Google maps API Key Here"/>
   obviously replace the key from the credentials generator where the text demands ^^^^
   this is the point where you make sure you have google play services again!
   now copy this:
   import com.airbnb.android.react.maps.MapsPackage;
   into the file android/app/src/main/java/com/projectname/MainApplication.java
   where the other imports go, below all the other 3rd party packages
   NEXT
   add the line : new MapsPackage()
   into the getpackages() function, you will find inside of its return statement newMainReactPackage() add a comma and the above line there.
   Im moving forward form here on with the console commands (link), above, not the manual instructions. Again:
   this app is only being created to work with the Expo Mobile app
   make sure the android maps api is enabled in your credentials page
   check the manpage on git for the elements you want, such as setting an initial region:
   <MapView
   initialRegion={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.0922,
         longitudeDelta: 0.0421,
       }}
   />
   now we can set the location that the user is currently at
   things to know:
   you can use redux and state with react native, just as easy as a web react app
   Now we need to store user locations so they can be shared together! Firebase will be used for this example
   POST
   create a project, with a real time database, set to test project
   read and write set to true. Don't do this for a production app! AUTH!
   get the url from the data tab
   the fetch('firebaseurl') api is the modern replacement for XMLHTTPrequest. This returns a promise so it needs .then and .catch at the end of it, we can then log the response in the then block.
   it is a browser API, surfaced by react native
   this will be a POST request and require a body property that JSON.stringify() uses to create a JSON object out of the response:
   fetch('BACKEND GOES HERE NYAH NYAH YOU CANNOT STEAL MY DEETS', {
   method: 'POST',
   body: JSON.stringify({
   latitude: position.coords.latitude,
   longitude: position.coords.longitude
   })
   })
   .then(res => console.log(res))
   .catch(err => console.log(err));
   }, err => console.log(err));
   FETCH
   Now, the app posts locations to the FireBase realtime database. It can now fetch these items from it as well and display them as markers.
   again, using the fetch() API
   Once the request has been made in app.js and the response data converted into an array of objects using a for(in) loop and set to state and passed to the props of the UsersMap component
   To be displayed a <MapView.Marker/> elements can be made with the .map() method in the functional component: UsersMap and stored in a variable just like the userlocation from before.
