function Book(name, author, nop, read,index){
    this.name=name;
    this.author=author;
    this.nop=nop;
    this.read=read;
    this.index=index;
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
    /*console.log(bname.value, aname.value, nop.value, read.checked);*/
    let book=new Book(bname.value, aname.value, nop.value, read.checked, i);
    createNewBook(book);
};

createNewBook=(book)=>{

    const changeRead=e=>{
        book.read=!book.read;
        read.textContent=`Read status: ${(book.read)?`Yes`:`No`}`;
    };

    const removeBook=e=>{
        cards.removeChild(card);
        bookArr.splice(i--,1);
    };

    bookArr[i++]=book;
    let card=document.createElement("div");
    let bname=document.createElement("p");
    bname.textContent=`Book Name: ${book.name}`;
    let aname=document.createElement("p");
    aname.textContent=`Book Author: ${book.author}`;
    let nop=document.createElement("p");
    nop.textContent=`No. of Pages: ${book.nop}`;
    let read=document.createElement("p");
    read.textContent=`Read status: ${(book.read)?`Yes`:`No`}`;

   /* let buttons=document.createElement("div"); */
    let readButton=document.createElement("button");
    let remButton=document.createElement("button");
    readButton.textContent="READ";
    remButton.textContent="X";
    readButton.classList.add("readButton");
    remButton.classList.add("remButton");

    card.appendChild(remButton);
    card.appendChild(bname);
    card.appendChild(aname);
    card.appendChild(nop);
    card.appendChild(read);
    card.appendChild(readButton);
    card.classList.add("card");
    cards.prepend(card);
    /*console.log(bookArr,i);*/

    readButton.addEventListener('click',changeRead);
    remButton.addEventListener('click',removeBook);
   
};

const form=document.querySelector("form");
const cards=document.querySelector(".cards");
const newB=document.querySelector('.new');
newB.addEventListener('click',newBook);

const submit=document.querySelector('#submit');
submit.addEventListener('click',submitBook);

let bookArr=[];
let i=0;