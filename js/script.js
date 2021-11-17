
const submit = document.getElementById('submit');

submit.addEventListener('click', function(){
    const select = document.querySelector('select');
    const container = document.querySelector('.container');
    console.log(select.value);

    container.innerHTML = '';
    addSquare(select.value,container);

    const squares = document.getElementsByClassName('square');

    for (let i = 0; i < 16; i++){
        let y = Math.floor(Math.random() * squares.length) + 1;
        console.log(y);
        squares[y - 1].classList.add('bomb');
    }

    let tentativi = 0;
    let sentinella = false;
    
    for (let i = 0; i < squares.length; i++){

        squares[i].addEventListener('click', function(){
            if (sentinella == false){
                if (this.classList.contains('bomb')){
                    alert('Hai perso');
                    const punteggio = document.querySelector('.punteggio');
                    punteggio.innerHTML = 'Complimenti! il tuo punteggio è: ' + tentativi;
                    const bombs = document.getElementsByClassName('bomb');
                    for (let j = 0; j < bombs.length; j++){
                        bombs[j].classList.add('red');
                    }
                    submit.innerHTML = 'Riprova';
                    sentinella = true;
                    console.log(sentinella);
                } else if (this.classList.contains('blue')){
                    alert('ATTENZIONE! seleziona una casella diversa')
                } else {
                    this.classList.add('blue');
                    tentativi++;
                }
            }
        })
    }

})

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