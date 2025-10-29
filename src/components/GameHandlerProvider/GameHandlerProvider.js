import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { sample } from '../../utils';
import { WORDS } from '../../data';

export const GameHandlerContext = React.createContext(null);

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function GameHandlerProvider({ children }) {

    const [guesses, setGuesses] = React.useState([]);
    const [gameStatus, setGameStatus] = React.useState('running');
    // const [answer, setAnswer] = React.useState('react'); // Example answer

    function submitGuess(tentativeGuess) {
        if (guesses.length >= NUM_OF_GUESSES_ALLOWED) {
            return
        }
        const nextGuesses = [...guesses, tentativeGuess]
        setGuesses(nextGuesses)

        if (tentativeGuess === answer) {
            setGameStatus('won')
        } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
            setGameStatus('lost')
        }
    }

    // Undo latest guess listener
    React.useEffect(() => {
        function undoGuess(event) {
            if (gameStatus !== 'running') {
                // console.log('Game over already');
                return
            }
            if (guesses.length === 0) {
                // console.log("Not undoing the latest guess");
                return
            }
            if (event.code === 'Escape') {
                const nextGuesses = guesses.slice(0, -1);
                setGuesses(nextGuesses);
            }
        }

        window.addEventListener('keydown', undoGuess);

        return () => window.removeEventListener('keydown', undoGuess);
    }, [guesses, gameStatus])

    // Reset game listener
    React.useEffect(() => {
        function resetGame(event) {

            if (event.ctrlKey && event.code === 'KeyR') {
                // console.log('Resetting game');
                setGuesses([]);
                setGameStatus('running');
                // setAnswer('react'); // Reset to example answer}
            }
        }

        window.addEventListener('keydown', resetGame);

        return () => window.removeEventListener('keydown', resetGame);

    }, [guesses, gameStatus]);


    return (
        <GameHandlerContext.Provider value={{ guesses, answer, gameStatus, submitGuess }}>
            {children}
        </GameHandlerContext.Provider>
    )

}

export default GameHandlerProvider;