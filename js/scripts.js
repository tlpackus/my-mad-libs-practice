$(document).ready(function() {
  $("#formOne").submit(function() {
    const person1Input = $("input#person1").val();
    const person2Input = $("input#person2").val();
    const animalInput= $("input#animal").val();
    const exclamationInput = $("input#exclamation").val();
    const verbInput = $("input#verb").val();
    const nounInput = $("input#noun").val();

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".animal").text(animalInput);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);

    $("#story").show();

    event.preventDefault();
  });
});

// const = words = [$("input#person1").val(),$("input#person2").val()("input#person2").val()$("input#animal").val()$("input#exclamation").val()$("input#verb").val()$("input#noun").val()]
// place = ".place"
//words.forEach(function(element) {
//place += "1"
//$(element.text(place);)
//})