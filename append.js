const mainContainer = document.getElementById('main-container');
console.log(mainContainer);

const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My food list';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'Briyani';
section.appendChild(li1);
const li2 = document.createElement('li');
li2.innerText = 'Chocolate';
section.appendChild(li2);
const li3 = document.createElement('li');
li3.innerText = 'Orange Juice';
section.appendChild(li3);

section.appendChild(ul);

mainContainer.appendChild(section);

// set innerHTML directly 

const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My dress section</h1>
<ul>
<li>T-Shirt</li>
<li>Pants</li>
<li>Caps</li>
</ul>
`
mainContainer.appendChild(sectionDress);