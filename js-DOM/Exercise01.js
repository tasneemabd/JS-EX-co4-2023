// Exercise 01

const heading = document.querySelector('h2');
const paragraph= document.getElementById('paragraph');
const words = paragraph.innerText.split(' ');

const wordCount = words.length;
const wordCountElement = document.createElement('p');
wordCountElement.textContent = `This paragraph contains ${wordCount} words.`;
heading.insertAdjacentElement('afterend', wordCountElement);


const link = document.createElement('a')

var linkText = document.createTextNode("google link");
link.appendChild(linkText);
      
link.href = "-(https://google.com/";
      document.body.appendChild(link);
      paragraph.insertAdjacentElement('beforebegin',link)


paragraph.innerHTML = paragraph.innerHTML.replace(/\, /g, '.<br>');


words.forEach(word=>
{
if(word.length >=8){
    const span =document.createElement('span')
    span.textContent=word;
    span.style.backgroundColor='yellow';
    paragraph.innerHTML = paragraph.innerHTML.replace(word, span.outerHTML);

    
}

});

document.body.appendChild(text);