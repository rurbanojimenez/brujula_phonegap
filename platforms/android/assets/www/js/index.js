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
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        //tomaremos el muestreo de datos cada segundo (1000 ms)
        watchID = navigator.compass.watchHeading(onSuccess, onError, {frequency: 1000});

        //función onSuccess que aplica CSS a la imagen de la brújula del html
        function onSuccess(heading){
            //guardo los datos obtenidos del objeto CompassHeading
            var orientacion = 360-heading.magneticHeading;
            //aplico con jquery una rotación que depende de la variable orientacion
            $("#brujula").css('-webkit-transform','rotate(' + orientacion + 'deg)');
        }
        //funcion onError que tiene el objeto CompassError pasado como parámetro
        function onError(compassError) {
            //me limito a informar del error
            alert('Error: ' + compassError.code);
        }
    }
};
