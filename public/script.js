// app
const app = () => {
    const iconsBook = document.querySelectorAll(".icon-book .icon-book-cover");
    
    //color random for each new book icon
    iconsBook.forEach(icon => icon.setAttribute("style","fill-rule:evenodd;clip-rule:evenodd;fill:rgb("+rand(255)+", "+rand(255)+", "+rand(255)+")"));

}
function rand(max) {
    return Math.floor(Math.random() * (max + 1));
};
//play app
app();