// JavaScript Document

var score = 0;


window.onload = function() {
	// load cookies
	
	// pick a random meme to start
	changeMeme();
};

function changeMeme(){
	document.getElementById("a").removeEventListener("click", rightAnswer);
	document.getElementById("a").removeEventListener("click", wrongAnswer);
	document.getElementById("b").removeEventListener("click", rightAnswer);
	document.getElementById("b").removeEventListener("click", wrongAnswer);
	document.getElementById("c").removeEventListener("click", rightAnswer);
	document.getElementById("c").removeEventListener("click", wrongAnswer);
	document.getElementById("d").removeEventListener("click", rightAnswer);
	document.getElementById("d").removeEventListener("click", wrongAnswer);
	
	
	var rand = Math.ceil(Math.random() * 30);
	//alert("choosing meme #" + rand);
	switch(rand) {
		case 1: //do you know da wae
			document.body.style.backgroundImage = "url('images/do_you_know_da_wae.jpg')";
			document.getElementById("a").innerHTML = "Do u know da wae?";
			document.getElementById("a").addEventListener("click", rightAnswer);
			document.getElementById("b").innerHTML = "Tide pods r delicious";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "Condesending Willy Wonka";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "Pepe the Frog";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
		case 2: //Disaster Girl
			document.body.style.backgroundImage = "url('images/disaster_girl.jpg')";
			document.getElementById("a").innerHTML = "Disaster Girl";
			document.getElementById("a").addEventListener("click", rightAnswer);
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "vader and buddy";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "Condesending Willy Wonka";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "the evil of christmas";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
		case 3: //Your Next
			document.body.style.backgroundImage = "url('images/yourenext.jpg')";
			document.getElementById("a").innerHTML = "the poker";
			document.getElementById("a").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "you're next";
			document.getElementById("b").addEventListener("click", rightAnswer);
			document.getElementById("c").innerHTML = "bowl cut billy";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "Pepe the Frog";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
		case 4://You Don't Say
			document.body.style.backgroundImage = "url('images/youdontsay.png')";
			document.getElementById("a").innerHTML = "Condescending Willy Wonka";
			document.getElementById("a").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "trump is going to run for president?";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "bowl cut billy";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "you don't say";
			document.getElementById("d").addEventListener("click", rightAnswer);
			break;
		case 5: //Yo Dawg
			document.body.style.backgroundImage = "url('images/yo_dawg.jpg')";
			document.getElementById("a").innerHTML = "Condescending Willy Wonka";
			document.getElementById("a").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "trump is going to run for president?";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "yo dawg";
			document.getElementById("c").addEventListener("click", rightAnswer);
			document.getElementById("d").innerHTML = "i am your father";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
		case 6: // Ben Swolo
			document.body.style.backgroundImage = "url('images/ben_swolo.jpg')";
			document.getElementById("a").innerHTML = "Ben Swolo";
			document.getElementById("a").addEventListener("click", rightAnswer);
			document.getElementById("b").innerHTML = "Tide pods r delicious";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "Condesending Willy Wonka";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "Pepe the Frog";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
		case 7: //Condesending Willy Wonka
			document.body.style.backgroundImage = "images/condesending_willy_wonka.jpg')";
			document.getElementById("a").innerHTML = "Condesending Willy Wonka";
			document.getElementById("a").addEventListener("click", rightAnswer);
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "vader and buddy";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "you don't say";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "the evil of christmas";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
		case 8: //Confused Mr. Krabbs
			document.body.style.backgroundImage = "url('images/confused_Mr.krabbs.jpg')";
			document.getElementById("a").innerHTML = "Confused Mr. Krabbs";
			document.getElementById("a").addEventListener("click", rightAnswer);
			document.getElementById("b").innerHTML = "you're next";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "bowl cut billy";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "Pepe the Frog";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
		case 9: //Evil Kermit
			document.body.style.backgroundImage = "url('images/evil-kermit.png')";
			document.getElementById("a").innerHTML = "Evil Kermit";
			document.getElementById("a").addEventListener("click", rightAnswer);
			document.getElementById("b").innerHTML = "trump is going to run for president?";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "bowl cut billy";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "you don't say";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
		case 10: //Grumpy Cat
			document.body.style.backgroundImage = "url('images/grumpy_cat.jpg')";
			document.getElementById("a").innerHTML = "Condescending Willy Wonka";
			document.getElementById("a").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "trump is going to run for president?";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "Grumpy Cat";
			document.getElementById("c").addEventListener("click", rightAnswer);
			document.getElementById("d").innerHTML = "i am your father";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
		case 11: //Epic Sax Guy
			document.body.style.backgroundImage = "url('images/epicsaxguy.jpg')";
			document.getElementById("a").innerHTML = "Condescending Willy Wonka";
			document.getElementById("a").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "epic sax guy";
			document.getElementById("b").addEventListener("click", rightAnswer);
			document.getElementById("c").innerHTML = "joseh decreux";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "stuck in the 80's";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
		case 12: //Forest Gump
			document.body.style.backgroundImage = "url('images/forestgump.jpeg')";
			document.getElementById("a").innerHTML = "what???";
			document.getElementById("a").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "christmas hangover";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "ermahgerd";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "forest gump";
			document.getElementById("d").addEventListener("click", rightAnswer);
			break;
		case 13: //Expanding Brain
			document.body.style.backgroundImage = "url('images/expanding_brain.jpg')";
			document.getElementById("a").innerHTML = "flex seal";
			document.getElementById("a").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "evolution";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "radioactive";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "expanding brain";
			document.getElementById("d").addEventListener("click", rightAnswer);
			break;
		case 14: //Phil Swift
			document.body.style.backgroundImage = "url('images/philswift.jpg')";
			document.getElementById("a").innerHTML = "phil swift";
			document.getElementById("a").addEventListener("click", rightAnswer);
			document.getElementById("b").innerHTML = "seal the deal";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "Grumpy Cat";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "he protec";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
		case 15: //Crack Kid
			document.body.style.backgroundImage = "url('images/crackkid.jpg')";
			document.getElementById("a").innerHTML = "fat wise guy";
			document.getElementById("a").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "knowllllllledge";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "Crack Kid";
			document.getElementById("c").addEventListener("click", rightAnswer);
			document.getElementById("d").innerHTML = "fry sauinty eyes";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
		case 16: //Good Guy Greg
			document.body.style.backgroundImage = "url('images/good_guy_greg.jpg')";
			document.getElementById("a").innerHTML = "Condescending Willy Wonka";
			document.getElementById("a").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "Good Guy Greg";
			document.getElementById("b").addEventListener("click", rightAnswer);
			document.getElementById("c").innerHTML = "Grumpy Cat";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "i am your father";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
		case 17: //Hipster Ariel
			document.body.style.backgroundImage = "url('images/hipster_ariel.jpeg')";
			document.getElementById("a").innerHTML = "Condescending Willy Wonka";
			document.getElementById("a").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "Hipster Ariel";
			document.getElementById("b").addEventListener("click", rightAnswer);
			document.getElementById("c").innerHTML = "joseh decreux";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "stuck in the 80's";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
		case 18: //Joseph D
			document.body.style.backgroundImage = "url('images/joseph_ducreux.png')";
			document.getElementById("a").innerHTML = "what???";
			document.getElementById("a").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "christmas hangover";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "Joseph D";
			document.getElementById("c").addEventListener("click", rightAnswer);
			document.getElementById("d").innerHTML = "forest gump";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
		case 19: //Logan Paul
			document.body.style.backgroundImage = "url('images/loganpaul.jpg')";
			document.getElementById("a").innerHTML = "flex seal";
			document.getElementById("a").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "evolution";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "radioactive";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "Logan Paul";
			document.getElementById("d").addEventListener("click", rightAnswer);
			break;
		case 20: //Mocking Spongebob
			document.body.style.backgroundImage = "url('images/mocking_spongebob.jpg')";
			document.getElementById("a").innerHTML = "Mocking Spongebob";
			document.getElementById("a").addEventListener("click", rightAnswer);
			document.getElementById("b").innerHTML = "seal the deal";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "Grumpy Cat";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "he protec";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
			case 21: //Asian Grading Scale
			document.body.style.backgroundImage = "url('images/asiangradingscale.jpg')";
			document.getElementById("a").innerHTML = "hola";
			document.getElementById("a").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "Jackie Chan";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "Bad Grades";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "Asian Grading Scale";
			document.getElementById("d").addEventListener("click", rightAnswer);
			break;
			case 22: //Be Like Bill
			document.body.style.backgroundImage = "url('images/be_like_bill.png')";
			document.getElementById("a").innerHTML = "Billy";
			document.getElementById("a").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "Trolled";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "Be like Bill";
			document.getElementById("c").addEventListener("click", rightAnswer);
			document.getElementById("d").innerHTML = "CoolManDood";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
			case 23: //Dolan
			document.body.style.backgroundImage = "url('images/dolan.png')";
			document.getElementById("a").innerHTML = "beaky";
			document.getElementById("a").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "mr. clucks";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "donald duck";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "Dolan";
			document.getElementById("d").addEventListener("click", rightAnswer);
			break;
			case 24: //Ken Bone
			document.body.style.backgroundImage = "url('images/ken_bone.jpg')";
			document.getElementById("a").innerHTML = "ken bone";
			document.getElementById("a").addEventListener("click", rightAnswer);
			document.getElementById("b").innerHTML = "fat guy in a little coat";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "awkward interview";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "bad luck brian";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
			case 25: //Pepe the Frog
			document.body.style.backgroundImage = "url('images/pepe_the_frog.jpg')";
			document.getElementById("a").innerHTML = "kermit";
			document.getElementById("a").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "pepe the frog";
			document.getElementById("b").addEventListener("click", rightAnswer);
			document.getElementById("c").innerHTML = "greenman";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "creepy stalker";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
			case 26: //Me Gusta
			document.body.style.backgroundImage = "url('images/me_gusta.jpg')";
			document.getElementById("a").innerHTML = "Potato Head";
			document.getElementById("a").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "Baldy";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "Bald Head Bill";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "Me Gusta";
			document.getElementById("d").addEventListener("click", rightAnswer);
			break;
			case 27: //Bern it Bernie
			document.body.style.backgroundImage = "url('images/berniesanders.jpg')";
			document.getElementById("a").innerHTML = "Bern it Bernie";
			document.getElementById("a").addEventListener("click", rightAnswer);
			document.getElementById("b").innerHTML = "Barnie Sanders";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "feel the bern";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "Me Gusta";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
			case 28: //Billy Mays
			document.body.style.backgroundImage = "url('images/billy_mays.jpg')";
			document.getElementById("a").innerHTML = "#videogames";
			document.getElementById("a").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "Billy Mays";
			document.getElementById("b").addEventListener("click", rightAnswer);
			document.getElementById("c").innerHTML = "baking soda";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "Jimmy Vranic";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
			case 29: //Philosoraptor
			document.body.style.backgroundImage = "url('images/philosoraptor.jpg')";
			document.getElementById("a").innerHTML = "philosoraptor";
			document.getElementById("a").addEventListener("click", rightAnswer);
			document.getElementById("b").innerHTML = "trex";
			document.getElementById("b").addEventListener("click", wrongAnswer);
			document.getElementById("c").innerHTML = "jurrasic park";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "training raptors";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
			case 30: //Prison Mike
			document.body.style.backgroundImage = "url('images/prisonmike.png')";
			document.getElementById("a").innerHTML = "In the clink";
			document.getElementById("a").addEventListener("click", wrongAnswer);
			document.getElementById("b").innerHTML = "Prison Mike";
			document.getElementById("b").addEventListener("click", rightAnswer);
			document.getElementById("c").innerHTML = "the office";
			document.getElementById("c").addEventListener("click", wrongAnswer);
			document.getElementById("d").innerHTML = "meetings with michael";
			document.getElementById("d").addEventListener("click", wrongAnswer);
			break;
	} // end switch
} // end changeMeme()


function wrongAnswer(){
	 alert("You are so trash! I can't believe you could get that wrong. You are an absolute donkey");
	 score-=2;
	 changeMeme();	 
}

function rightAnswer(){
	changeMeme(); 
	alert ("Aye, that's pretty smexy. Your name is now the meme king");
	score++;
	document.getElementById("score").value=score;	
}








	







