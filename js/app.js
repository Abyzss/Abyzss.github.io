//https://pokeapi.co/api/v2/pokemon/{:id}//

$(function() {
  var currentPokemonId =1 ;
  //* Escribe tu código aquí *//
  $('#boton-buscador').click(function() {
    var buscador = $('#buscador').val();
    $.getJSON('https://pokeapi.co/api/v2/pokemon/name'.replace("name",buscador) ,function(data) {
      var pokemon= data.name;
      var imagen=data.sprites;
      var spritepokemon= imagen.front_default;
      if (currentPokemonId !== data.id){
        currentPokemonId = data.id
      }

      $('#nombre-pokemon').text(pokemon);
      $('#pokemon-image').attr('src',spritepokemon);

    });
  $('#siguiente-pokemon').click(function() {
    newpokemonid= currentPokemonId + 1;
    $.getJSON('https://pokeapi.co/api/v2/pokemon/name'.replace("name",newpokemonid),function(data) {
      var pokemon=data.name;
      var imagen=data.sprites;
      var spritepokemon=imagen.front_default;
      if (currentPokemonId !== data.id) {
        currentPokemonId = data.id
      }
      $('#nombre-pokemon').text(pokemon);
      $('#pokemon-image').attr('src',spritepokemon);
    });
    $('#anterior-pokemon').click(function() {
      newpokemonid=currentPokemonId - 1;
      $.getJSON('https://pokeapi.co/api/v2/pokemon/name'.replace("name",newpokemonid),function(data) {
        var pokemon=data.name;
        var imagen=data.sprites;
        var spritepokemon=imagen.front_default;
        if (currentPokemonId !== data.id) {
          currentPokemonId = data.id
        }
        $('#nombre-pokemon').text(pokemon);
        $('#pokemon-image').attr('src',spritepokemon);
      });

    });
  });









  });

  /* Hasta aquí :) */
});
