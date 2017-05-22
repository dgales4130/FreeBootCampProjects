// Load when page is loaded
// Make ajax request

$(document).ready(function(){
  function refreshQuote (){

    $.ajax({
            url: 'http://quotes.stormconsultancy.co.uk/random.json',
            dataType: 'json',
            success: function (response) {
                console.log('success', response);
                quote = response.quote;
                $('#quote').text('"'+quote+'"');
                if (response.author) {
                    $('#author').text('- ' + response.author);
                } else {
                    $('#author').text('- unkown');
                }
            }
          })
};
refreshQuote();
$('.get-quote').on('click',function(event
  event.preventDefault();
  refreshQuote();
});
});
