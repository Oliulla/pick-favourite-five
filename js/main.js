const allSelectButtons = document.getElementsByClassName('player-select');

function selectPlayers(selectButtons) {
    
    for (const selectButton of selectButtons) {

        selectButton.addEventListener('click', function(event) {

            const targetButton = event.target;
            targetButton.setAttribute('disabled', true);

            const playerName = event.target.parentNode.firstChild.nextSibling.innerText;

            const selectedPlayersList = document.getElementById('selected-players-list');
            const playerList = document.createElement('li');
            playerList.innerText = `${playerName}`;

            const lengthOfList = selectedPlayersList.childNodes.length;
            // console.log(lengthOfList)

            if (lengthOfList > 5){
                targetButton.removeAttribute('disabled');
                alert('You already have selected five players')
                return;
            }

            selectedPlayersList.appendChild(playerList);

        });
    }

}
selectPlayers(allSelectButtons);