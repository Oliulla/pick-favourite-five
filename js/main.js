// add slected player in a list

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

function getPlayerCostListExpenses(perPlayerFieldId, PlayersListId, expensesId) {
    const perPlayerField = document.getElementById(perPlayerFieldId);
    const perPlayerCost = parseFloat(perPlayerField.value);

    const selectedPlayersList = document.getElementById(PlayersListId);
    const lengthOfList = selectedPlayersList.childNodes.length;
    const playerExpenses = perPlayerCost * (lengthOfList - 1);

    const totalExpensesElement = document.getElementById(expensesId);
    if(isNaN(perPlayerCost)){
        alert('please enter a valid number')
        return;
    }

    totalExpensesElement.innerText = playerExpenses;
}

function getPlayerManagerCoachTotal(managerField, coachdField, expensesId, totalId) {
    const managerInputField = document.getElementById(managerField);
    const managerCostAmount = parseFloat(managerInputField.value);

    const coachInputField = document.getElementById(coachdField);
    const coachCostAmount = parseFloat(coachInputField.value);

    const totalExpensesElement = document.getElementById(expensesId);
    const totalExpensesAmount = parseFloat(totalExpensesElement.innerText);

    const totalCost = managerCostAmount + coachCostAmount + totalExpensesAmount;

    const totalAmount = document.getElementById(totalId);
    if (isNaN(totalCost)) {
        alert('please enter a valid number');
        return;
    }
    totalAmount.innerText = totalCost;
}

// calculate total cost of players
document.getElementById('calculate-button').addEventListener('click', function() {
    getPlayerCostListExpenses('per-player-cost', 'selected-players-list', 'total-expenses');
    
});

document.getElementById('calculate-total').addEventListener('click', function() {
    getPlayerManagerCoachTotal('manager-cost', 'coach-cost', 'total-expenses','total-cost');
});