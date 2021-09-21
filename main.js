function Book(name, author, nop, read){
    this.name=name;
    this.author=author;
    this.nop=nop;
    this.read=read;
};

const newBook=e=>{
    form.style.display="block";
};

const submitBook=e=>{
    form.style.display="none";
    e.preventDefault();
    let bname=document.querySelector("#book-name");
    let aname=document.querySelector("#author-name");
    let nop=document.querySelector("#pages");
    let read=document.querySelector("#read");
    console.log(bname.value, aname.value, nop.value, read.checked);
    let book=new Book(bname.value, aname.value, nop.value, read.checked);
    createNewBook(book);
};

createNewBook=(book)=>{
    let card=document.createElement("div");
    let bname=document.createElement("p");
    bname.textContent=`Book Name: ${book.name}`;
    let aname=document.createElement("p");
    aname.textContent=`Book Author: ${book.author}`;
    let nop=document.createElement("p");
    nop.textContent=`No. of Pages: ${book.nop}`;
    let read=document.createElement("p");
    read.textContent=`Read status: ${(book.read)?`Yes`:`No`}`;
    card.appendChild(bname);
    card.appendChild(aname);
    card.appendChild(nop);
    card.appendChild(read);
    card.classList.add("card");
    cards.prepend(card);
};

const form=document.querySelector("form");
const cards=document.querySelector(".cards");
const newB=document.querySelector('.new');
newB.addEventListener('click',newBook);

const submit=document.querySelector('#submit');
submit.addEventListener('click',submitBook);
