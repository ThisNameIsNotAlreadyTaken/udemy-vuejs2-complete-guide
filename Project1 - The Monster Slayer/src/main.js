import Vue from 'vue';

function getDamage(min, max) {
    return Math.max(Math.floor(Math.random() * max) + 1, min);
}

new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        startGame() {
            this.gameIsRunning = true;
            this.playerHealth = this.monsterHealth = 100;
            this.turns = [];
        },
        attack() {
          let damage = getDamage(3, 10);
          this.monsterHealth -= damage;
          this.turns.unshift({
            isPlayer: true,
            text: `Player hits monster for ${damage}`
          });
          if (this.checkWin()) return;
          
          this.monsterAttack();
        },
        specialAttack() {
            let damage = getDamage(10, 20);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: `Player hits monster hard for ${damage}`
            });
            
            if (this.checkWin()) return;
            
            this.monsterAttack();
        },
        heal() {
            if (this.playerHealth <= 90) {
                this.playerHealth += 10;
            } else {
                this.playerHealth = 100;
            }
            this.turns.unshift({
                isPlayer: true,
                text: `Player heals for ${10}`
            });

            this.monsterAttack();
        },
        giveUp() {
            this.gameIsRunning = false;
        },
        monsterAttack() {
            let damage = getDamage(5, 12);
            this.playerHealth -= damage;
            this.turns.unshift({
                isPlayer: false,
                text: `Monster hits player for ${damage}`
            });
            this.checkWin();
        },
        checkWin() {
            if (this.monsterHealth <= 0) {
                if (confirm('You won! New game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else if (this.playerHealth <= 0) {
                if (confirm('You lost! New game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        }
    }
})