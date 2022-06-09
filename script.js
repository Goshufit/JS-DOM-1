// Examine The Document Object //

//console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//document.title = 123;
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);
//document.all[10].textContent = 'Hello';
//console.log(document.forms[0]);
//console.log(document.links);
//console.log(document.images);


// getElementById //

//console.log(document.getElementById('header-title'));
// let headerTitle = document.getElementById('header-title');
// let header = document.getElementById('main-header');
//headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
//headerTitle.innerHTML = '<h3>Hello</h3>';
//headerTitle.style.borderBottom = 'solid 3px #000';


//getElementsByClassName//

// let items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

//Gives error when trying to select all list items and change there background //
//so you must do a for loop to iterate through each list item and apply the styling//
//items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < items.length; i++){
//     items[i].style.backgroundColor = '#f4f4f4';
// }


//getElemntByTagName //

// let li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

//Gives error when trying to select all list items and change there background //
//so you must do a for loop to iterate through each list item and apply the styling//
//items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < li.length; i++){
//     li[i].style.backgroundColor = '#f4f4f4';
// }


//querySelector//

let header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

let input = document.querySelector('input');
input.value = 'Hello World';

let submit = document.querySelector('input[type="submit"]');
submit.value="SEND";

let item = document.querySelector('.list-group-item');
item.style.color = 'red';

let lastItem = document.querySelector('.list-group-item:last');