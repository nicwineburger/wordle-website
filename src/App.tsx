import "./App.css";
import common from "./common.json";
import { dictionarySet, pick } from "./util";
import Game from "./Game";
import { names } from "./names";
import { useState } from "react";
import { Row, RowState } from "./Row";
import { Clue } from "./clue";

function App() {
    const [about, setAbout] = useState(false);
    const maxGuesses = 6;
    return (
        <div className="App-container">
            <h1>wordle.gay</h1>
            <div style={{ position: "absolute", right: 5, top: 5 }}>
                <a href="#" onClick={() => setAbout((a) => !a)}>
                    {about ? "Close" : "About"}
                </a>
            </div>
            {about && (
                <div className="App-about">
                    <p>
                        <i>wordle.gay</i> is a remake of the word game{" "}
                        <a href="https://www.powerlanguage.co.uk/wordle/">
                            <i>Wordle</i>
                        </a>
                        . I shamelessly stole the underlying code for this site from <a href="http://foldr.moe/hello-wordl/">chordbug's website</a>
                    </p>
                    <p>
                        You get {maxGuesses} tries to guess a target word.
                        <br />
                        After each guess, you get Mastermind-style feedback:
                    </p>
                    <p>
                        <Row
                            rowState={RowState.LockedIn}
                            wordLength={4}
                            cluedLetters={[
                                { clue: Clue.Absent, letter: "w" },
                                { clue: Clue.Absent, letter: "o" },
                                { clue: Clue.Correct, letter: "r" },
                                { clue: Clue.Elsewhere, letter: "d" },
                            ]}
                        />
                    </p>
                    <p>
                        <b>W</b> and <b>O</b> aren't in the target word at all.
                        <br />
                        <b>R</b> is correct! The third letter is <b>R</b>
                        .<br />
                        <b>D</b> occurs <em>elsewhere</em> in the target
                        word.
                    </p>
                    <p>
                        Let's move the <b>D</b> in our next guess:
                        <Row
                            rowState={RowState.LockedIn}
                            wordLength={4}
                            cluedLetters={[
                                { clue: Clue.Correct, letter: "d" },
                                { clue: Clue.Correct, letter: "a" },
                                { clue: Clue.Correct, letter: "r" },
                                { clue: Clue.Absent, letter: "k" },
                            ]}
                        />
                        So close!
                        <Row
                            rowState={RowState.LockedIn}
                            wordLength={4}
                            cluedLetters={[
                                { clue: Clue.Correct, letter: "d" },
                                { clue: Clue.Correct, letter: "a" },
                                { clue: Clue.Correct, letter: "r" },
                                { clue: Clue.Correct, letter: "t" },
                            ]}
                        />
                        Got it!
                    </p>
                    Report issues <a href="https://github.com/nicwineburger/wordle-website/issues">here</a>, or tweet <a href="https://twitter.com/baronblissy">@baronblissy</a>.
                </div>
            )}
            <Game maxGuesses={maxGuesses} hidden={about} />
        </div>
    );
}

export default App;
