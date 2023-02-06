(async () => {
    async function fetchDeck(numOfDecks) {
        try {
            const response = await fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=${numOfDecks}`);
            const data = await response.json();
            return data.deck_id;
        } catch (error) {
            console.error(error);
        }
    }
    
    async function getCards(deckId, numOfCards) {
        try {
            const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${numOfCards}`);
            //const response = await fetch(`https://prog2700.onrender.com/pokerhandtest/highcard`);
            const data = await response.json();
            return data.cards;
        } catch (error) {
            console.error(error);
        }
    }

    function convertFaceCards(cards) {
        cards.forEach(card => {
            if (card.value === 'ACE') {
                card.value = 1
            } else if (card.value === 'KING') {
                card.value = 13
            } else if (card.value === 'QUEEN') {
                card.value = 12
            } else if (card.value === 'JACK') {
                card.value = 11
            }
        })
        return cards;
    }

    function outputCards(cards) {
        document.write("<div style='display: flex;'>")
        cards.forEach(card => {
            document.write(
                `<div><h3>${card.value} of ${card.suit}</h3>
                <img src='${card.image}'/></div>`
            )
        });
        document.write("</div>")
    }

    let isFlush = true, isStraight = true;
    let highCardValue = 0, matchCount = 0;
    let matches = [[],[]];
    let lastCard = null;
    let bestHand;

    let deckId = await fetchDeck(1);

    let cards = await getCards(deckId, 5)
    outputCards(cards)
    convertFaceCards(cards)
    cards.sort((a , b) => a.value - b.value)
    highCardValue = cards[0].value;    

    cards.forEach(card => {
        if (lastCard != null) {
            if (lastCard.suit !== card.suit || !isFlush) {
                isFlush = false;
            }
            if (parseInt(lastCard.value) + 1 !== parseInt(card.value) || !isStraight) {
                if (parseInt(cards[0].value) === 1 && parseInt(cards[1].value) === 10) { //Handles straigh flush.
                    isStraight = true;
                } else {
                    isStraight = false;
                }
            }
            if (card.value == 1 || (highCardValue != 1 && parseInt(highCardValue) < parseInt(card.value))) {
                highCardValue = card.value;
            }
            if (lastCard.value === card.value) {
                matches[matchCount].push(card.value);
            } else if (lastCard.value == matches[matchCount][0]) {
                matchCount++;
            }
        }
        lastCard = card;
    })

    console.log(cards)
    if (highCardValue == 1 && parseInt(cards[4].value) === 13 && isFlush && isStraight) {
        bestHand = "a Royal Flush!";
    } else if (isFlush && isStraight) {
        bestHand = "a Straight Flush!"
    } else if (matches[0].length == 3) {
        bestHand = "Four of a Kind!"
    } else if ((matches[0].length == 2 && matches[1].length == 1) || matches[0].length == 1 && matches[1].length == 2) {
        bestHand = "a Full House!"
    } else if (isFlush) {
        bestHand = "a Flush!";
    } else if (isStraight && matches[0].length == 0) {
        bestHand = "a Straight!";
    } else if (matches[0].length == 2) {
        bestHand = "Three of a Kind!"
    } else if (matches[0].length == 1 && matches[1].length == 1) {
        bestHand = "a Two Pair!"
    } else if (matches[0].length == 1) {
        bestHand = "a Pair!"
    } else {
        if (highCardValue == 1) {
            bestHand = "a High Card Ace"
        } else if (highCardValue == 11) {
            bestHand = "a High Card Jack"
        } else if (highCardValue == 12) {
            bestHand = "a High Card Queen"
        } else if (highCardValue == 13) {
            bestHand = "a High Card King"
        } else {
            bestHand = `a High Card ${highCardValue}`
        }
        
    }

    document.write(`<h1>The best hand is ${bestHand}</h1>`);
})();


