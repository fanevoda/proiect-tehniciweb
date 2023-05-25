const productElements = document.getElementsByClassName('product');

const dropdownContent = document.getElementById('dropdown produse');



for(let i = 0; i < productElements.length; i++)
{
    const productElement = productElements[i];

    const textElement = productElement.querySelector('.text').textContent;
    console.log(textElement);

    const dropdownAnchor = document.createElement("a")
    dropdownAnchor.append(textElement);

    dropdownContent.appendChild(dropdownAnchor);
} 

//ropdownContent.remove();
// asa ar arata stergerea, las ca si comentariu daca nu o sa am la ce folosi


//dropdownContent.appendChild(dropdownAnchor);