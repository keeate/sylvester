const tab1=document.querySelector("#tab1");
const tab2=document.querySelector("#tab2");
const tab3=document.querySelector("#tab3");
const text1=document.querySelector("#tab-1");
const text2=document.querySelector("#tab-2");
const text3=document.querySelector("#tab-3");

tab1.addEventListener('click', e=>{
	text1.style.display="inline";
	text2.style.display="none";
	text3.style.display="none";
	tab1.classList.replace('hidden','current');
	tab2.classList.replace('current','hidden');
	tab3.classList.replace('current','hidden');
});
tab2.addEventListener('click', e=>{
	text1.style.display="none";
	text2.style.display="inline";
	text3.style.display="none";
	tab1.classList.replace('current','hidden');
	tab2.classList.replace('hidden','current');
	tab3.classList.replace('current','hidden');
});
tab3.addEventListener('click', e=>{
	text1.style.display="none";
	text2.style.display="none";
	text3.style.display="inline";
	tab1.classList.replace('current','hidden');
	tab2.classList.replace('current','hidden');
	tab3.classList.replace('hidden','current');
});


// (document).ready(function(){
// 	('ul.tabs li').click(function(){
// 		var tab_id = (this).attr('data-tab');

// 		('ul.tabs li').removeClass('current');
// 		('.tab-content').removeClass('current');

// 		(this).addClass('current');
// 		("#"+tab_id).addClass('current');
// 	});

// });