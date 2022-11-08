// app
const app = () => {
  const iconsBook = document.querySelectorAll(".icon-book .icon-book-cover");
  const books = document.querySelector(".books");
  //color random for each new book icon
  iconsBook.forEach(icon => icon.setAttribute("style", "fill-rule:evenodd;clip-rule:evenodd;fill:rgb(" + rand(255) + ", " + rand(255) + ", " + rand(255) + ")"));

  function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
    if (read == false) {
      this.read = "not read yet"
    } else {
      this.read = "already read"
    }
    this.info = function () {
      return `
            <div class="card">
     
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <svg
                      height="48px" class="icon-book" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1"
                      viewBox="0 0 512 512" width="48px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink">
                      <g>
                        <path
                          d="M512,255.999C512,114.483,397.427,0,255.811,0   C114.577,0,0,114.483,0,255.999C0,397.118,114.577,512,255.811,512C397.427,512,512,397.118,512,255.999L512,255.999z"
                          class="icon-bg" style="fill-rule:evenodd;clip-rule:evenodd;fill:#EFF0EB;" />
                        <path class="icon-book-cover"
                          d="M162.709,118.858h193.736l44.16,193.987h-16.308l-0.399,68.771   h16.707v11.528H138.449c-25.064-1.989-22.68-46.107-23.872-58.038l21.887-197.172C136.464,129.192,145.604,118.858,162.709,118.858   L162.709,118.858z"
                          style="fill-rule:evenodd;clip-rule:evenodd;fill:rgb(${rand(255)}, ${rand(255)}, ${rand(255)})" />
                        <path
                          d="M162.709,118.858h18.313L164.3,393.146h-25.851   c-30.628-3.583-31.422-51.679-21.886-77.916l19.9-177.294C136.464,129.192,145.604,118.858,162.709,118.858L162.709,118.858z"
                          style="fill-rule:evenodd;clip-rule:evenodd;fill:#324A5E;" />
                        <path
                          d="M141.632,312.846H395.44   c-11.542,23.453-11.143,46.904,0,69.564H141.632C114.577,382.41,114.577,312.846,141.632,312.846L141.632,312.846z"
                          style="fill-rule:evenodd;clip-rule:evenodd;fill:#FEFEFE;" />
                        <path
                          d="M125.321,325.969h264.951   c-0.398,0.789-0.398,1.587-0.794,2.383H124.527C124.926,327.556,124.926,326.758,125.321,325.969L125.321,325.969z    M388.286,333.521c0,0.793,0,1.191-0.398,1.984H122.542c0-0.793,0.395-1.191,0.395-1.984H388.286z M387.489,340.678   c-0.396,0.789-0.396,1.586-0.396,1.98H121.35c0.395-0.395,0.395-1.191,0.395-1.98H387.489z M387.094,348.229   c0,0.395,0,1.191,0,1.985H121.35c0-0.794,0-1.591,0-1.985H387.094z M387.489,355.383c0,0.793,0,1.59,0,1.984H122.143   c0-0.395-0.398-1.191-0.398-1.984H387.489z M388.682,362.536c0,0.797,0.398,1.595,0.398,2.383H123.734   c-0.399-0.788-0.399-1.586-0.399-2.383H388.682z M390.671,370.092c0,0.793,0.396,1.191,0.396,1.984H127.312   c-0.399-0.394-0.798-0.793-1.192-1.191c-0.399-0.395-0.399-0.793-0.399-0.793H390.671z"
                          style="fill-rule:evenodd;clip-rule:evenodd;fill:#ECF0F1;" />
                      </g>
                    </svg>
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">${this.name}</p>
                  <p class="subtitle is-6">${this.author}</p>
                </div>
              </div>
     
              <div class="content">
              ${this.pages} pages<br>
              ${this.read}.
              </div>
              
            </div>
            <footer class="card-footer">
              <div class="field is-grouped">
              
                <p class="control">
                  <button class="button is-small ">
                    Edit
                  </button>
                </p>
                <p class="control">
                  <button class="button is-small is-danger">
                    Delete
                  </button>
                </p>
              </div>
            </footer>
          </div>`

    }
  }
  const book1 = new Book('The Hobbit', 'J.R.R Tolkien', 295, true);
  const book2 = new Book('Harry Poter', 'J.K Rowling', 425, false);
  const book3 = new Book('20000 lieues sous les mers', 'J. Verne', 400, true);
  const book4 = new Book('l\'ile aux trésors', 'R. Stevenson', 540, false);
  const collection = [book1, book2, book3, book4];

  // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"


  for (let i = 0; i < collection.length; i++) {

    books.innerHTML += collection[i].info();


  }

}
function rand(max) {
  return Math.floor(Math.random() * (max + 1));
};
function addBook() {

  const isRead = document.querySelector('input[name="isread"]:checked').value;
  const bookTitle = document.getElementById('bookTitle').value;
  const bookAuthor = document.getElementById('bookAuthor').value;
  const bookPages = document.getElementById('bookPages').value;
  
  console.log('addbook');

  console.log("radioIsRead: " + isRead);


  console.log("bookTitle: " + bookTitle);
  console.log("bookAuthor: " + bookAuthor);
  console.log("bookPages: " + bookPages);


}

//play app
app();