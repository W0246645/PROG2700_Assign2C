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
            const response = await fetch(`https://prog2700.onrender.com/pokerhandtest/straightflush`);
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
        cards.forEach(card => {
            document.write(
                `<div><h3>${card.value} of ${card.suit}</h3>
                <img src='${card.image}'/></div>`
            )
        });
    }

    let isFlush = true, isStraight = true;
    let highCard;
    let lastCard = null;

    let deckId = await fetchDeck(1);

    let cards = await getCards(deckId, 5)
    outputCards(cards)
    $('body').css('display', 'flex')
    convertFaceCards(cards)
    cards.sort((a , b) => a.value - b.value)
    console.log(cards)

    

    cards.forEach(card => {
        if (lastCard != null) {
            if (lastCard.suit !== card.suit || !isFlush) {
                isFlush = false;
            }
            if (parseInt(lastCard.value, 10) + 1 !== parseInt(card.value, 10) || !isStraight) {
                isStraight = false;
            }
        }
        lastCard = card;
    })
    console.log(isFlush)
    console.log(isStraight)
})();


