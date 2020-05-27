/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
 var tokenUser;

 function AfegirAjax(){
    var numItems = $('.clase_pagina').length;
    var text = prompt("Nova tasca:");
    var nou_elem = $("<li><a href='#page"+(numItems+1)+"' class='ui-btn ui-btn-icon-right ui-icon-carat-r'>"+text+" <button>Esborra</button></a></li>");
    $("button", nou_elem).click(esborra);
    $("#llista").append(nou_elem);
    nou_elem = $("<div data-role='page' id='page"+(numItems+1)+"' class='clase_pagina'><div data-role='header'><a href='#' data-icon='back'data-rel='back' title='Go back'>Back</a><h1>Page"+(numItems+1)+"</h1></div><div class='ui-content'>"+
        "<p>"+text+"</p><ul data-role='listview' id='listaBandas"+(numItems+1)+"'></ul></div><!-- end page "+(numItems+1)+" content --><div data-role='footer' data-position='fixed'><h1>Page"+(numItems+1)+"</h1></div><!-- /footer --></div><!-- /page"+(numItems+1)+" -->");
    $('#body').append(nou_elem);
    //text="";
    $.ajax({
      type: 'POST',
      url: "https://apiams2root.herokuapp.com/users/login",
      data: JSON.stringify({
        "email":"daxter@app.com",
        "password":"12345678"
    }),
      dataType: "json",
      contentType: "application/json",
      success : function(response){
        alert("funciona bien");
        tokenUser=response.token;
        console.log( "La solicitud se ha completado correctamente."+ tokenUser );
    },
    error: function(error){
        alert("No funciona");
        console.log( "Error" );
    }
});

    /*$.post("https://apiams2root.herokuapp.com/users/login",
    {
        email: "daxter@app.com",
        password: "12345678"
    },
    function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });
    */

    /*$.ajax({
      method: "POST",
      url: "https://apiams2root.herokuapp.com/users/login?query="+text,
  dataType: "json",   // necessitem això pq ens retorni un objecte JSON
}).done(function (msg) {
  for(var item in msg.artists) {
    text = text+", "+msg.artists[item].name;
    console.log(msg.artists[item].name);
    nou_elem = $("<li><a href='#page2' class='ui-btn ui-btn-icon-right ui-icon-carat-r'>"+msg.artists[item].name+" <button>Detalls</button></a></li>");
    $("button", nou_elem).click(esborra);
    $("#listaBandas"+(numItems+1)).append(nou_elem);
    //console.log(text);
    // aquí caldría fer mes coses, of course...
    // ...
};
  //location.replace("http://localhost:8000/index.html#page"+(numItems+1));
}).fail(function () {
    alert("ERROR");
});
*/
}

function afegeixTasca(){
    //alert("afegint Tasca");
    var text = prompt("Nova tasca:");
    var nou_elem = $("<li><a href='' class='ui-btn ui-btn-icon-right ui-icon-carat-r'>"+text+" <button>Esborra</button></a></li>");
    $("button", nou_elem).click(esborra);
    $("#llista").append(nou_elem);
}

function esborra(event){
    event.target.closest("li").remove();
    
}
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
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

app.initialize();