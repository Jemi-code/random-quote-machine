$(document).ready(() => {
    getQuote("");

    $("#new-quote").click(() => {
        getQuote("");
    });

    $("#age").click(() => {
        getQuote("age");
    });

    $("#equality").click(() => {
        getQuote("equality");
    });

    $("#happiness").click(() => {
        getQuote("happiness");
    });

    $("#learning").click(() => {
        getQuote("learning");
    });
 });

  
  const getQuote = (category) => {
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
        headers: { 'X-Api-Key': 'i4x/Aw2lcX7IJ2tqnBaSzw==z4x5p9I3onXLk05P'},
        contentType: 'application/json',
        success: function(result) {
            console.log(result);
            console.log(result[0].quote);

           $("#text").text(result[0].quote);
           $("#author").text(result[0].author);
           $("#category").text(result[0].category);
           setTweet(result[0].quote);

        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
            alert(jqXHR.responseText);
        }
    });

    randoBackground();
  }

  const ranColo = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    }

    const randoBackground = () => {
        $("body").css("background-color", ranColo());
    }

    const setTweet = (result) => {
        $("#tweet-quote").attr("href", `https://twitter.com/intent/tweet?text=${result}`);
    }