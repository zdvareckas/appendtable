let deleteLast = document.getElementById('deleteLast');
let deleteFirst = document.getElementById('deleteFirst');
let add = document.getElementById('add');
let t = document.getElementById('table');



add.addEventListener('click', () => {
    if (document.getElementById("inputValue1").value.length == 0 || document.getElementById("inputValue2").value.length == 0 || document.getElementById("inputValue3").value.length == 0 || document.getElementById("inputValue3").value <= 0) {
        alert("Užpildykite visus laukelius")
    } else {
        let text = t.insertRow();
        for (let i = 0; i < 3; i++) {
            text.insertCell();
            let inputValue = document.querySelectorAll('input');
            text.cells[i].innerText = inputValue[i].value;
            inputValue[i].value = '';
        }
        text.classList.add('data');
    }
})


deleteLast.addEventListener('click', () => {
    let tr = document.getElementsByClassName('data');
    tr[tr.length - 1].remove()
})

deleteFirst.addEventListener('click', () => {
    let tr = document.getElementsByClassName('data')
    tr[0].remove()
})



