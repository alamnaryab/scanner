$(function(){

    $('#btn').click(function(){ 
        var a = cordova.plugins.scan.scanDoc(successCallback, errorCallback, {sourceType : 1, 
            fileName : "myfilename", 
            quality : 1.0, returnBase64 : false}); 
         
    });
});
// sourceType will by default take value 1 if no value is set | 0 for gallery | 1 for camera. 
// fileName will take default value "image" if no value set. Supported only on 4.x.x plugin version
// quality will take default value 1.0 (highest). Lowest value is 5.0. Any value in between will be accepted
// returnBase64 will take default boolean value false, meaning image URL is returned. If true base64 is returned
function successCallback(imageData) {
    alert(imageData);
    console.log(imageData);
    var image = document.getElementById('img');
    //image.src = imageData; // Image URL rendering. 
//image.src = imageData + '?' + Date.now(); // For iOS, use this to solve issue 10 if unique fileName is not set.
    image.src = "data:image/jpeg;base64," + imageData+ '?' + Date.now(); // Base64 rendering
}

function errorCallback(message) {
    alert('Failed because: ' + message);
}

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');

        
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
