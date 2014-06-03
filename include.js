<script>

var arraySize = 16;

var firstword = new Array(arraySize);
var secondword = new Array(arraySize); 

firstword[0]="Monkey";
firstword[1]="Swine";
firstword[2]="Swollen"; 
firstword[3]="German";
firstword[4]="Nile";
firstword[5]="Amoebic";
firstword[6]="Avian";
firstword[7]="Alley";
firstword[8]="Cystic";
firstword[9]="Eighty-three-day";
firstword[10]="24-hour";
firstword[11]="Jungle";
firstword[12]="Wombat";
firstword[13]="Bovine";
firstword[14]="Spotted";
firstword[15]="Yellow";

secondword[0]="pox";
secondword[1]="flu";
secondword[2]="rhinosinusitis";
secondword[3]="encephalitis";
secondword[4]="typhus";
secondword[5]="cough";
secondword[6]="warts";
secondword[7]="fungus";
secondword[8]="fever";
secondword[9]="gingivitis";
secondword[10]="mononucleosis";
secondword[11]="eyeworm";
secondword[12]="norovirus";
secondword[13]="measles";
secondword[14]="dysentery";
secondword[15]="ear";

function diseaseSpinner()
{
	var loopTimer = 10
	while (loopTimer<4000)
	{
		var delay1 = loopTimer+parseInt(Math.random()*100);
		myInterval1=setTimeout(function(){newDiseaseWord1()},delay1);
		var delay2 = (loopTimer/0.8)+parseInt(Math.random()*100); 
		myInterval2=setTimeout(function(){newDiseaseWord2()},delay2);
		loopTimer = loopTimer * 1.2
	}
	clearTimeout(myInterval1);
	clearTimeout(myInterval2);	
}

function newDiseaseWord1() { 
  document.getElementById("diseaseWord1").innerHTML = firstword[parseInt(Math.random() * arraySize)]; 
}
function newDiseaseWord2() { 
  document.getElementById("diseaseWord2").innerHTML = secondword[parseInt(Math.random() * arraySize)]; 
}

</script>
