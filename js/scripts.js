$(document).ready(function() {
  $("#formOne").submit(function() {

    const inputs = [$("input#person1").val(),$("input#person2").val(),$("input#animal").val(),$("input#exclamation").val(),$("input#verb").val(),$("input#noun").val()]

    const classes = [".person1", ".person2", ".animal", ".exclamation", ".verb", ".noun"]

    let iterator = 0;
    inputs.forEach(function(element) {
      $(classes[iterator]).text(element);
      iterator += 1;
    });
    // const person1Input = $("input#person1").val();
    // const person2Input = $("input#person2").val();
    // const animalInput= $("input#animal").val();
    // const exclamationInput = $("input#exclamation").val();
    // const verbInput = $("input#verb").val();
    // const nounInput = $("input#noun").val();

    // $(".person1").text(person1Input);
    // $(".person2").text(person2Input);
    // $(".animal").text(animalInput);
    // $(".exclamation").text(exclamationInput);
    // $(".verb").text(verbInput);
    // $(".noun").text(nounInput);

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