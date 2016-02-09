// JavaScript source code
function delCssClass(id, cssClass) {

	var links = document.getElementById(id).getElementsByTagName('li');
	for (i = 0; i < links.length; i++) {
		var index = links[i].className.indexOf(cssClass);
		if (index != -1) {
			links[i].className = "";
		}
	}
}
function loadBigImg(src, el) {

	delCssClass('product-slider-panel', 'active');
	el.className = "active";

	var bigImgElem = document.getElementById('productBigImg');
	var hideImg = new Image();
	hideImg.src = src;
	bigImgElem.src = hideImg.src;
	return false;
}


/*********************************************/
function addEventsSliderPanel() {
	if (document.getElementById("slider-panel") == null)
		return;
	var li = document.getElementById("slider-panel").getElementsByTagName("li");
	for (i = 0; i < li.length; i++) {
		// Присвоить обработчики превьюшкам.
		li[i].onclick = function () {
			delCssClass('slider-panel', 'active');
			this.className = "active";
			// Найти все превьюшки
			var li1 = document.getElementById("slider-panel").getElementsByTagName("li");
			for (q = 0; q < li1.length; q++) {
				// Определить из какой превьюшки пришло событие.
				if (li1[q] == this) {
					// Найти соответствующий слайд  в блоке слайдов.
					var slides = document.getElementById("slides").getElementsByTagName("li");
					for (j = 0; j < slides.length; j++) {
						if (q == j) {
							// Найти блок, и загрузить туда большую картинку.
							var allLinks = slides[j].getElementsByTagName("a");
							for (w = 0; w < allLinks.length; w++) {
								if (allLinks[w].className == 'bigImg') {
									var hideImg = new Image();
									hideImg.src = allLinks[w].href;
									allLinks[w].getElementsByTagName("img")[0].src = hideImg.src;
									//alert(allLinks[w].href);
								}
							}
							delCssClass('slides', 'visible');
							slides[j].className = 'visible';

							cusel();
							//alert(slides[j].className);
						}
					}
				}
			}
		}
	}
}

function addSliderId() {

}

function getData(method, url, func) {
	var xhr = new XMLHttpRequest();
	xhr.open(method, url + '?unic=' + Math.random());
	xhr.send(null);
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4 && xhr.status == 200) {
			func(xhr.responseText);
		}
	}
}

function getNum(st)
{
	var res="";
	for (i = 0; i < st.length; i++)
	{
		if (st[i] >= 0 & st[i] <= 9)
			res += st[i] + '';
	}
	return res;
}
function number_format( number, decimals, dec_point, thousands_sep ) {  // Format a number with grouped thousands
		// 
		// +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
		// +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
		// +     bugfix by: Michael White (http://crestidg.com)

		var i, j, kw, kd, km;
 
		// input sanitation & defaults
		if( isNaN(decimals = Math.abs(decimals)) ){
		decimals = 2;
		}
		if( dec_point == undefined ){
		dec_point = ",";
		}
		if( thousands_sep == undefined ){
		thousands_sep = ".";
		}

		i = parseInt(number = (+number || 0).toFixed(decimals)) + "";

		if( (j = i.length) > 3 ){
		j = j % 3;
		} else{
			j = 0;
		}

		km = (j ? i.substr(0, j) + thousands_sep : "");
		kw = i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands_sep);
		//kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).slice(2) : "");
		kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).replace(/-/, 0).slice(2) : "");

		return km + kw + kd;
}
function addEventsSelect ()
{
	var sel = document.getElementById("slides").getElementsByTagName("li");
	for (i = 0; i < sel.length; i++) {
		var a = document.getElementById("a" + i);
		a.onchange = function ()
		{
			var cost = document.getElementById("cost" + number_format(getNum(this.id), 0, ',', ' ')).innerHTML = this.value;
		}
	}
}
function start() {
	var menuLinks = document.getElementById("category-list").getElementsByTagName("a");
	for (i = 0; i < menuLinks.length; i++) {
		menuLinks[i].onclick = function () {
			selectMenuItem(this);
			getData('GET', this.href, getSlider);
			return false;
		}
	}
	addEventsSliderPanel();
	addEventsSelect();
}

window.onload = start;

function selectMenuItem(el) {
	var menuLinks = document.getElementById("category-list").getElementsByTagName("a");
	for (i = 0; i < menuLinks.length; i++) {
		if (menuLinks[i].className == "active") {
			menuLinks[i].className = "";
			break;
		}
	}
	el.className = "active";
}

function getSlider(data) {
	document.getElementById("main-content").innerHTML = data;
	cusel();
	addEventsSliderPanel();
	addEventsSelect();
}
