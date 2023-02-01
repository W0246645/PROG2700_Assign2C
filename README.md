# PROG2700 Assign2C
Part C: Poker Hands
Summary
Using the publicly available Deck of Cards API, you will create a small JavaScript application that uses the API to provide data so that you can do the following.

•	Retrieve a Deck of shuffled cards from the API.
•	Initially pull 5 cards from the deck and display them in a web page.
•	Write/research a function that takes the cards and shows the highest poker hand that can be calculated based on the 5 cards.
Submission

Submit either a video file or link to a video (with proper permissions for the instructor to view it) to this Assignment Dropbox before the due date indicated. A video file checklist is included at the end of this assignment document that outlines what you must show.

Requirements (40 points)

Question 1	RETRIEVE AND PERSIST A DECK OF CARDS FROM THE API (10 PTS)
Using the Deck of Cards API (https://deckofcardsapi.com/), use a demonstrated method of AJAX data retrieval to retrieve a deck of cards that can be used by the application. Be sure to store the returned data in an appropriate way.

Question 2	REQUEST FIVE CARDS FROM THE DECK (10 PTS)
Using the deck that was retrieved in REQ-001, ask the API for a hand of five cards from the deck. Store the given cards in an appropriate manner in your code so that you can evaluate its contents.

Question 3	DISPLAY THE HAND IN A WEB PAGE (10 PTS)
Display the cards in some manner that can be seen in the browser. This can be done by either
	
1)	Displaying the cards names in some manner using document.write to the web page
2)	Displaying the images of the cards on the web page by modifying the DOM. (ie Manipulate img tags defined on the page)

 

Question 4	WRITE A FUNCTION THAT WILL DETERMINE THE HIGHEST POKER HAND FOR THE DISPLAYED CARDS (10 PTS)
Write a function that will determine and output the highest poker hand based on the given five cards:
Hand rankings can be found here: https://www.cardplayer.com/rules-of-poker/hand-rankings
or here: https://www.unibet.com/poker/guides/poker-hand-rankings-with-cheat-sheet-1.784253

Question 5	WRAP THE ENTIRE APPLICATION IN AN INDEPENDENTLY INVOKED FUNCTION EXPRESSION (IIFE) (OR EQUIVALENT) (5 PTS)
In order for the entire application to be contained within its own scope and to not pollute the global scope, wrap the entire contents of the file in an Independently Invoked Function Expression (IIFE) or Equivalent routine and be prepared to demonstrate how your script’s data is contained within its own local scope and not within the browser’s global scope (window).
