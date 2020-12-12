
let nameValue = document.getElementsByClassName("block");
for (let i = 0; i < nameValue.length; i++) {
    nameValue[i].addEventListener("click", setName);
function setName(event) {
    $(".header_text").text("Введи имя питомца");
    $("input").css("display", "block");
    $(".ok").css("display", "block");
    $(".block:hover").css("transform", "scale(1.0)");
    if(this.classList.contains("p")){  
        $(".r").css("display", "none");
        $(".s").css("display", "none");
    } else 
    if(this.classList.contains("r")){
        $(".p").css("display", "none");
        $(".s").css("display", "none");
    } else 
    if(this.classList.contains("s")){
        $(".p").css("display", "none");
        $(".r").css("display", "none");
    }
    nameValue[i].removeEventListener("click", setName);
}
}

$(".block").mouseover(function(event) {    
    if (event.target){
        $(".block").css("opacity", "0.5");
        this.style.opacity = "1";
    }
})
$(".block").mouseleave(function(event) {    
    if (event.target){
        $(".block").css("opacity", "1");
        this.style.opacity = "1";
    }
})

let nameArr = [];
  $("input").keyup(function() {    
      nameArr.push($("input").val());    
  })
  function checkName(namePet) {
		if(
		 		typeof namePet == 'undefined' 
				|| namePet === null
				|| namePet == ''
			) {
              $("input").css("border-image", "none");
              $("input").css("border", "20px solid red");
              return false;
             }
        else return true}
        $('#form').keyup(function(e) {
            if(e.keyCode === 13) {
                df();
            }
          });
  $(".ok").click (function() {
    df();
  })	 
      
    function df(){
    let namePet = nameArr[nameArr.length - 1];
    checkName(namePet);
    let timer = setInterval( progressDemo, 2000 );

if (checkName(namePet) == true){
    $(".header_text").text("Следи за характеристиками своего питомца, не дай ему заскучать!");
    $("input").css("display", "none");
    $(".ok").css("display", "none");
    $(".all_in").css("align-items", "flex-start");
    $(".namePet").text(namePet);
    $(".health_block").css("display", "block");
    } 
    ////////////////////////////////////////////////////////////////////

$(".sleep").click(function () {
    let energy = $( '#progress_bar_first' ).val();
    energy++;
    $( '#progress_bar_first' ).val(energy);
    $( '#energy' ).text(energy);

    let satiety = $( '#progress_bar_third' ).val();
    satiety--;
    $( '#progress_bar_third' ).val(satiety);
    $( '#satiety' ).text(satiety);
});

$(".play").click(function () {
    let energy = $( '#progress_bar_first' ).val();
    energy--;
    $( '#progress_bar_first' ).val(energy);
    $( '#energy' ).text(energy);

    let satiety = $( '#progress_bar_third' ).val();
    satiety--;
    $( '#progress_bar_third' ).val(satiety);
    $( '#satiety' ).text(satiety);

    let hygiene = $( '#progress_bar_second' ).val();
    hygiene--;
    $( '#progress_bar_second' ).val(hygiene);
    $( '#hygiene' ).text(hygiene);

    let mood = $( '#progress_bar_fourth' ).val();
    mood++;
    $( '#progress_bar_fourth' ).val(mood);
    $( '#mood' ).text(mood);
});

$(".feed").click(function () {
    let energy = $( '#progress_bar_first' ).val();
    energy++;
    $( '#progress_bar_first' ).val(energy);
    $( '#energy' ).text(energy);

    let satiety = $( '#progress_bar_third' ).val();
    satiety++;
    $( '#progress_bar_third' ).val(satiety);
    $( '#satiety' ).text(satiety);

    let hygiene = $( '#progress_bar_second' ).val();
    hygiene--;
    $( '#progress_bar_second' ).val(hygiene);
    $( '#hygiene' ).text(hygiene);

    let health = $( '#progress_bar_fifth' ).val();
    health++;
    $( '#progress_bar_fifth' ).val(health);
    $( '#health' ).text(health);
});
$(".bathe").click(function () {
    let hygiene = $( '#progress_bar_second' ).val();
    hygiene++;
    $( '#progress_bar_second' ).val(hygiene);
    $( '#hygiene' ).text(hygiene);

    let mood = $( '#progress_bar_fourth' ).val();
        mood--;
        $( '#progress_bar_fourth' ).val(mood);
        $( '#mood' ).text(mood);
}); 
    }
  
    function progressDemo() {  
       
    let counter_first = $( '#progress_bar_first' ).val();
    counter_first--;     
    $( '#progress_bar_first' ).val(counter_first);
    $( '#energy' ).text(counter_first);
    if (counter_first <= 40) {
        $( '.energy' ).css("color", "yellow");
    };
    if(counter_first <= 20){
        $( '.energy' ).css("color", "red");
    }
    if(counter_first <= 1){
        let counter_fifth = $( '#progress_bar_fifth' ).val();     
    counter_fifth--;
    $( '#progress_bar_fifth' ).val(counter_fifth);
    $( '#health' ).text(counter_fifth);
    }

    let counter_second = $( '#progress_bar_second' ).val();     
    counter_second--;
    $( '#progress_bar_second' ).val(counter_second);
    $( '#hygiene' ).text(counter_second);
    if (counter_second <= 40) {
        $( '.hygiene' ).css("color", "yellow");
    }
    if(counter_second <= 20){
        $( '.hygiene' ).css("color", "red");
    }
    if(counter_second <= 1){
        let counter_fifth = $( '#progress_bar_fifth' ).val();     
    counter_fifth--;
    $( '#progress_bar_fifth' ).val(counter_fifth);
    $( '#health' ).text(counter_fifth);
    }

    let counter_third = $( '#progress_bar_third' ).val();     
    counter_third--;
    $( '#progress_bar_third' ).val(counter_third);
    $( '#satiety' ).text(counter_third);
    if (counter_third <= 40) {
        $( '.satiety' ).css("color", "yellow");
    }
    if(counter_third <= 20){
        $( '.satiety' ).css("color", "red");
    }
    if(counter_third <= 1){
        let counter_fifth = $( '#progress_bar_fifth' ).val();     
    counter_fifth--;
    $( '#progress_bar_fifth' ).val(counter_fifth);
    $( '#health' ).text(counter_fifth);
    }

    let counter_fourth = $( '#progress_bar_fourth' ).val();     
    counter_fourth--;
    $( '#progress_bar_fourth' ).val(counter_fourth);
    $( '#mood' ).text(counter_fourth);
    if (counter_fourth <= 40) {
        $( '.mood' ).css("color", "yellow");
    }
    if(counter_fourth <= 20){
        $( '.mood' ).css("color", "red");
    }
    if(counter_fourth <= 1){
        let counter_fifth = $( '#progress_bar_fifth' ).val();     
    counter_fifth--;
    $( '#progress_bar_fifth' ).val(counter_fifth);
    $( '#health' ).text(counter_fifth);
    }

    let counter_fifth = $( '#progress_bar_fifth' ).val();     
    counter_fifth--;
    $( '#progress_bar_fifth' ).val(counter_fifth);
    $( '#health' ).text(counter_fifth);
    if (counter_fifth <= 40) {
        $( '.health' ).css("color", "yellow");
    }
    if(counter_fifth <= 20){
        $( '.health' ).css("color", "red");
    }
    if(counter_fifth <= 0){
        $( '.all_in' ).css("display", "none");
        $("body").css("display", "flex");
        $("body").css("flex-direction", "column");
        $("body").css("align-items", "center");
        $("body").css("justify-content", "center");
        $("body").css("height", "100vh");
        $("body").css("font-size", "5rem");
        $("body").css("color", "red");
        $("body").css("font-weight", "900");
        $("body").text("GAME OVER");
        var newElems = $("<button class='btn_again'>Попробовать ещё раз</button>");
        $('body').append(newElems);
        $(".btn_again").click(function() {
            location.reload();
        })
    }
   }
  
    

    