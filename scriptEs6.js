console.log("This is ES6 Js")

class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

class Display {
    add(book) {
        console.log("Adding to Dom");

        let tableBody = document.getElementById('tableBody');

        //Tamplate string
        let isString = `    <tr>
                                <td>${book.name}</td>
                                <td>${book.author}</td>
                                <td>${book.type}</td>
                            </tr> `
        tableBody.innerHTML += isString;
    }

    clear() {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }

    validate(book) {
        if (book.name.length < 2 || book.author.length < 2) {
            return false;
        }
        else {
            return true;
        }
    }

    show(type, displayMassage) {

        
        let massage = document.getElementById('massage');

        let boldText;
        if (type == 'success') {
            boldText = 'Success'
        }
        else
        {
            boldText = 'Error';
        }

        massage.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>${boldText}:</strong> ${displayMassage}
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>`;

        setTimeout(() => {
            massage.innerHTML = ''
        }, 4000);
    }
}

//Add submit event lisner to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm = document.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log("You have submitted the form");

    let name = document.getElementById('name').value;
    let author = document.getElementById('author').value;


    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let historic = document.getElementById('historic');

    let type;
    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (historic.checked) {
        type = historic.value;
    }

    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display(book);

    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', "Your book is successfully added");
    }
    else {
        display.show('danger', "You can't add this book");
    }

    e.preventDefault();
}