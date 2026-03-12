const { useState, useEffect, useRef } = React;

function App() {
    const [score, setScore] = useState(0);
    const [gameDuration, setGameDuration] = useState(30);
    const [timeLeft, setTimeLeft] = useState(30);
    const [gameState, setGameState] = useState('menu'); // menu, waiting, playing, finished

    const [customTime, setCustomTime] = useState('');
    const [boxPosition, setBoxPosition] = useState({ top: 150, left: 150 });

    const MAX_WIDTH = 300;
    const MAX_HEIGHT = 300;

    useEffect(() => {
        let timer;
        if (gameState === 'playing' && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (timeLeft === 0 && gameState === 'playing') {
            setGameState('finished');
        }

        return () => clearInterval(timer);
    }, [gameState, timeLeft]);

    const startGame = () => {
        let duration = gameDuration;
        if (customTime) {
            const parsed = parseInt(customTime);
            if (!isNaN(parsed) && parsed > 0) {
                duration = parsed;
            }
        }

        setGameDuration(duration);
        setTimeLeft(duration);
        setScore(0);
        setBoxPosition({ top: 150, left: 150 });
        setGameState('waiting');
    };

    const backToMenu = () => {
        setGameState('menu');
        setScore(0);
        setCustomTime('');
    };

    const handleBoxClick = () => {
        if (gameState === 'finished') return;

        if (gameState === 'waiting') {
            setGameState('playing');
        }

        setScore((prev) => prev + 1);
        moveBox();
    };

    const moveBox = () => {
        const newLeft = Math.floor(Math.random() * MAX_WIDTH);
        const newTop = Math.floor(Math.random() * (MAX_HEIGHT-50));
        setBoxPosition({ top: newTop, left: newLeft });
    };

    const calculateSpeed = () => {
        if (gameDuration <= 0) return 0;
        return (score / gameDuration).toFixed(2);
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins < 10 ? '0' + mins : mins}:${secs < 10 ? '0' + secs : secs}`;
    };

    return (
        <div className="container">
            <div className="game-header">
                <h1>Ram vs Ravan: Final War</h1>
            </div>

            {/* MENU SCREEN */}
            {gameState === 'menu' && (
                <div className="overlay" style={{ background: 'transparent', position: 'relative', height: 'auto', border: 'none', padding: '0' }}>
                    <h2>Select Battle Duration</h2>
                    <div className="time-selector">
                        {[15, 30, 45, 60].map(t => (
                            <button
                                key={t}
                                className={`time-option ${gameDuration === t && !customTime ? 'active' : ''}`}
                                onClick={() => { setGameDuration(t); setCustomTime(''); }}
                            >
                                {t}s
                            </button>
                        ))}
                    </div>
                    <div className="custom-time-wrapper">
                        <span style={{ fontSize: '0.9rem', color: '#8B4513', fontWeight: 'bold' }}>Mortal Custom (Sec):</span>
                        <input
                            type="number"
                            className="custom-time-input"
                            placeholder="--"
                            value={customTime}
                            onChange={(e) => setCustomTime(e.target.value)}
                        />
                    </div>

                    <button className="btn" onClick={startGame} style={{ width: '220px', fontSize: '1.2rem', marginTop: '10px' }}>
                        Enter Battlefield
                    </button>
                </div>
            )}

            {/* GAME INTERFACE */}
            {gameState !== 'menu' && (
                <>
                    <div className="game-details">
                        <div className="stat-box">
                            <span className="stat-label">Demons Slain</span>
                            <span className="stat-value">{score}</span>
                        </div>
                        <div className="stat-box">
                            <span className="stat-label">Dharma Time</span>
                            <span className="stat-value">{formatTime(timeLeft)}</span>
                        </div>
                        <div className="stat-box">
                            <span className="stat-label">Arrow Speed</span>
                            <span className="stat-value">
                                {gameState === 'finished' ? `${calculateSpeed()} /s` : '-'}
                            </span>
                        </div>
                    </div>

                    <div className="game-area">
                        {gameState === 'finished' && (
                            <div className="overlay">
                                <h2>Victory!</h2>
                                <div style={{ marginBottom: '20px' }}>
                                    <p className="stat-value" style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Demons Slain: {score}</p>
                                    <p className="stat-value" style={{ fontSize: '1rem', color: '#B22222' }}>Arrow Speed: {calculateSpeed()} hits/s</p>
                                </div>
                                <div>
                                    <button className="btn" onClick={startGame}>Battle Again</button>
                                    <button className="btn btn-secondary" onClick={backToMenu}>Retreat</button>
                                </div>
                            </div>
                        )}

                        {gameState === 'waiting' && (
                            <div style={{
                                position: 'absolute',
                                top: '15px',
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                zIndex: 5,
                                pointerEvents: 'none'
                            }}>
                                <div className="instruction-pulse">
                                    🏹 Click Ravan to Attack! 🏹
                                </div>
                            </div>
                        )}

                        <div
                            className="main-box"
                            style={{
                                top: `${boxPosition.top}px`,
                                left: `${boxPosition.left}px`
                            }}
                            onClick={handleBoxClick}
                            title="Attack!"
                        >
                            👹
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('rootEle'));
root.render(<App />);
