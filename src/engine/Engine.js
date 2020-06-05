const GameEngine = {
        jogo : {},
        plays : [],
        goals : {
            timeHome : [],
            timeAway : []
        },
        setJogo : function(homex, awayx) {
            // //debugger;
            
            let home = Object.assign({}, homex);
            let away = Object.assign({}, awayx);
            this.jogo = {
                timeHome: home,
                timeAway:away,
                jTimeHome: home.jogadores,
                jTimeAway:away.jogadores,
                
                posseBola: {
                    timeAtk: 'timeHome',
                    timeDef: 'timeAway',
                    jogador: 5,           //camisa do jogador com a bola
                    posicao : 5,
                },
                tempo: {
                    etapa: 1,
                    minuto: 0
                },
                encerrado : false,
                stats : {
                    'timeHome' : [],
                    'timeAway' : [],
                }
            },
            this.plays = [];
            this.goals = {
                timeHome : [],
                timeAway : []
            },
            this.initStats();
            return Object.assign({}, this);
        },
        rolaDado : function() {
            var dado = Math.floor(Math.random() * 6) + 1;
            return dado;
        },
        proximaJogada : function() {
            // //debugger;
            var timeBola = this.jogo[this.jogo.posseBola.timeAtk].jogadores;
            var jogadorBola = timeBola[this.jogo.posseBola.jogador];
        
            if (jogadorBola.camisa == timeBola[0].camisa) {
                // //debugger;
                this.goleiroRepoeBola(jogadorBola);
            } else {
                // jogadorBola.acoes[this.rolaDado()]();  
                //gamb
                if (typeof jogadorBola.acoes[this.rolaDado()] === "function") {
                    jogadorBola.acoes[this.rolaDado()]()
                } else {
                    this[jogadorBola.acoes[this.rolaDado()]](); //calling function by string name
                }
                // console.log(jogadorBola.acoes[this.rolaDado()]);
         
            }
        
        },
        controlaJogo : function() {

            // while (this.jogo.tempo.etapa <= 2) {
            
            if (this.jogo.tempo.etapa <= 2) {
        
                // this.jogo.tempo.minuto = 0;
                // for (let minuto = 0; minuto < (45 + this.randomNumber(4) ); minuto++) {
                // while (this.jogo.tempo.minuto < (45 + this.randomNumber(4))) {
                if (this.jogo.tempo.minuto < (45 + this.randomNumber(4))) {
                    this.jogo.tempo.minuto++;
                    return this.proximaJogada();
                    
                    // this.resetarTime();
                } 
                this.resetarTime();
        
        
                this.printaAcao('final do ' + this.jogo.tempo.etapa + ' tempo');
                this.jogo.tempo.etapa++;
                this.jogo.tempo.minuto = 0;
                return true;
            }
            this.printaAcao('Fim de jogo!');
            this.jogo.encerrado = true;
            this.printaAcao(this.jogo.timeHome.nome + ' ' + this.jogo.timeHome.placar + 'x' + this.jogo.timeAway.placar + ' ' + this.jogo.timeAway.nome);
        
        },
        marcaGol : function(jogadorNome){
            if(this.jogo.posseBola.timeAtk == 'timeHome'){
                this.goals.timeHome.push({
                    team : this.jogo[this.jogo.posseBola.timeAtk].nome,
                    minute : this.jogo.tempo.minuto,
                    text : jogadorNome,
                    fieldPosition : this.jogo.posseBola.posicao,
                    half: this.jogo.tempo.etapa
                });
            } else {
                this.goals.timeAway.push({
                    team : this.jogo[this.jogo.posseBola.timeAtk].nome,
                    minute : this.jogo.tempo.minuto,
                    text : jogadorNome,
                    fieldPosition : this.jogo.posseBola.posicao
                });
            }
            
        },
        printaAcao : function(jogada) {
            this.plays.unshift({
                team : this.jogo.posseBola.timeAtk,
                minute : this.jogo.tempo.minuto,
                text : jogada,
                fieldPosition : this.jogo.posseBola.posicao,
                bg1 : this.jogo[this.jogo.posseBola.timeAtk].cores.principal,
                bg2 : this.jogo[this.jogo.posseBola.timeAtk].cores.secundaria
            });
            // var p = document.createElement('p');
            // var texto = document.createTextNode(this.jogo.tempo.minuto + '" ' + jogada + '('+ this.jogo.posseBola.posicao +')');
            // p.appendChild(texto);
            // document.getElementById("result").appendChild(p).setAttribute("style", "background:" + this.jogo[this.jogo.posseBola.timeAtk].cores.principal + "; color:" + this.jogo[this.jogo.posseBola.timeAtk].cores.secundaria + "; border: 1px solid" + this.jogo[this.jogo.posseBola.timeAtk].cores.secundaria + " blue;");
        },
        initStats : function(){
            this.jogo.timeHome.jogadores.forEach((jogador) => {
                this.jogo.stats.timeHome.push({
                    'corrida' : {
                        'tentativas' : 0,
                        'concluidas' : 0,
                        'perfeitas'  : 0,
                        'falha'      : 0
                    },
                    'toque' : {
                        'tentativas' : 0,
                        'concluidas' : 0,
                        'perfeitas'  : 0,
                        'falha'      : 0
                    },
                    'lancamento' : {
                        'tentativas' : 0,
                        'concluidas' : 0,
                        'perfeitas'  : 0,
                        'falha'      : 0
                    },
                    'drible' : {
                        'tentativas' : 0,
                        'concluidas' : 0,
                        'perfeitas'  : 0,
                        'falha'      : 0
                    },
                    'drible' : {
                        'tentativas' : 0,
                        'concluidas' : 0,
                        'perfeitas'  : 0,
                        'falha'      : 0
                    },
                    'chute' : {
                        'tentativas' : 0,
                        'concluidas' : 0,
                        'perfeitas'  : 0,
                        'falha'      : 0
                    },
                    'cabeceio' : {
                        'tentativas' : 0,
                        'concluidas' : 0,
                        'perfeitas'  : 0,
                        'falha'      : 0
                    },
                    'disputa' : {
                        'tentativas' : 0,
                        'concluidas' : 0,
                        'perfeitas'  : 0,
                        'falha'      : 0
                    },
                    'carrinho' : {
                        'tentativas' : 0,
                        'concluidas' : 0,
                        'perfeitas'  : 0,
                        'falha'      : 0
                    },      
                })
            });
        
            this.jogo.timeAway.jogadores.forEach((jogador) => {
                this.jogo.stats.timeAway.push({
                    'corrida' : {
                        'tentativas' : 0,
                        'concluidas' : 0,
                        'perfeitas'  : 0,
                        'falha'      : 0
                    },
                    'toque' : {
                        'tentativas' : 0,
                        'concluidas' : 0,
                        'perfeitas'  : 0,
                        'falha'      : 0
                    },
                    'lancamento' : {
                        'tentativas' : 0,
                        'concluidas' : 0,
                        'perfeitas'  : 0,
                        'falha'      : 0
                    },
                    'drible' : {
                        'tentativas' : 0,
                        'concluidas' : 0,
                        'perfeitas'  : 0,
                        'falha'      : 0
                    },
                    'drible' : {
                        'tentativas' : 0,
                        'concluidas' : 0,
                        'perfeitas'  : 0,
                        'falha'      : 0
                    },
                    'chute' : {
                        'tentativas' : 0,
                        'concluidas' : 0,
                        'perfeitas'  : 0,
                        'falha'      : 0
                    },
                    'cabeceio' : {
                        'tentativas' : 0,
                        'concluidas' : 0,
                        'perfeitas'  : 0,
                        'falha'      : 0
                    },
                    'disputa' : {
                        'tentativas' : 0,
                        'concluidas' : 0,
                        'perfeitas'  : 0,
                        'falha'      : 0
                    },
                    'carrinho' : {
                        'tentativas' : 0,
                        'concluidas' : 0,
                        'perfeitas'  : 0,
                        'falha'      : 0
                    },  
                })
            });
        },
        mensuraJogada: function(time, indexJogador, acao, status){
            // this.jogo.stats[time][indexJogador][acao].tentativas++;
            // if(status == 'sucesso'){
            //     this.jogo.stats[time][indexJogador][acao].concluidas++;
            // }
            // if(status == 'perfeita'){
            //     this.jogo.stats[time][indexJogador][acao].perfeitas++;
            // }
            // if(status == 'falha'){
            //     this.jogo.stats[time][indexJogador][acao].falha++;
            // }
        },
        toque: function (perfeito="false") {
            ////debugger;
            var timeBola = this.jogo[this.jogo.posseBola.timeAtk].jogadores;
            var jogadorBola = timeBola[this.jogo.posseBola.jogador];
            var casaAlvo = parseInt(jogadorBola.posicao) + 1;
            var envolvidos = this.buscaJogadorCampo(casaAlvo);


            //caso não tenha ninguem na casa a frente, toca pro lado;
            if (envolvidos.atk.length == 0) {
                casaAlvo = parseInt(jogadorBola.posicao);
                envolvidos = this.buscaJogadorCampo(casaAlvo);
            }

            //caso não tenha ninguem na casa ao lado, toca pra trás;
            if (envolvidos.atk.length == 0) {
                casaAlvo = parseInt(jogadorBola.posicao) - 1;
                envolvidos = this.buscaJogadorCampo(casaAlvo);
            }

            //caso não tenha ninguem na casa a frente;
            if (envolvidos.atk.length == 0) {
                this.invertePosse(this.buscaJogadorCampoDef(jogadorBola.posicao[0]));
                this.printaAcao("sem opções, ele erra o passe");
                this.mensuraJogada(jogadorBola.time, this.getIndexByCamisa(timeBola, jogadorBola.camisa), 'toque', 'falha');
                return false;
            }

            var JogadorAlvo = envolvidos.atk[[this.randomNumber(envolvidos.atk.length)]];
            var indexJogadorAlvo = this.getIndexByCamisa(timeBola, JogadorAlvo.camisa);

            //passe perfeito
            this.printaAcao(jogadorBola.nome + ' está com a bola')


            if ( parseInt(jogadorBola.habilidades.toque) + this.randomNumber(10) < this.randomNumber(20) + this.getForcaDefesaCarrinho() || perfeito ) {
                /* a ação */
                this.jogo.posseBola.jogador = indexJogadorAlvo;
                this.jogo.posseBola.posicao = JogadorAlvo.posicao;

                this.printaAcao("acerta um passe perfeito para " + timeBola[indexJogadorAlvo].nome);

                this.mensuraJogada(jogadorBola.time, this.getIndexByCamisa(timeBola, jogadorBola.camisa), 'toque', 'perfeito');
            }
            //passe contestavel
            else {
                var tentouCortar = false;
                var acaoDefesa = '';
                var jogadorDef = '';
                envolvidos.def.forEach(jogador => {
                    if (!tentouCortar) {
                        acaoDefesa = this.tentaCorte(jogador);
                        tentouCortar = acaoDefesa.bool;
                        jogadorDef = jogador;
                    }
                });
                if (!tentouCortar) {
                    /* a ação */
                    this.jogo.posseBola.jogador = indexJogadorAlvo;
                    this.jogo.posseBola.posicao = JogadorAlvo.posicao;
                    this.printaAcao('faz o passe para ' + timeBola[indexJogadorAlvo].nome);
                    this.mensuraJogada(jogadorBola.time, this.getIndexByCamisa(timeBola, jogadorBola.camisa), 'toque', 'sucesso');
                } else {
                    // acaoDefesa.funcao();
                    if (acaoDefesa.funcao == 'carrinho') {
                        this.printaAcao(jogadorDef.nome + 'tenta o corte');
                        acaoDefesa.carrinho(jogadorDef);
                        this.mensuraJogada(jogadorBola.time, this.getIndexByCamisa(timeBola, jogadorBola.camisa), 'toque', 'falha');
                    } else if (acaoDefesa.funcao == 'disputa') {
                        acaoDefesa.disputa(jogadorAlvo, jogadorDef);
                        this.mensuraJogada(jogadorBola.time, this.getIndexByCamisa(timeBola, jogadorBola.camisa), 'toque', 'falha');
                    }

                }
            }
            return true;
        },

        tentaCorte: function (jogador) {
            // //debugger;

            var timeBola = this.jogo[this.jogo.posseBola.timeAtk].jogadores;
            var jogadorBola = timeBola[this.jogo.posseBola.jogador];
            // mock function()
            var dado = this.rolaDado();
            var acao = jogador.acoes[dado];
            var returning = {};
            // console.log(acao);

            // if (acao == carrinho || acao == 'carrinho') {
            if (acao == 'carrinho') {
                returning = {
                    'bool': true,
                    'funcao': this.carrinho
                }
            // } else if (acao == disputa || acao == 'disputa') {
            } else if (acao == 'disputa') {
                returning = {
                    'bool': true,
                    'funcao': this.disputa
                }
            }
            else {
                returning = {
                    bool: false
                }
            }
            return returning;
        },

        corrida: function (perfeito="false") {
            var goleiro = this.jogo[this.jogo.posseBola.timeDef].jogadores[0];
            var timeBola = this.jogo[this.jogo.posseBola.timeAtk].jogadores;
            var jogadorBola = timeBola[this.jogo.posseBola.jogador];
            var casaAlvo = jogadorBola.posicao;
            var envolvidos = this.buscaJogadorCampo(casaAlvo);

            this.printaAcao(jogadorBola.nome + ' dá um tapa na frente e tenta avançar');
            if (jogadorBola.posicao == 8) {
                this.printaAcao('Mas sai com bola e tudo, e é tiro de meta');
                // //debugger;
                this.mensuraJogada(jogadorBola.time, this.getIndexByCamisa(timeBola, jogadorBola.camisa), 'corrida', 'falha')
                this.invertePosse(goleiro);
                this.tiroMeta(goleiro);
                return false;
            }


            //caso não tenha ninguem na casa a frente;
            if (envolvidos.def.length == 0) {
                /*a acao */
                timeBola[this.jogo.posseBola.jogador].posicao++;
                this.jogo.posseBola.posicao = timeBola[this.jogo.posseBola.jogador].posicao;
                this.printaAcao(jogadorBola.nome + " avança com a bola");
                this.mensuraJogada(jogadorBola.time, this.getIndexByCamisa(timeBola, jogadorBola.camisa), 'corrida', 'sucesso')
                return true;
            }


            //corrida perfeita

            if ( parseInt(jogadorBola.habilidades.corrida) + this.randomNumber(10) < this.randomNumber(20) + this.getForcaDefesaCorrida() || perfeito ) {
                /* a ação */
                this.printaAcao(jogadorBola.nome + ' segue sem marcação e avança');
                timeBola[this.jogo.posseBola.jogador].posicao++;
                this.jogo.posseBola.posicao = timeBola[this.jogo.posseBola.jogador].posicao;
                this.printaAcao(jogadorBola.nome + " avança com a bola");
                this.mensuraJogada(jogadorBola.time, this.getIndexByCamisa(timeBola, jogadorBola.camisa), 'corrida', 'perfeita')
                return true;
            }
            //corrida contestável
            else {
                var tentouCortar = false;
                var jogadorDef = false;
                var acaoDefesa = '';
                envolvidos.def.forEach(jogador => {
                    if (!tentouCortar) {
                        acaoDefesa = this.tentaCorte(jogador);
                        tentouCortar = acaoDefesa.bool;
                        jogadorDef = jogador;
                    }
                });
                if (!tentouCortar) {
                    /* a ação */
                    this.printaAcao(jogadorBola.nome + ' consegue escapar da marcação e segue com ela');
                    console.log(jogadorDef);
                    timeBola[this.jogo.posseBola.jogador].posicao++;
                    // //debugger;
                    this.jogo.posseBola.posicao = timeBola[this.jogo.posseBola.jogador].posicao;
                    this.printaAcao(jogadorBola.nome + " avança com a bola");
                    this.mensuraJogada(jogadorBola.time, this.getIndexByCamisa(timeBola, jogadorBola.camisa), 'corrida', 'sucesso');
                } else {
                    // acaoDefesa.funcao();
                    if (acaoDefesa.funcao == 'carrinho') {
                        acaoDefesa.carrinho(jogadorDef);
                        this.mensuraJogada(jogadorBola.time, this.getIndexByCamisa(timeBola, jogadorBola.camisa), 'corrida', 'falha');
                    } else if (acaoDefesa.funcao == 'disputa') {
                        acaoDefesa.disputa(jogadorBola, jogadorDef);
                        this.mensuraJogada(jogadorBola.time, this.getIndexByCamisa(timeBola, jogadorBola.camisa), 'corrida', 'falha');
                    }
                }
            }
            return true;
        },

        chute: function (perfeito) {
            var timeBola = this.jogo[this.jogo.posseBola.timeAtk].jogadores;
            var jogadorBola = timeBola[this.jogo.posseBola.jogador];
            var goleiro = this.jogo[this.jogo.posseBola.timeDef].jogadores[0];


            // ////debugger;
            var necessarioDado = null; //numero necessario para a ação ser concluida

            switch (parseInt(jogadorBola.posicao)) {
                case 5:
                    necessarioDado = 1;
                case 6:
                    necessarioDado = 3;
                    break;
                case 7:
                    necessarioDado = 5;
                    break;
                case 8:
                    necessarioDado = 8;
                    break;

                default:
                    necessarioDado = 0;
                    break;
            }

            if (necessarioDado == 0) {
                this.printaAcao(jogadorBola.nome + ' isola a bola para frente!');
                this.rifaBola(parseInt(jogadorBola.posicao) + 2);
                return false;
            }

            this.printaAcao(jogadorBola.nome + ' chutou!');
            //rola o dado para ver se a ação deu bom ou nao
            // //debugger;
            if (this.randomNumber(10) <= necessarioDado) {
                this.printaAcao('a bola vai em direção ao gol');
                this.mensuraJogada(jogadorBola.time, this.getIndexByCamisa(timeBola, jogadorBola.camisa), 'chute', 'sucesso');
                // goleiro.acoes[this.rolaDado()](jogadorBola);
                // //debugger
                if (typeof goleiro.acoes[this.rolaDado()] === "function") {
                    goleiro.acoes[this.rolaDado()](jogadorBola)
                } else {
                    this[goleiro.acoes[this.rolaDado()]](jogadorBola); //calling function by string name
                }
            } else {
                this.printaAcao('PRA FORA');
                this.mensuraJogada(jogadorBola.time, this.getIndexByCamisa(timeBola, jogadorBola.camisa), 'chute', 'falha');
                this.invertePosse(goleiro);
                this.tiroMeta(goleiro);
            }


        },


        lancamento: function (perfeito="false") {
            ////debugger;
            var timeBola = this.jogo[this.jogo.posseBola.timeAtk].jogadores;
            var jogadorBola = timeBola[this.jogo.posseBola.jogador];
            var casaAlvo = parseInt(jogadorBola.posicao) + 2;
            var envolvidos = this.buscaJogadorCampo(casaAlvo);

            //caso não tenha ninguem 2 casas a frente, toca 1 casa a frente;
            if (envolvidos.atk.length == 0) {
                casaAlvo = parseInt(jogadorBola.posicao) + 1;
                envolvidos = this.buscaJogadorCampo(casaAlvo);

            }

            //caso não tenha ninguem na casa a frente, toca pro lado;
            if (envolvidos.atk.length == 0) {
                casaAlvo = parseInt(jogadorBola.posicao);
                envolvidos = this.buscaJogadorCampo(casaAlvo);
            }

            //caso nao tenha ninguem na casa ao lado;
            if (envolvidos.atk.length == 0) {
                this.invertePosse(this.buscaJogadorCampoDef(jogadorBola.posicao[0]));
                this.mensuraJogada(jogadorBola.time, this.getIndexByCamisa(timeBola, jogadorBola.camisa), 'lancamento', 'falha');
                return false;
            }

            var camisaJogadorAlvo = envolvidos.atk[[this.randomNumber(envolvidos.atk.length)]].camisa;
            var jogadorAlvo = this.getIndexByCamisa(timeBola, camisaJogadorAlvo);

            
            this.printaAcao(jogadorBola.nome + ' está com a bola')

            //passe perfeito
            if (parseInt(jogadorBola.habilidades.lancamento) + this.randomNumber(10) < this.randomNumber(30) + this.getForcaDefesaCarrinho()) {
                /* a ação */
                this.jogo.posseBola.jogador = jogadorAlvo;
                this.jogo.posseBola.posicao = timeBola[jogadorAlvo].posicao;
                this.printaAcao("acerta um lançamento perfeito para " + timeBola[jogadorAlvo].nome);
                this.mensuraJogada(jogadorBola.time, this.getIndexByCamisa(timeBola, jogadorBola.camisa), 'lancamento', 'perfeito');
            }
            //passe contestavel
            else {
                var tentouCortar = false;
                var acaoDefesa = '';
                var jogadorDef = '';
                envolvidos.def.forEach(jogador => {
                    if (!tentouCortar) {
                        acaoDefesa = this.tentaCorte(jogador);
                        tentouCortar = acaoDefesa.bool;
                        jogadorDef = jogador;
                    }
                });
                if (!tentouCortar) {
                    /* a ação */
                    this.jogo.posseBola.jogador = jogadorAlvo;
                    this.jogo.posseBola.posicao = timeBola[jogadorAlvo].posicao;
                    this.printaAcao('faz o lançamento para ' + timeBola[jogadorAlvo].nome);
                    this.mensuraJogada(jogadorBola.time, this.getIndexByCamisa(timeBola, jogadorBola.camisa), 'lancamento', 'sucesso');
                    if (timeBola[jogadorAlvo].posicao == 8) {
                        this.cabecada(timeBola[jogadorAlvo]);
                    }
                } else {
                    // acaoDefesa.funcao();
                    if (acaoDefesa.funcao == 'carrinho') {
                        acaoDefesa.carrinho(jogadorDef);
                        this.mensuraJogada(jogadorBola.time, this.getIndexByCamisa(timeBola, jogadorBola.camisa), 'lancamento', 'falha');
                    } else if (acaoDefesa.funcao == 'disputa') {
                        acaoDefesa.disputa(jogadorAlvo, jogadorDef);
                        this.mensuraJogada(jogadorBola.time, this.getIndexByCamisa(timeBola, jogadorBola.camisa), 'lancamento', 'falha');
                    }
                }
            }
            return true;
        },

        drible: function () {
            var timeBola = this.jogo[this.jogo.posseBola.timeAtk].jogadores;
            var jogadorBola = timeBola[this.jogo.posseBola.jogador];
            var casaAlvo = parseInt(jogadorBola.posicao);
            var defensores = this.buscaJogadorCampoDef(casaAlvo);
            var jogadorDef = defensores[this.randomNumber(defensores.length)];

            this.printaAcao(jogadorBola.nome + ' ginga pra cima de '+ jogadorDef.nome +' e tenta o drible');

            if( parseInt(jogadorBola.habilidades.drible) + this.randomNumber(20) > parseInt(jogadorDef.habilidades.carrinho) + this.randomNumber(20) ){
                //caso o drible seja feito, automaticamente faz uma nova ação
                this.printaAcao(jogadorBola.nome + ' ultrapassa '+ jogadorDef.nome);

                
                //dependendo da região do campo, o jogador pode fazer uma das seguintes ações
                var acoesPossiveis = [];
                if(jogadorBola.posicao <= 5){
                    acoesPossiveis = [this.toque,this.lancamento, this.corrida, this.falta];
                }
                if(jogadorBola.posicao > 5 && jogadorBola.posicao < 8){
                    acoesPossiveis = [this.toque,this.lancamento, this.corrida, this.chute, this.falta];
                } else{
                    acoesPossiveis = [this.chute, this.falta];
                }

                //sorteia uma das ações possiveis e a executa
                var acaoRealizada = this.acoesPossiveis[this.randomNumber(this.acoesPossiveis.length)];
                console.log(acaoRealizada);

                acaoRealizada(true);
            } else{
                //caso não de certo, o time perde a bola
                this.printaAcao(jogadorDef.nome + ' se antecipa e faz o corte!');
                this.invertePosse(jogadorDef);
            }

            return false;
        },

        carrinho: function (jogadorDef) {
            // //debugger;
            if (!jogadorDef) {

                var posicaoBusca = this.jogo[this.jogo.posseBola.timeAtk].jogadores[this.jogo.posseBola.jogador].posicao;
                jogadorDef = this.buscaJogadorCampoDef(9 - posicaoBusca);
                //se o não houver nenhum jogador de defesa no campo, sai da função
                if (jogadorDef.length == 0) {
                    return true;
                } else {
                    jogadorDef = jogadorDef[this.randomNumber(jogadorDef.length)];
                }

            }
            if (this.randomNumber(25) < parseInt(jogadorDef.habilidades.carrinho)) {
                this.printaAcao('carrinho bem executado e ' + jogadorDef.nome + ' rouba a bola');
                this.mensuraJogada(jogadorDef.time, this.getIndexByCamisa(this.jogo[this.jogo.posseBola.timeDef].jogadores, jogadorDef.camisa), 'carrinho', 'sucesso');
                this.invertePosse(jogadorDef);
            } else {
                this.printaAcao('' + jogadorDef.nome + ' tenta o carrinho e faz a falta');
                this.mensuraJogada(jogadorDef.time, this.getIndexByCamisa(this.jogo[this.jogo.posseBola.timeDef].jogadores, jogadorDef.camisa), 'carrinho', 'falha');
                return this.falta(jogadorDef);
            }
            console.log('carrinho')
            return true;
        },

        disputa: function (pAtk, pDef) {
            // //debugger;
            //se for chamado sem jogador de atk, é o que está com a bola

            if (!pAtk) {
                pAtk = this.jogo[this.jogo.posseBola.timeAtk].jogadores[this.jogo.posseBola.jogador];
            }
            // se for chamado sem jogador de defesa, sorteia algum do campo em disputa
            if (!pDef) {
                var posicaoBusca = this.jogo[this.jogo.posseBola.timeAtk].jogadores[this.jogo.posseBola.jogador].posicao;
                pDef = this.buscaJogadorCampoDef(9 - posicaoBusca);
                //se o não houver nenhum jogador de defesa no campo, sai da função
                if (pDef.length == 0) {
                    return true;
                } else {
                    pDef = pDef[this.randomNumber(pDef.length)];
                }
            }
            this.printaAcao(pDef.nome + ' divide a bola com ' + pAtk.nome);
            var dadoAtk = parseInt(pAtk.habilidades.forca) + this.randomNumber(25);
            var dadoDef = parseInt(pDef.habilidades.forca) + this.randomNumber(25);
            if (dadoAtk > dadoDef) {
                this.printaAcao(pAtk.nome + ' ganha a bola e fica com a bola!');
                this.mensuraJogada(pAtk.time, this.getIndexByCamisa(this.jogo[this.jogo.posseBola.timeAtk].jogadores, pAtk.camisa), 'disputa', 'sucesso');
                this.mensuraJogada(pDef.time, this.getIndexByCamisa(this.jogo[this.jogo.posseBola.timeDef].jogadores, pDef.camisa), 'disputa', 'falha');
            } else {
                var goleiro = this.jogo[this.jogo.posseBola.timeDef].jogadores[0];
                if (pDef.camisa == goleiro.camisa) {
                    this.printaAcao(pDef.nome + ' sai e faz a defesa');
                    this.mensuraJogada(pAtk.time, this.getIndexByCamisa(this.jogo[this.jogo.posseBola.timeAtk].jogadores, pAtk.camisa), 'disputa', 'falha');
                    this.mensuraJogada(pDef.time, this.getIndexByCamisa(this.jogo[this.jogo.posseBola.timeDef].jogadores, pDef.camisa), 'disputa', 'sucesso');
                    this.invertePosse(pDef);
                    this.tiroMeta(goleiro);
                    return true;
                }
                this.printaAcao(pDef.nome + ' vence no ombro e rouba a bola!');
                this.mensuraJogada(pAtk.time, this.getIndexByCamisa(this.jogo[this.jogo.posseBola.timeAtk].jogadores, pAtk.camisa), 'disputa', 'falha');
                this.mensuraJogada(pDef.time, this.getIndexByCamisa(this.jogo[this.jogo.posseBola.timeDef].jogadores, pDef.camisa), 'disputa', 'sucesso');
                this.invertePosse(pDef);
            }


            return true;
        },

        resetarTime: function () {
            // //debugger;
            this.jogo.timeHome.jogadores = $.extend(true, [], this.jogo.jTimeHome);
            this.jogo.timeAway.jogadores = $.extend(true, [], this.jogo.jTimeAway);
            return false;
        },

        posGol: function () {
            // //debugger;

            var novoAtkTemp = this.jogo.posseBola.timeDef;
            this.jogo.posseBola.timeDef = this.jogo.posseBola.timeAtk;
            this.jogo.posseBola.timeAtk = novoAtkTemp;
            this.resetarTime();
            this.jogo.posseBola.jogador = 5;
            this.jogo.posseBola.posicao = 4;
            this.printaAcao('volta o jogo');
        },

        corner: function () {
            ////debugger;
            this.resetarTime();
            var envolvidos = this.buscaJogadorCampo(8);
            var pAtk = envolvidos.atk[this.randomNumber(envolvidos.atk.length)];
            var pDef = envolvidos.def[this.randomNumber(envolvidos.def.length)];
            var dadoAtk = parseInt(pAtk.habilidades.jogoAereo) + this.randomNumber(25);
            var dadoDef = parseInt(pDef.habilidades.jogoAereo) + this.randomNumber(25);
            this.printaAcao('É escanteio!');
            // this.printaAcao('');
            if (dadoAtk > dadoDef) {
                this.printaAcao(pAtk.nome + 'tenta o cabeçeio');
                this.mensuraJogada(pAtk.time, this.getIndexByCamisa(this.jogo[this.jogo.posseBola.timeAtk].jogadores, pAtk.camisa), 'cabeceio', 'sucesso');
                this.mensuraJogada(pDef.time, this.getIndexByCamisa(this.jogo[this.jogo.posseBola.timeDef].jogadores, pDef.camisa), 'cabeceio', 'falha');
                this.cabecada(pAtk);
            } else {
                this.printaAcao(pDef.nome + 'tira de cabeça');
                this.mensuraJogada(pAtk.time, this.getIndexByCamisa(this.jogo[this.jogo.posseBola.timeAtk].jogadores, pAtk.camisa), 'cabeceio', 'falha');
                this.mensuraJogada(pDef.time, this.getIndexByCamisa(this.jogo[this.jogo.posseBola.timeDef].jogadores, pDef.camisa), 'cabeceio', 'sucesso');
                this.rifaBola(7);
                return false;
                // this.invertePosse(pDef);
            }
            return true;
        },

        rifaBola: function (posicaoAtk) {
            // debugger;
            this.resetarTime();
            var goleiro = this.jogo[this.jogo.posseBola.timeDef].jogadores[0];
            // //debugger;
            var envolvidos = this.buscaJogadorCampo(posicaoAtk);
            envolvidos = envolvidos.atk.concat(envolvidos.def);
            if (envolvidos.length == 0) {
                if (posicaoAtk > 8) {

                    this.invertePosse(goleiro);
                    this.tiroMeta(goleiro);
                    return false;
                };
                this.rifaBola(posicaoAtk + 1);
                return false;
            }

            var comBola = this.randomNumber(envolvidos.length);
            envolvidos[comBola];

            //

            //debugger;
            if (envolvidos[comBola].time == this.jogo.posseBola.timeAtk) {
                this.jogo.posseBola.jogador = this.getIndexByCamisa(this.jogo[this.jogo.posseBola.timeAtk].jogadores, envolvidos[comBola].camisa);
                this.jogo.posseBola.posicao = envolvidos[comBola].posicao;

            } else {
                // this.jogo.posseBola.jogador = this.getIndexByCamisa( this.jogo[this.jogo.posseBola.timeDef].jogadores, envolvidos[comBola].camisa );
                // this.jogo.posseBola.posicao = envolvidos[comBola].posicao;

                this.invertePosse(envolvidos[comBola]);

            }
            this.printaAcao(envolvidos[comBola].nome + ' fica com a bola');
            return false;

        },

        falta: function (perfeito="false") {
            ////debugger;
            var timeBola = this.jogo[this.jogo.posseBola.timeAtk].jogadores;
            var jogadorBola = timeBola[this.jogo.posseBola.jogador];
            this.resetarTime();

            // this.proximaJogada();
            if (jogadorBola.posicao == 8) {
                this.penalti(jogadorBola);
            } else {
                // jogadorBola.acoes[this.rolaDado()]();
                if (typeof jogadorBola.acoes[this.rolaDado()] === "function") {
                    jogadorBola.acoes[this.rolaDado()]()
                } else {
                    this[jogadorBola.acoes[this.rolaDado()]](); //calling function by string name
                }
            }

        },

        penalti: function (jogadorBola) {
            //debugger;
            this.printaAcao('é penalti!');
            var goleiro = this.jogo[this.jogo.posseBola.timeDef].jogadores[0];

            var forcaGoleiro = parseInt(goleiro.habilidades.penalti) + this.randomNumber(15);
            var forcaChute = parseInt(jogadorBola.habilidades.chute) + this.randomNumber(35);

            this.printaAcao(jogadorBola.nome + ' vai para o chute');
            if (forcaGoleiro >= forcaChute) {
                /*a acao */
                this.printaAcao('Defende ' + goleiro.nome);
                this.invertePosse(this.jogo[this.jogo.posseBola.timeDef].jogadores[0]);

            } else {
                this.gol(jogadorBola.nome);

            }
        },

        tiroMeta: function (goleiro) {
            ////debugger;
            this.resetarTime();
            this.printaAcao(goleiro.nome + " recoloca a bola em jogo");
            var random = this.randomNumber(3);
            this.rifaBola(random + 1);
            return false;

        },
        gol: function (jogadorNome) {
            // //debugger;
            this.printaAcao('OLHUGOOL');
            this.marcaGol(jogadorNome);

            if (this.jogo.posseBola.timeAtk == 'timeHome') {
                this.jogo.timeHome.placar++;
            } else {
                this.jogo.timeAway.placar++;
            }
            this.posGol();
        },

        defende: function (jogadorBola) {
            ////debugger;
            var timeBola = this.jogo[this.jogo.posseBola.timeAtk].jogadores;
            var jogadorBola = timeBola[this.jogo.posseBola.jogador];

            var goleiro = this.jogo[this.jogo.posseBola.timeDef].jogadores[0];

            var forcaGoleiro = parseInt(goleiro.habilidades.defende) + this.randomNumber(30);
            var forcaChute = parseInt(jogadorBola.habilidades.chute) + this.randomNumber(20);

            if (forcaGoleiro >= forcaChute) {
                /*a acao */
                this.printaAcao(goleiro.nome + ' defende firme');
                this.invertePosse(this.jogo[this.jogo.posseBola.timeDef].jogadores[0]);
                return true;
            } else {
                this.gol(jogadorBola.nome);
            }

        },

        rebote: function () {
            ////debugger;
            this.printaAcao('bola tá viva dentro da área !');
            var envolvidos = this.buscaJogadorCampo(8);
            // ////debugger;
            if (envolvidos.atk.length == 0) {
                this.printaAcao('e ele pega em 2 tempos e fica tranquilo com ela');
                this.invertePosse(this.jogo[this.jogo.posseBola.timeDef].jogadores[0]);

            }
            if (envolvidos.atk.length > 0) {

                if (envolvidos.def.length == 1) {
                    // //debugger;
                    // this.jogo.posseBola.jogador = envolvidos.atk[0].camisa;
                    this.jogo.posseBola.jogador = this.getIndexByCamisa(this.jogo[this.jogo.posseBola.timeAtk].jogadores, envolvidos.atk[0].camisa);
                    this.jogo.posseBola.posicao = envolvidos.atk[0].posicao;
                    this.printaAcao('cai nos pés do centrovante que já tenta o chute! ');
                    this.chute();
                } else {
                    var envolvidoAtk = envolvidos.atk[this.randomNumber(envolvidos.atk.length)];
                    var envolvidoDef = envolvidos.def[this.randomNumber(envolvidos.def.length)];
                    this.disputa(envolvidoAtk, envolvidoDef);
                }
            } else {
                var goleiro = this.jogo[this.jogo.posseBola.timeDef].jogadores[0];
                this.printaAcao('e sobra tranquila nas mãos do goleiro');
                this.invertePosse(goleiro);
                this.tiroMeta(goleiro);
            }

        },

        espalma: function (jogadorBola) {
            var timeBola = this.jogo[this.jogo.posseBola.timeAtk].jogadores;
            var jogadorBola = timeBola[this.jogo.posseBola.jogador];
            var goleiro = this.jogo[this.jogo.posseBola.timeDef].jogadores[0];


            var forcaGoleiro = parseInt(goleiro.habilidades.espalma) + this.randomNumber(30);

            var forcaChute = parseInt(jogadorBola.habilidades.chute) + this.randomNumber(20);

            if (forcaGoleiro >= forcaChute) {
                /*a acao */
                this.printaAcao('espaaalma ' + goleiro.nome);
                this.rebote();
            } else {
                this.gol(jogadorBola.nome);
            }

        },

        espalmaFora: function () {
            var timeBola = this.jogo[this.jogo.posseBola.timeAtk].jogadores;
            var jogadorBola = timeBola[this.jogo.posseBola.jogador];
            var goleiro = this.jogo[this.jogo.posseBola.timeDef].jogadores[0];

            var forcaGoleiro = parseInt(goleiro.habilidades.espalmaFora) + this.randomNumber(30);
            var forcaChute = parseInt(jogadorBola.habilidades.chute) + this.randomNumber(20);

            if (forcaGoleiro >= forcaChute) {
                this.printaAcao(goleiro.nome + ' poe pra escanteio!');
                /*a acao */
                this.corner();
            } else {
                this.gol(jogadorBola.nome);
            }

        },
        cabecada: function (jogadorBola) {
            var goleiro = this.jogo[this.jogo.posseBola.timeDef].jogadores[0];


            var forcaGoleiro = goleiro.habilidades.jogoAereo + this.randomNumber(30);
            var forcaCabecada = jogadorBola.habilidades.jogoAereo + this.randomNumber(20);


            if (forcaGoleiro >= forcaCabecada) {
                this.printaAcao(goleiro.nome + ' defende!');
                /*a acao */
                this.invertePosse(this.jogo[this.jogo.posseBola.timeDef].jogadores[0]);
            } else {
                this.gol(jogadorBola.nome);
            }

        },

        buscaJogadorCampo: function (numeroCasa) {
            var arrAtk = this.buscaJogadorCampoAtk(numeroCasa);
            var arrDef = this.buscaJogadorCampoDef(9 - numeroCasa);

            return {
                'atk': arrAtk,
                'def': arrDef
            }
        },

        buscaJogadorCampoAtk: function (numeroCasa) {
            ////debugger;
            //apenas para encurtar a variavel
            var timeBola = this.jogo[this.jogo.posseBola.timeAtk].jogadores;

            var jogadoresNaCasa = [];

            timeBola.forEach(function (element) {
                if (element.posicao == numeroCasa) {
                    // console.log(element);
                    jogadoresNaCasa.push(element);
                }
            });

            // console.table(jogadoresNaCasa);

            return jogadoresNaCasa;
        },

        buscaJogadorCampoDef: function (numeroCasa) {
            ////debugger;
            var timeBola;
            //apenas para encurtar a variavel
            if (this.jogo.posseBola.timeAtk == 'timeHome') {
                timeBola = this.jogo['timeAway'].jogadores;
            } else {
                timeBola = this.jogo['timeHome'].jogadores;
            }

            var jogadoresNaCasa = [];

            timeBola.forEach(function (element) {
                if (element.posicao == numeroCasa) {
                    // console.log(element);
                    jogadoresNaCasa.push(element);
                }
            });

            return jogadoresNaCasa;
        },

        invertePosse: function (jogador) {
            // debugger;
            this.printaAcao('inverte a posse');

            var novoAtkTemp = this.jogo.posseBola.timeDef;
            this.jogo.posseBola.timeDef = this.jogo.posseBola.timeAtk;
            this.jogo.posseBola.timeAtk = novoAtkTemp;

            this.jogo.posseBola.posicao = jogador.posicao;
            this.jogo.posseBola.jogador = this.getIndexByCamisa(this.jogo[this.jogo.posseBola.timeAtk].jogadores, jogador.camisa);

            return false;
        },

        randomNumber: function (number) {
            return Math.floor(Math.random() * number);
        },

        getIndexByCamisa: function (time, camisa) {

            var index = time.findIndex(x => x.camisa == camisa);
            return index;
        },

        goleiroRepoeBola: function (goleiro) {
            // //debugger;
            this.resetarTime();
            var casaAlvo = this.randomNumber(2) + 2;
            var jogador = [];
            if (parseInt(goleiro.habilidades.reposicao) > this.randomNumber(30)) {
                jogador = this.buscaJogadorCampoAtk(casaAlvo)[0];
                if (!jogador) {
                    jogador = this.buscaJogadorCampoAtk(casaAlvo - 1)[0];
                    if (!jogador) {
                        jogador = this.buscaJogadorCampoAtk(casaAlvo - 2)[0];
                    }
                }
                this.jogo.posseBola.jogador = this.getIndexByCamisa(this.jogo[this.jogo.posseBola.timeAtk].jogadores, jogador.camisa);
                this.jogo.posseBola.posicao = jogador.posicao;
                this.printaAcao(goleiro.nome + ' entrega a bola para ' + jogador.nome);
            } else {
                jogador = this.buscaJogadorCampoDef(9 - casaAlvo)[0];
                if (!jogador) {
                    jogador = this.buscaJogadorCampoDef(9 - casaAlvo - 1)[0];
                    if (!jogador) {
                        jogador = this.buscaJogadorCampoDef(9 - casaAlvo - 2)[0];
                    }
                }
                this.invertePosse(jogador);


                this.printaAcao(goleiro.nome + ' erra o lançamento, e a bola está com ' + jogador.nome);
            }

        },

        getForcaDefesaCarrinho: function () {

            var timeBola = this.jogo[this.jogo.posseBola.timeAtk].jogadores;
            var jogadorBola = timeBola[this.jogo.posseBola.jogador];

            var pos = jogadorBola.posicao;
            var jogadoresNaCasa = this.buscaJogadorCampoDef(pos);
            var forcaDef = 0;
            jogadoresNaCasa.forEach(element => {

                forcaDef = parseInt(forcaDef + parseInt(element.habilidades.carrinho));
            });
            console.log(jogadoresNaCasa, forcaDef);

            return forcaDef;

        },

        getForcaDefesaCorrida: function () {

            var timeBola = this.jogo[this.jogo.posseBola.timeAtk].jogadores;
            var jogadorBola = timeBola[this.jogo.posseBola.jogador];

            var pos = jogadorBola.posicao;
            var jogadoresNaCasa = this.buscaJogadorCampoDef(pos);
            var forcaDef = 0;
            jogadoresNaCasa.forEach(element => {

                forcaDef = forcaDef + parseInt(element.habilidades.corrida);
            });
            console.log(jogadoresNaCasa, forcaDef);

            return forcaDef;

        },

        getForcaDefesaForca: function () {

            var timeBola = jogo[this.jogo.posseBola.timeAtk].jogadores;
            var jogadorBola = timeBola[this.jogo.posseBola.jogador];

            var pos = jogadorBola.posicao;
            var jogadoresNaCasa = this.buscaJogadorCampoDef(pos);
            var forcaDef = 0;
            jogadoresNaCasa.forEach(element => {

                forcaDef = forcaDef + parseInt(element.habilidades.forca);
            });
            console.log(jogadoresNaCasa, forcaDef);

            return forcaDef;

        },
        extend : function () {

            // Variables
            var extended = {};
            var deep = false;
            var i = 0;
            var length = arguments.length;
            var self = this;
        
            // Check if a deep merge
            if ( Object.prototype.toString.call( arguments[0] ) === '[object Boolean]' ) {
                deep = arguments[0];
                i++;
            }
        
            // Merge the object into the extended object
            var merge = function (obj) {
                for ( var prop in obj ) {
                    if ( Object.prototype.hasOwnProperty.call( obj, prop ) ) {
                        // If deep merge and property is an object, merge properties
                        if ( deep && Object.prototype.toString.call(obj[prop]) === '[object Object]' ) {
                            extended[prop] = self.extend( true, extended[prop], obj[prop] );
                        } else {
                            extended[prop] = obj[prop];
                        }
                    }
                }
            };
        
            // Loop through each object and conduct a merge
            for ( ; i < length; i++ ) {
                var obj = arguments[i];
                merge(obj);
            }
        
            return extended;
        
        }
    }


export default {GameEngine};  






