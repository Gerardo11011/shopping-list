//Submit buttom
$("#boton").on('click', function(event){
  event.preventDefault();
  var input = $('#texto').val();
  if( $('#texto').val() ) {
      $(".container ul").append('<div class="agregado"> <li id = "id">' + input + ' <br><button class="check"> Check </button> <button class="borrar"> Delete </button></li></div>');
    }
  else {
      alert('Error: Field required');
    }
    $('#texto').val('');
});

//Check
$('#Lista').on('click', '.check', function(event){
  event.preventDefault();
  $(this).parent().toggleClass('li deschec')
});


//Delete
$('#Lista').on('click', '.borrar', function(event){
  event.preventDefault();
  $(this).closest('.agregado').remove();
});
