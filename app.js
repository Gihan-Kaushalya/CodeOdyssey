 const secretNumber = Math.floor(Math.random() * 10) + 1;
        let attemptsLeft = 3;
        
        const guessInput = document.getElementById('guessInput');
        const submitBtn = document.getElementById('submitBtn');
        const message = document.getElementById('message');
        const attemptsDisplay = document.getElementById('attempts');
        
        submitBtn.addEventListener('click', checkGuess);
        guessInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkGuess();
            }
        });
        
        function checkGuess() {
            const userGuess = parseInt(guessInput.value);
            
            if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
                message.textContent = 'Please enter a valid number between 1 and 10';
                message.style.color = 'red';
                return;
            }
            
            attemptsLeft--;
            
            if (userGuess === secretNumber) {
                message.textContent = 'Congratulations! You guessed the correct number!';
                message.style.color = 'green';
                endGame();
            } else if (attemptsLeft === 0) {
                message.textContent = `Game over! The correct number was ${secretNumber}.`;
                message.style.color = 'red';
                endGame();
            } else {
                const hint = userGuess < secretNumber ? 'higher' : 'lower';
                message.textContent = `Wrong guess! Try a ${hint} number.`;
                message.style.color = 'orange';
                attemptsDisplay.textContent = `Attempts left: ${attemptsLeft}`;
            }
            
            guessInput.value = '';
            guessInput.focus();
        }
        
        function endGame() {
            guessInput.disabled = true;
            submitBtn.disabled = true;
            attemptsDisplay.textContent = `Attempts left: 0`;
        }