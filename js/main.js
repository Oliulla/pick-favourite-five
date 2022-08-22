// add slected player in a order list by select button

const allSelectButtons = document.getElementsByClassName('player-select');

function selectPlayers(selectButtons) {

    // iterate select button
    for (const selectButton of selectButtons) {

        // add event handler on target button
        selectButton.addEventListener('click', function(event) {

            // get target button
            const targetButton = event.target;
            targetButton.setAttribute('disabled', true);

            // get and set player name in a list
            const playerName = targetButton.parentNode.firstChild.nextSibling.innerText;
            const selectedPlayersList = document.getElementById('selected-players-list');
            const playerList = document.createElement('li');
            playerList.innerText = `${playerName}`;

            const lengthOfList = selectedPlayersList.childNodes.length;
            // enable button if list full
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

// calculate expenses only for players
// this function for calculate button
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

// calculate total for players, coach and manager
// this function for calculate total button
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

// add handler on calculate button
document.getElementById('calculate-button').addEventListener('click', function() {
    getPlayerCostListExpenses('per-player-cost', 'selected-players-list', 'total-expenses');
    
});

// add handler of calculate total button
document.getElementById('calculate-total').addEventListener('click', function() {
    getPlayerManagerCoachTotal('manager-cost', 'coach-cost', 'total-expenses','total-cost');
});