/*
  __________________________________________________
||       LABORATOIRE LUDAKIS MULTIMEDIA             ||
||                                                  ||
  -------------------------------------------------- 
*/


function seT(la_div, propriete, valeur, propriete2, valeur2, forme){ // Cette fonction nous fait gagner du temps en nous permettant de cibler une div sans utiliser "getElementById()" et de modifier la valeur des propriete. 
	
		var cible = document.getElementById(la_div);
		
		if(forme == 'carre'){
			cible.style.width = valeur;
			cible.style.height = valeur;
			}
		
		if(propriete == 'width'){
		cible.style.width = valeur;
		}
		if(propriete2 == 'width'){
		cible.style.width = valeur2;
		}
		
		if(propriete == 'backgroundColor'){
		cible.style.backgroundColor = valeur;
		}
		if(propriete2 == 'backgroundColor'){
		cible.style.backgroundColor = valeur2;
		}
		
		if(propriete == 'height'){
		cible.style.height = valeur;
		}
		if(propriete2 == 'height'){
		cible.style.height = valeur2;
		}
		
		if(propriete == 'fontSize'){
		cible.style.fontSize = valeur;
		}
		if(propriete2 == 'fontSize'){
		cible.style.fontSize = valeur2;
		}
		
		if(propriete == 'fontFamily'){
		cible.style.fontFamily = valeur;
		}
		if(propriete2 == 'fontFamily'){
		cible.style.fontFamily = valeur2;
		}
		
		if(propriete == 'fontWeight'){
		cible.style.fontWeight = valeur;
		}
		if(propriete2 == 'fontWeight'){
		cible.style.fontWeight = valeur2;
		}
		
		if(propriete == 'fontStyle'){
		cible.style.fontStyle = valeur;
		}
		if(propriete2 == 'fontStyle'){
		cible.style.fontStyle = valeur2;
		}
		
		if(propriete == 'color'){
		cible.style.color = valeur;
		}
		if(propriete2 == 'color'){
		cible.style.color = valeur2;
		}
		
		if(propriete == 'textAlign'){
		cible.style.textAlign = valeur;
		}
		if(propriete2 == 'textAlign'){
		cible.style.textAlign = valeur2;
		}
		
		if(propriete == 'margin'){
		cible.style.margin = valeur;
		}
		if(propriete2 == 'margin'){
		cible.style.margin = valeur2;
		}
		
		if(propriete == 'marginTop'){
		cible.style.marginTop = valeur;
		}
		if(propriete2 == 'marginTop'){
		cible.style.marginTop = valeur2;
		}
		
		if(propriete == 'marginBottom'){
		cible.style.marginBottom = valeur;
		}
		if(propriete2 == 'marginBottom'){
		cible.style.marginBottom = valeur2;
		}
		
		if(propriete == 'marginLeft'){
		cible.style.marginLeft = valeur;
		}
		if(propriete2 == 'marginLeft'){
		cible.style.marginLeft = valeur2;
		}
		
		if(propriete == 'marginRight'){
		cible.style.marginRight = valeur;
		}
		if(propriete2 == 'marginRight'){
		cible.style.marginRight = valeur2;
		}
		
		if(propriete == 'padding'){
		cible.style.padding = valeur;
		}
		if(propriete2 == 'padding'){
		cible.style.padding = valeur2;
		}
		
		if(propriete == 'paddingBottom'){
		cible.style.paddingBottom = valeur;
		}
		if(propriete2 == 'paddingBottom'){
		cible.style.paddingBottom = valeur2;
		}
		
		if(propriete == 'paddingLeft'){
		cible.style.paddingLeft = valeur;
		}
		
		if(propriete == 'paddingRight'){
		cible.style.paddingRight = valeur;
		}
		
		if(propriete == 'paddingTop'){
		cible.style.paddingTop = valeur;
		}
		if(propriete2 == 'paddingTop'){
		cible.style.paddingTop = valeur2;
		}
		
		if(propriete == 'backgroundColor'){
		cible.style.backgroundColor = valeur;
		}
		
		if(propriete == 'backgroundRepeat'){
		cible.style.backgroundRepeat = valeur;
		}
		
		if(propriete == 'backgroundImage'){
			if(valeur=='none'){
				cible.style.backgroundImage = 'none';
				}else{
			    cible.style.backgroundImage = 'url('+valeur+')';
				}
		}
		if(propriete2 == 'backgroundImage'){
		if(valeur2=='none'){
				cible.style.backgroundImage = 'none';
				}else{
			    cible.style.backgroundImage = 'url('+valeur2+')';
				}
		}
		
		if(propriete == 'backgroundSize'){
		cible.style.backgroundSize = valeur;
		}
		if(propriete2 == 'backgroundSize'){
		cible.style.backgroundSize = valeur2;
		}
		
		if(propriete == 'backgroundRepeat'){
		cible.style.backgroundRepeat = valeur;
		}
		if(propriete2 == 'backgroundRepeat'){
		cible.style.backgroundRepeat = valeur2;
		}
		
		if(propriete == 'backgroundPosition'){
		cible.style.backgroundPosition = valeur;
		}
		if(propriete2 == 'backgroundPosition'){
		cible.style.backgroundPosition = valeur2;
		}
		
		if(propriete == 'border'){
		cible.style.border = valeur;
		}
		if(propriete2 == 'border'){
		cible.style.border = valeur2;
		}
		
		if(propriete == 'borderBottom'){
		cible.style.borderBottom = valeur;
		}
		if(propriete2 == 'borderBottom'){
		cible.style.borderBottom = valeur2;
		}
		
		if(propriete == 'borderTop'){
		cible.style.borderTop = valeur;
		}
		
		if(propriete2 == 'borderTop'){
		cible.style.borderTop = valeur2;
		}
		
		if(propriete == 'borderRadius'){
		cible.style.borderRadius = valeur;
		}
		
		if(propriete2 == 'borderRadius'){
		cible.style.borderRadius = valeur2;
		}
		
		if(propriete == 'boxShadow'){
		cible.style.boxShadow = valeur;
		}
		if(propriete2 == 'boxShadow'){
		cible.style.boxShadow = valeur2;
		}
		
		if(propriete == 'position'){
		cible.style.position = valeur;
		}
		if(propriete2 == 'position'){
		cible.style.position = valeur2;
		}
		
		if(propriete == 'float'){
		cible.style.cssFloat = valeur;
		}
		if(propriete2 == 'float'){
		cible.style.cssFloat = valeur2;
		}
		
		if(propriete == 'clear'){
		cible.style.clear = valeur;
		}
		if(propriete2 == 'clear'){
		cible.style.clear = valeur2;
		}
		
		if(propriete == 'zIndex'){
		cible.style.zIndex = valeur;
		}
		if(propriete2 == 'zIndex'){
		cible.style.zIndex = valeur2;
		}
		
		if(propriete == 'display'){
		cible.style.display = valeur;
		}
		if(propriete2 == 'display'){
		cible.style.display = valeur2;
		}
		
		if(propriete == 'visibility'){
		cible.style.visibility = valeur;
		}
		if(propriete2 == 'visibility'){
		cible.style.visibility = valeur2;
		}
		
		if(propriete == 'cursor'){
		cible.style.cursor = valeur;
		}
		if(propriete2 == 'cursor'){
		cible.style.cursor = valeur2;
		}
		
		if(propriete == 'top'){
		cible.style.top = valeur;
		}
		if(propriete2 == 'top'){
		cible.style.top = valeur2;
		}
		
		if(propriete == 'left'){
		cible.style.left = valeur;
		}
		if(propriete2 == 'left'){
		cible.style.left = valeur2;
		}
		
		if(propriete == 'right'){
		cible.style.right = valeur;
		}
		if(propriete2 == 'right'){
		cible.style.right = valeur2;
		}
		
		if(propriete == 'opacity'){
		cible.style.opacity = valeur;
		}
		if(propriete2 == 'opacity'){
		cible.style.opacity = valeur2;
		}
		if(propriete == 'transition'){
		cible.style.webkitTransition = valeur;
		cible.style.mozTransition = valeur;
		cible.style.msTransition = valeur;
		cible.style.oTransition = valeur;
		cible.style.transition = valeur;
		}
		if(propriete2 == 'transition'){
		cible.style.webkitTransition = valeur2;
		cible.style.mozTransition = valeur2;
		cible.style.msTransition = valeur2;
		cible.style.oTransition = valeur2;
		cible.style.transition = valeur2;
		}
	
	}



