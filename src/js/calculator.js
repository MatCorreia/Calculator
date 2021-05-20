function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        cliqueBotoes() {
            document.addEventListener( 'click', e => {
                const el = e.target;

                if(el.classList.contains( 'btn-num' )) {
                    this.btnParaDisplay(el.innerText); // Adiciona o texto no display
                }

                if(el.classList.contains( 'btn-reset' )) {
                    this.clearDisplay(); // Reseta o texto do display
                }

                if(el.classList.contains( 'btn-del')) {
                    this.apagaUm(); // Apaga um número
                }

                if(el.classList.contains( 'btn-equal' )) {
                    this.realizaConta();
                }
            });
        },

        btnParaDisplay( valor ) {
            this.display.value += valor; /// Adiciona o texto no display 
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval( conta );

                if ( !conta ) {
                    alert( 'Conta Inválida!' )
                    return;
                } 

                this.display.value = conta;

            } catch( e ) {
                alert( 'Conta Inválida!' )
            }
        },

        pressionaEnter() {
            this.display.addEventListener( 'keypress', e => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            })
        }
    }
}

const calculadora = criaCalculadora();
calculadora.inicia();