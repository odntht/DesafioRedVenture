
// $("slideEng").fadeOut("fast");
$("#slideEng").hide();
$("#slideCor").hide();
$("#slideRoda").hide();
$("#slideResumo").hide();

$("#iniciar").click(() => ocultaMain());

function ocultaMain() {
  $("#slidesMR").fadeOut("slow", exibirEngine());
};

function exibirEngine(){
  $("#slideEng").fadeIn(3000);
  $("#slideEng").show();
};

$(".list-group-item").click(function() {
  let irmaos = $("#"+this.id).parent().children("li");
  for (let i = 0; i < irmaos.length; i++) {
    // console.log(irmaos[i].id);
    $("#"+irmaos[i].id).removeClass("active");
  }
  $("#"+this.id).addClass("active");
console.log($(this).children("button"));

});