//<!------------------------------------------------------------------------------------------------------!>
//<!------------------------------MANIPULER LES CHAINES DE CARACTERE--------------------------------------!>
//<!------------------------------------------------------------------------------------------------------!>





function recup_nbr(une_chaine_de_caractere){ // Cette fonction retourne le nombre contenu dans une chaine de caractere.

/([0-9]+)/.exec(une_chaine_de_caractere);
	
var l = RegExp.$1;

return l;

}


//<!------------------------------------------------------------------------------------------------------!>
//<!------------------------------------------------MODIFIER LES DIV--------------------------------------!>
//<!------------------------------------------------------------------------------------------------------!>
	

function ecrir(la_div, le_text){ // Cette fonction a pour tâche d'écrire dans une div un texte indiqué en argument.
	document.getElementById(la_div).innerHTML = le_text;
	}

function sur_ecrir(la_div, le_text){ // Cette fonction a pour tâche d'ajouter dans une div un texte indiqué en argument.
	document.getElementById(la_div).innerHTML += le_text;
	}
	
function ecrir_input(le_input, le_text){ // Cette fonction a pour tâche d'écrire dans un zone de texte ou un input indiqué en argument.
	document.getElementById(le_input).value = le_text;
	}


function lire(la_div){ //CETTE FONCTION LIT LE CONTENU DE LA DIV INDIQUE EN PARAMETRE. 
	var ctn = document.getElementById(la_div).innerHTML.trim();
	return ctn;
	}
	
