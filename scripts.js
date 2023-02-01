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
            const data = await response.json();
            return data.cards;
        } catch (error) {
            console.error(error);
        }
    }

    let deckId = await fetchDeck(1);

    let cards = await getCards(deckId, 5)
    
    
        cards.forEach(card => {
            document.write(
                `<h3>${card.value} of ${card.suit}</h3>
                <img src='${card.image}'/>`
            )
        });
})();


