

// Ocultando os slides exceto o Inicial
$("#slideEng").hide();
$("#slideCor").hide();
$("#slideRoda").hide();
$("#slideResumo").hide();


// Oculta slide Inicial e chama o slideMR
$("#iniciar").click(() => ocultaMain());

//Oculta o incial
function ocultaMain() {
  $("#slidesMR").fadeOut("slow", exibirEngine());
};

//Muda para o slideEng
function exibirEngine(){
  $("#slideEng").fadeIn(3000);
  $("#slideEng").show();
};

$("#exibirCor").click(() => ocultaEngine());

function ocultaEngine() {
    $("#slideEng").fadeOut("slow", exibirCor());
}

function exibirCor(){
  $("#slideCor").fadeIn(3000);
  $("#slideCor").show();
}

function trocaImagemEng(id){
  switch (id) {
    case "Eng75":
      $('#slideEng div div img').attr('src',"arquivos/images/1.png");
      $("#slideEng footer div:nth-child(1) span").html("$63.000");
      $("#slideEng footer div:nth-child(3)").html("75 <span>P</span>");
    break;
    case "Eng100":
    $('#slideEng div div img').attr('src',"arquivos/images/2.png");
    $("#slideEng footer div:nth-child(1) span").html("$68.500");
    $("#slideEng footer div:nth-child(3)").html("100 <span>S</span>");

    break;
    case "Eng125":
    $('#slideEng div div img').attr('src',"arquivos/images/3.png");
    $("#slideEng footer div:nth-child(1) span").html("$73.000");
    $("#slideEng footer div:nth-child(3)").html("125 <span>B</span>");
    break;
    default:
  }
};

//Define como active a Engine Escolhida
$(".list-group-item").click(function() {
  let irmaos = $("#"+this.id).parent().children("li");
  for (let i = 0; i < irmaos.length; i++)
  {
    $("#"+irmaos[i].id).removeClass("active");
  }
  $("#"+this.id).addClass("active");
  trocaImagemEng(this.id);
});