function lire_input(le_champ_de_texte){ //CETTE FONCTION LIT LE CONTENU DU CHAMP DE TEXT OU INPUT INDIQUE EN PARAMETRE. 
	var ctn = document.getElementById(le_champ_de_texte).value.trim();
	return ctn;
	}

function lire_select(le_select){ //CETTE FONCTION LIT LE CONTENU DU CHAMP DE TEXT OU INPUT INDIQUE EN PARAMETRE. 
	var ctn = document.getElementById(le_select).selectedIndex;
	return ctn;
	}
	

function nbr(id){ // Cette fonction lit le contenue d'une div dont le id est specifié en parametre àpres l'avoir transformé en nombre avec la methode PARSEFLOAT.  
	var ctn = document.getElementById(id).innerHTML.trim();
	var num = parseFloat(ctn);
	return num;
	}


function lire_css(id_div, propriete){ // Cette fonction permet de recuperer la valeur de la prropriete css de la div indiquee en paramettre
	var rv = window.getComputedStyle(document.getElementById(id_div),null).getPropertyValue(propriete);
	return rv;
	}


function creer(element, id, parent){
	var e = document.createElement(element);
	e.setAttribute('id', id);
	document.getElementById(parent).appendChild(e);
	}

function clz(div){
	document.getElementById(div).style.display = 'none';
	}

function redim(div, nouvelleLageur, taille_img_choisie_w, taille_img_choisie_h){
	
	var red = (nouvelleLageur * 100)/taille_img_choisie_w;
	
	var n_haut = ((taille_img_choisie_h * red) / 100);
	
	seT(div, "width", nouvelleLageur, "height", n_haut + 'px');
	
	
	}



function classnom(id, nouveau_nom_de_class){
	document.getElementById(id).className = nouveau_nom_de_class;
	}

function lire_class(id){
	var rep = document.getElementById(id).getAttribute('class');
	return rep;
	}


//<!------------------------------------------------------------------------------------------------------!>
//<!------------------------------------------------LES ECOUTEURS-----------------------------------------!>
//<!------------------------------------------------------------------------------------------------------!>

function ecouter(la_cible, la_fonction, evenT){
	var target;
	if(la_cible == 'window'){
		target = window;
		}
	else{
		target = document.getElementById(la_cible);
		}
	if (target.addEventListener){
		  target.addEventListener(evenT, la_fonction, false);
		} else if (target.attachEvent) {
		  target.attachEvent('on'+evenT, la_fonction);
		}
	}
	
function assourdir(la_cible, la_fonction, evenT){
	var target;
	if(la_cible == 'window'){
		target = window;
		}
	else{
		target = document.getElementById(la_cible);
		}
	if (target.removeEventListener){
		  target.removeEventListener(evenT, la_fonction, false);
		} else if (target.detachEvent) {
		  target.detachEvent('on'+evenT, la_fonction);
		}
	}



//<!------------------------------------------------------------------------------------------------------!>
//<!------------------------------------------------LES IMAGES--------------------------------------------!>
//<!------------------------------------------------------------------------------------------------------!>


//<!------------------------------------------------------------------------------------------------------!>
//<!------------------------------------------------PRECHARGER LES IMAGES---------------------------------!>
//<!------------------------------------------------------------------------------------------------------!>




