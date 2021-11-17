
const submit = document.getElementById('submit');

submit.addEventListener('click', function(){
    const select = document.querySelector('select');
    const container = document.querySelector('.container');
    console.log(select.value);

    container.innerHTML = '';
    addSquare(select.value,container);
    
    for (let i = 0; i < squares.length; i++){
        squares[i].addEventListener('click', function(){
            this.classList.add('blue');
        })
    }
})

const squares = document.getElementsByClassName('square');





function addSquare(type,where){
    let x;
    switch (type){
        case 'easy': 
            x = 100;
            for (let i = 0; i < x; i++){
                let square = document.createElement('div');
                square.innerText = i + 1;
                square.className = 'square';
                where.append(square);
            }
            break;
        case 'hard':
            x = 81;
            for (let i = 0; i < x; i++){
                let square = document.createElement('div');
                square.innerText = i + 1;
                square.className = 'square hard';
                where.append(square);
            }
            break;
        case 'crazy':
            x = 49;
            for (let i = 0; i < x; i++){
                let square = document.createElement('div');
                square.innerText = i + 1;
                square.className = 'square crazy';
                where.append(square);
            }
    }
}