//<!------------------------------------------------------------------------------------------------------!>
//<!----------------------------------------------LES FONCTIONS DES DATES---------------------------------!>
//<!------------------------------------------------------------------------------------------------------!>


	
function dire_le_mois(numero_du_mois){
	
	
	var mois_a_afficher;
	
	var mth = ['janvier','fevrier','mars','avril','mai','juin','juillet','aout','septembre','octobre','novembre','decembre'];
	
	if(numero_du_mois == 1){
		 mois_a_afficher = mth[0];
		}
	if(numero_du_mois == 2){
		 mois_a_afficher = mth[1];
		}
	
	if(numero_du_mois == 3){
		 mois_a_afficher = mth[2];
		}
	if(numero_du_mois == 4){
		 mois_a_afficher = mth[3];
		}
	if(numero_du_mois == 5){
		 mois_a_afficher = mth[4];
		}
	if(numero_du_mois == 6){
		 mois_a_afficher = mth[5];
		}
	if(numero_du_mois == 7){
		 mois_a_afficher = mth[6];
		}
	if(numero_du_mois == 8){
		 mois_a_afficher = mth[7];
		}
	if(numero_du_mois == 9){
		 mois_a_afficher = mth[8];
		}
	if(numero_du_mois == 10){
		 mois_a_afficher = mth[9];
		}
	if(numero_du_mois == 11){
		 mois_a_afficher = mth[10];
		}
	if(numero_du_mois == 12){
		 mois_a_afficher = mth[11];
		}
	return mois_a_afficher;
	}
	
	
	
	
function le_numero_du_mois(mois_en_cours){
	
	if(mois_en_cours == 'janvier'){
		 no_mois_en_cours = 1;
		}
	if(mois_en_cours == 'fevrier'){
		 no_mois_en_cours = 2;
		}
	if(mois_en_cours == 'mars'){
		 no_mois_en_cours = 3;
		}
	if(mois_en_cours == 'avril'){
		 no_mois_en_cours = 4;
		}
	if(mois_en_cours == 'mai'){
		 no_mois_en_cours = 5;
		}
	if(mois_en_cours == 'juin'){
		 no_mois_en_cours = 6;
		}
	if(mois_en_cours == 'juillet'){
		 no_mois_en_cours = 7;
		}
	if(mois_en_cours == 'aout'){
		 no_mois_en_cours = 8;
		}
	if(mois_en_cours == 'septembre'){
		 no_mois_en_cours = 9;
		}
	if(mois_en_cours == 'octobre'){
		 no_mois_en_cours = 10;
		}
	if(mois_en_cours == 'novembre'){
		 no_mois_en_cours = 11;
		}
	if(mois_en_cours == 'decembre'){
		 no_mois_en_cours = 12;
	}
	return no_mois_en_cours;
	}
	

//<!------------------------------------------------------------------------------------------------------!>
//<!-------------------------------------------LES FONCTIONS DES TABLEAUX---------------------------------!>
//<!------------------------------------------------------------------------------------------------------!>


function cleanArray(array) {  // CETTE FX SERT A RECUPERER LES DOUBLON CONTENU DANS LE TABLEAU 'ARRAY' ET A LES STOCKER DS 'OUT'
  var i, j, len = array.length, out = [], obj = {};
  for (i = 0; i < len; i++) {
    obj[array[i]] = 0;
  }
  for (j in obj) {
    out.push(j);
  }
  return out;
}



//<!------------------------------------------------------------------------------------------------------!>
//<!-------------------------------------------LES FONCTIONS DES AJAX-------------------------------------!>
//<!------------------------------------------------------------------------------------------------------!>




//Debut de La partie permettant de verifier la compatibilité des navigateur avec l'objet XMLHTTPRequest.
	
	//Fonction d'instance permettant de vérifier si le navigateur supporte l'objet XMLHTTPRequest
	function objet_XMLHttpRequest()
	{
	//On déclare une variable "mavariable" à null
	var mavariable = null;
	//Teste si le navigateur prend en charge les XMLHttpRequest
	if (window.XMLHttpRequest || window.ActiveXObject){
	// Si Internet Explorer alors on utilise les ActiveX
	if(window.ActiveXObject){
	//On teste IE7 ou supérieur
	try{
	mavariable = new ActiveXObject("Msxml2.XMLHTTP");
	}
	//Si une erreur est levée, alors c'est IE 6 ou inférieur
	catch(e){
	mavariable = new ActiveXObject("Microsoft.XMLHTTP");
	}
	}
	//Navigateurs récents (Firefox, Opéra, Chrome, Safari, ...)
	else{
	mavariable = new XMLHttpRequest();
	}
	}
	//XMLHttpRequest non supporté par le navigateur
	else{
	alert("Votre navigateur ne supporte pas l'objet XMLHTTPRequest...");
	return null;
	}
	//On retourne l'objet mavariable
	return mavariable;
	}
//Fin de La partie permettant de verifier la compatibilité des navigateur avec l'objet XMLHTTPRequest.

