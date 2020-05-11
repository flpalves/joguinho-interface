const GamePlayers = function () {
    return {

        toque: function () {
            //debugger;
            var timeBola = jogo[jogo.posseBola.timeAtk].jogadores;
            var jogadorBola = timeBola[jogo.posseBola.jogador];
            var casaAlvo = parseInt(jogadorBola.posicao + 1);
            var envolvidos = buscaJogadorCampo(casaAlvo);


            //caso não tenha ninguem na casa a frente, toca pro lado;
            if (envolvidos.atk.length == 0) {
                casaAlvo = parseInt(jogadorBola.posicao);
                envolvidos = buscaJogadorCampo(casaAlvo);
            }

            //caso não tenha ninguem na casa ao lado, toca pra trás;
            if (envolvidos.atk.length == 0) {
                casaAlvo = parseInt(jogadorBola.posicao - 1);
                envolvidos = buscaJogadorCampo(casaAlvo);
            }

            //caso não tenha ninguem na casa a frente;
            if (envolvidos.atk.length == 0) {
                invertePosse(buscaJogadorCampoDef(jogadorBola.posicao[0]));
                printaAcao("sem opções, ele erra o passe");
                mensuraJogada(jogadorBola.time, getIndexByCamisa(timeBola, jogadorBola.camisa), 'toque', 'falha');
                return false;
            }

            var JogadorAlvo = envolvidos.atk[[randomNumber(envolvidos.atk.length)]];
            var indexJogadorAlvo = getIndexByCamisa(timeBola, JogadorAlvo.camisa);

            //passe perfeito
            printaAcao(jogadorBola.nome + ' está com a bola')


            if (jogadorBola.habilidades.toque + randomNumber(10) < randomNumber(20) + getForcaDefesaCarrinho()) {
                /* a ação */
                jogo.posseBola.jogador = indexJogadorAlvo;
                jogo.posseBola.posicao = JogadorAlvo.posicao;

                printaAcao("acerta um passe perfeito para " + timeBola[indexJogadorAlvo].nome);

                mensuraJogada(jogadorBola.time, getIndexByCamisa(timeBola, jogadorBola.camisa), 'toque', 'perfeito');
            }
            //passe contestavel
            else {
                var tentouCortar = false;
                envolvidos.def.forEach(jogador => {
                    if (!tentouCortar) {
                        acaoDefesa = tentaCorte(jogador);
                        tentouCortar = acaoDefesa.bool;
                        jogadorDef = jogador;
                    }
                });
                if (!tentouCortar) {
                    /* a ação */
                    jogo.posseBola.jogador = indexJogadorAlvo;
                    jogo.posseBola.posicao = JogadorAlvo.posicao;
                    printaAcao('faz o passe para ' + timeBola[indexJogadorAlvo].nome);
                    mensuraJogada(jogadorBola.time, getIndexByCamisa(timeBola, jogadorBola.camisa), 'toque', 'sucesso');
                } else {
                    // acaoDefesa.funcao();
                    if (acaoDefesa.funcao == 'carrinho') {
                        printaAcao(jogadorDef.nome + 'tenta o corte');
                        acaoDefesa.carrinho(jogadorDef);
                        mensuraJogada(jogadorBola.time, getIndexByCamisa(timeBola, jogadorBola.camisa), 'toque', 'falha');
                    } else if (acaoDefesa.funcao == 'disputa') {
                        acaoDefesa.disputa(jogadorAlvo, jogadorDef);
                        mensuraJogada(jogadorBola.time, getIndexByCamisa(timeBola, jogadorBola.camisa), 'toque', 'falha');
                    }

                }
            }
            return true;
        },

        tentaCorte: function (jogador) {
            // debugger;

            var timeBola = jogo[jogo.posseBola.timeAtk].jogadores;
            var jogadorBola = timeBola[jogo.posseBola.jogador];
            // mock function()
            var dado = rolaDado();
            var acao = jogador.acoes[dado];
            var returning = {};
            // console.log(acao);

            if (acao == carrinho || acao == 'carrinho') {
                returning = {
                    'bool': true,
                    'funcao': carrinho
                }
            } else if (acao == disputa || acao == 'disputa') {
                returning = {
                    'bool': true,
                    'funcao': disputa
                }
            }
            else {
                returning = {
                    bool: false
                }
            }
            return returning;
        },

        corrida: function () {
            var goleiro = jogo[jogo.posseBola.timeDef].jogadores[0];
            var timeBola = jogo[jogo.posseBola.timeAtk].jogadores;
            var jogadorBola = timeBola[jogo.posseBola.jogador];
            var casaAlvo = jogadorBola.posicao;
            var envolvidos = buscaJogadorCampo(casaAlvo);

            printaAcao(jogadorBola.nome + ' dá um tapa na frente e tenta avançar');
            if (jogadorBola.posicao == 8) {
                printaAcao('Mas sai com bola e tudo, e é tiro de meta');
                // debugger;
                mensuraJogada(jogadorBola.time, getIndexByCamisa(timeBola, jogadorBola.camisa), 'corrida', 'falha')
                invertePosse(goleiro);
                tiroMeta(goleiro);
                return false;
            }


            //caso não tenha ninguem na casa a frente;
            if (envolvidos.def.length == 0) {
                /*a acao */
                timeBola[jogo.posseBola.jogador].posicao++;
                jogo.posseBola.posicao = timeBola[jogo.posseBola.jogador].posicao;
                printaAcao(jogadorBola.nome + " avança com a bola");
                mensuraJogada(jogadorBola.time, getIndexByCamisa(timeBola, jogadorBola.camisa), 'corrida', 'sucesso')
                return true;
            }


            //corrida perfeita

            if (jogadorBola.habilidades.corrida + randomNumber(10) < randomNumber(20) + getForcaDefesaCorrida()) {
                /* a ação */
                printaAcao(jogadorBola.nome + ' segue sem marcação e avança');
                timeBola[jogo.posseBola.jogador].posicao++;
                jogo.posseBola.posicao = timeBola[jogo.posseBola.jogador].posicao;
                printaAcao(jogadorBola.nome + " avança com a bola");
                mensuraJogada(jogadorBola.time, getIndexByCamisa(timeBola, jogadorBola.camisa), 'corrida', 'perfeita')
                return true;
            }
            //corrida contestável
            else {
                var tentouCortar = false;
                var jogadorDef = false;
                envolvidos.def.forEach(jogador => {
                    if (!tentouCortar) {
                        acaoDefesa = tentaCorte(jogador);
                        tentouCortar = acaoDefesa.bool;
                        jogadorDef = jogador;
                    }
                });
                if (!tentouCortar) {
                    /* a ação */
                    printaAcao(jogadorBola.nome + ' consegue escapar da marcação e segue com ela');
                    console.log(jogadorDef);
                    timeBola[jogo.posseBola.jogador].posicao++;
                    // debugger;
                    jogo.posseBola.posicao = timeBola[jogo.posseBola.jogador].posicao;
                    printaAcao(jogadorBola.nome + "avança com a bola");
                    mensuraJogada(jogadorBola.time, getIndexByCamisa(timeBola, jogadorBola.camisa), 'corrida', 'sucesso');
                } else {
                    // acaoDefesa.funcao();
                    if (acaoDefesa.funcao == 'carrinho') {
                        acaoDefesa.carrinho(jogadorDef);
                        mensuraJogada(jogadorBola.time, getIndexByCamisa(timeBola, jogadorBola.camisa), 'corrida', 'falha');
                    } else if (acaoDefesa.funcao == 'disputa') {
                        acaoDefesa.disputa(jogadorBola, jogadorDef);
                        mensuraJogada(jogadorBola.time, getIndexByCamisa(timeBola, jogadorBola.camisa), 'corrida', 'falha');
                    }
                }
            }
            return true;
        },

        chute: function () {
            //debugger;
            var timeBola = jogo[jogo.posseBola.timeAtk].jogadores;
            var jogadorBola = timeBola[jogo.posseBola.jogador];
            var goleiro = jogo[jogo.posseBola.timeDef].jogadores[0];


            // //debugger;
            var necessarioDado = null; //numero necessario para a ação ser concluida

            switch (jogadorBola.posicao) {
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
                printaAcao(jogadorBola.nome + ' isola a bola para frente!');
                rifaBola(parseInt(jogadorBola.posicao + 2));
                return false;
            }

            printaAcao(jogadorBola.nome + ' chutou!');
            //rola o dado para ver se a ação deu bom ou nao
            // debugger;
            if (randomNumber(10) <= necessarioDado) {
                printaAcao('a bola vai em direção ao gol');
                mensuraJogada(jogadorBola.time, getIndexByCamisa(timeBola, jogadorBola.camisa), 'chute', 'sucesso');
                // goleiro.acoes[rolaDado()](jogadorBola);
                // debugger
                if (typeof goleiro.acoes[rolaDado()] === "function") {
                    goleiro.acoes[rolaDado()](jogadorBola)
                } else {
                    window[goleiro.acoes[rolaDado()]](jogadorBola); //calling function by string name
                }
            } else {
                printaAcao('PRA FORA');
                mensuraJogada(jogadorBola.time, getIndexByCamisa(timeBola, jogadorBola.camisa), 'chute', 'falha');
                invertePosse(goleiro);
                tiroMeta(goleiro);
            }


        },


        lancamento: function () {
            //debugger;
            var timeBola = jogo[jogo.posseBola.timeAtk].jogadores;
            var jogadorBola = timeBola[jogo.posseBola.jogador];
            var casaAlvo = parseInt(jogadorBola.posicao + 2);
            var envolvidos = buscaJogadorCampo(casaAlvo);

            //caso não tenha ninguem 2 casas a frente, toca 1 casa a frente;
            if (envolvidos.atk.length == 0) {
                casaAlvo = parseInt(jogadorBola.posicao + 1);
                envolvidos = buscaJogadorCampo(casaAlvo);

            }

            //caso não tenha ninguem na casa a frente, toca pro lado;
            if (envolvidos.atk.length == 0) {
                casaAlvo = parseInt(jogadorBola.posicao);
                envolvidos = buscaJogadorCampo(casaAlvo);
            }

            //caso nao tenha ninguem na casa ao lado;
            if (envolvidos.atk.length == 0) {
                invertePosse(buscaJogadorCampoDef(jogadorBola.posicao[0]));
                mensuraJogada(jogadorBola.time, getIndexByCamisa(timeBola, jogadorBola.camisa), 'lancamento', 'falha');
                return false;
            }

            var camisaJogadorAlvo = envolvidos.atk[[randomNumber(envolvidos.atk.length)]].camisa;
            var jogadorAlvo = getIndexByCamisa(timeBola, camisaJogadorAlvo);

            //passe perfeito
            printaAcao(jogadorBola.nome + ' está com a bola')
            // if(jogadorBola.habilidades.lancamento < randomNumber(25)){
            if (jogadorBola.habilidades.lancamento + randomNumber(10) < randomNumber(20) + getForcaDefesaCarrinho()) {
                /* a ação */
                jogo.posseBola.jogador = jogadorAlvo;
                jogo.posseBola.posicao = timeBola[jogadorAlvo].posicao;
                printaAcao("acerta um lançamento perfeito para " + timeBola[jogadorAlvo].nome);
                mensuraJogada(jogadorBola.time, getIndexByCamisa(timeBola, jogadorBola.camisa), 'lancamento', 'perfeito');
            }
            //passe contestavel
            else {
                var tentouCortar = false;
                envolvidos.def.forEach(jogador => {
                    if (!tentouCortar) {
                        acaoDefesa = tentaCorte(jogador);
                        tentouCortar = acaoDefesa.bool;
                        jogadorDef = jogador;
                    }
                });
                if (!tentouCortar) {
                    /* a ação */
                    jogo.posseBola.jogador = jogadorAlvo;
                    jogo.posseBola.posicao = timeBola[jogadorAlvo].posicao;
                    printaAcao('faz o lançamento para ' + timeBola[jogadorAlvo].nome);
                    mensuraJogada(jogadorBola.time, getIndexByCamisa(timeBola, jogadorBola.camisa), 'lancamento', 'sucesso');
                    if (timeBola[jogadorAlvo].posicao == 8) {
                        cabecada(timeBola[jogadorAlvo]);
                    }
                } else {
                    // acaoDefesa.funcao();
                    if (acaoDefesa.funcao == 'carrinho') {
                        acaoDefesa.carrinho(jogadorDef);
                        mensuraJogada(jogadorBola.time, getIndexByCamisa(timeBola, jogadorBola.camisa), 'lancamento', 'falha');
                    } else if (acaoDefesa.funcao == 'disputa') {
                        acaoDefesa.disputa(jogadorAlvo, jogadorDef);
                        mensuraJogada(jogadorBola.time, getIndexByCamisa(timeBola, jogadorBola.camisa), 'lancamento', 'falha');
                    }
                }
            }
            return true;
        },

        drible: function () {
            //debugger;
            return false;
        },

        carrinho: function (jogadorDef) {
            // debugger;
            if (!jogadorDef) {

                var posicaoBusca = jogo[jogo.posseBola.timeAtk].jogadores[jogo.posseBola.jogador].posicao;
                jogadorDef = buscaJogadorCampoDef(9 - posicaoBusca);
                //se o não houver nenhum jogador de defesa no campo, sai da função
                if (jogadorDef.length == 0) {
                    return true;
                } else {
                    jogadorDef = jogadorDef[randomNumber(jogadorDef.length)];
                }

            }
            if (randomNumber(23) < jogadorDef.habilidades.carrinho) {
                printaAcao('carrinho bem executado e ' + jogadorDef.nome + ' rouba a bola');
                mensuraJogada(jogadorDef.time, getIndexByCamisa(jogo[jogo.posseBola.timeDef].jogadores, jogadorDef.camisa), 'carrinho', 'sucesso');
                invertePosse(jogadorDef);
            } else {
                printaAcao('' + jogadorDef.nome + ' tenta o carrinho e faz a falta');
                mensuraJogada(jogadorDef.time, getIndexByCamisa(jogo[jogo.posseBola.timeDef].jogadores, jogadorDef.camisa), 'carrinho', 'falha');
                return falta(jogadorDef);
            }
            console.log('carrinho')
            return true;
        },

        disputa: function (pAtk, pDef) {
            // debugger;
            //se for chamado sem jogador de atk, é o que está com a bola

            if (!pAtk) {
                pAtk = jogo[jogo.posseBola.timeAtk].jogadores[jogo.posseBola.jogador];
            }
            // se for chamado sem jogador de defesa, sorteia algum do campo em disputa
            if (!pDef) {
                var posicaoBusca = jogo[jogo.posseBola.timeAtk].jogadores[jogo.posseBola.jogador].posicao;
                pDef = buscaJogadorCampoDef(9 - posicaoBusca);
                //se o não houver nenhum jogador de defesa no campo, sai da função
                if (pDef.length == 0) {
                    return true;
                } else {
                    pDef = pDef[randomNumber(pDef.length)];
                }
            }
            printaAcao(pDef.nome + 'divide a bola com ' + pAtk.nome);
            var dadoAtk = pAtk.habilidades.forca + randomNumber(25);
            var dadoDef = pDef.habilidades.forca + randomNumber(25);
            if (dadoAtk > dadoDef) {
                printaAcao(pAtk.nome + 'ganha a bola e fica com a bola!');
                mensuraJogada(pAtk.time, getIndexByCamisa(jogo[jogo.posseBola.timeAtk].jogadores, pAtk.camisa), 'disputa', 'sucesso');
                mensuraJogada(pDef.time, getIndexByCamisa(jogo[jogo.posseBola.timeDef].jogadores, pDef.camisa), 'disputa', 'falha');
            } else {
                var goleiro = jogo[jogo.posseBola.timeDef].jogadores[0];
                if (pDef.camisa == goleiro.camisa) {
                    printaAcao(pDef.nome + ' sai e faz a defesa');
                    mensuraJogada(pAtk.time, getIndexByCamisa(jogo[jogo.posseBola.timeAtk].jogadores, pAtk.camisa), 'disputa', 'falha');
                    mensuraJogada(pDef.time, getIndexByCamisa(jogo[jogo.posseBola.timeDef].jogadores, pDef.camisa), 'disputa', 'sucesso');
                    invertePosse(pDef);
                    tiroMeta(goleiro);
                    return true;
                }
                printaAcao(pDef.nome + 'vence no ombro e rouba a bola!');
                mensuraJogada(pAtk.time, getIndexByCamisa(jogo[jogo.posseBola.timeAtk].jogadores, pAtk.camisa), 'disputa', 'falha');
                mensuraJogada(pDef.time, getIndexByCamisa(jogo[jogo.posseBola.timeDef].jogadores, pDef.camisa), 'disputa', 'sucesso');
                invertePosse(pDef);
            }


            return true;
        },

        resetarTime: function () {
            // debugger;
            jogo.timeHome.jogadores = $.extend(true, [], jTimeHome);
            jogo.timeAway.jogadores = $.extend(true, [], jTimeAway);
            return false;
        },

        posGol: function () {
            // debugger;

            var novoAtkTemp = jogo.posseBola.timeDef;
            jogo.posseBola.timeDef = jogo.posseBola.timeAtk;
            jogo.posseBola.timeAtk = novoAtkTemp;
            resetarTime();
            jogo.posseBola.jogador = 5;
            jogo.posseBola.posicao = 4;
            printaAcao('volta o jogo');
        },

        corner: function () {
            //debugger;
            resetarTime();
            var envolvidos = buscaJogadorCampo(8);
            var pAtk = envolvidos.atk[randomNumber(envolvidos.atk.length)];
            var pDef = envolvidos.def[randomNumber(envolvidos.def.length)];
            var dadoAtk = pAtk.habilidades.jogoAereo + randomNumber(25);
            var dadoDef = pDef.habilidades.jogoAereo + randomNumber(25);
            printaAcao('É escanteio!');
            // printaAcao('');
            if (dadoAtk > dadoDef) {
                printaAcao(pAtk.nome + 'tenta o cabeçeio');
                mensuraJogada(pAtk.time, getIndexByCamisa(jogo[jogo.posseBola.timeAtk].jogadores, pAtk.camisa), 'cabeceio', 'sucesso');
                mensuraJogada(pDef.time, getIndexByCamisa(jogo[jogo.posseBola.timeDef].jogadores, pDef.camisa), 'cabeceio', 'falha');
                cabecada(pAtk);
            } else {
                printaAcao(pDef.nome + 'tira de cabeça');
                mensuraJogada(pAtk.time, getIndexByCamisa(jogo[jogo.posseBola.timeAtk].jogadores, pAtk.camisa), 'cabeceio', 'falha');
                mensuraJogada(pDef.time, getIndexByCamisa(jogo[jogo.posseBola.timeDef].jogadores, pDef.camisa), 'cabeceio', 'sucesso');
                rifaBola(7);
                return false;
                // invertePosse(pDef);
            }
            return true;
        },

        rifaBola: function (posicaoAtk) {
            // debugger;
            resetarTime();
            var goleiro = jogo[jogo.posseBola.timeDef].jogadores[0];
            // debugger;
            var envolvidos = buscaJogadorCampo(posicaoAtk);
            envolvidos = envolvidos.atk.concat(envolvidos.def);
            if (envolvidos.length == 0) {
                if (posicaoAtk > 8) {

                    invertePosse(goleiro);
                    tiroMeta(goleiro);
                    return false;
                };
                rifaBola(posicaoAtk + 1);
                return false;
            }

            var comBola = randomNumber(envolvidos.length);
            envolvidos[comBola];

            //

            debugger;
            if (envolvidos[comBola].time == jogo.posseBola.timeAtk) {
                jogo.posseBola.jogador = getIndexByCamisa(jogo[jogo.posseBola.timeAtk].jogadores, envolvidos[comBola].camisa);
                jogo.posseBola.posicao = envolvidos[comBola].posicao;

            } else {
                // jogo.posseBola.jogador = getIndexByCamisa( jogo[jogo.posseBola.timeDef].jogadores, envolvidos[comBola].camisa );
                // jogo.posseBola.posicao = envolvidos[comBola].posicao;

                invertePosse(envolvidos[comBola]);

            }
            printaAcao(envolvidos[comBola].nome + ' fica com a bola');
            return false;

        },

        falta: function () {
            //debugger;
            var timeBola = jogo[jogo.posseBola.timeAtk].jogadores;
            var jogadorBola = timeBola[jogo.posseBola.jogador];
            resetarTime();

            proximaJogada();
            if (jogadorBola.posicao == 8) {
                penalti(jogadorBola);
            } else {
                // jogadorBola.acoes[rolaDado()]();
                if (typeof jogadorBola.acoes[rolaDado()] === "function") {
                    jogadorBola.acoes[rolaDado()]()
                } else {
                    window[jogadorBola.acoes[rolaDado()]](); //calling function by string name
                }
            }

        },

        penalti: function (jogadorBola) {
            debugger;
            printaAcao('é penalti!');
            var goleiro = jogo[jogo.posseBola.timeDef].jogadores[0];

            var forcaGoleiro = goleiro.habilidades.penalti + randomNumber(15);
            var forcaChute = jogadorBola.habilidades.chute + randomNumber(25);

            printaAcao(jogadorBola.nome + ' vai para o chute');
            if (forcaGoleiro >= forcaChute) {
                /*a acao */
                printaAcao('Defende ' + goleiro.nome);
                invertePosse(jogo[jogo.posseBola.timeDef].jogadores[0]);

            } else {
                gol();

            }
        },

        tiroMeta: function (goleiro) {
            //debugger;
            resetarTime();
            printaAcao(goleiro.nome + " recoloca a bola em jogo");
            var random = randomNumber(3);
            rifaBola(random + 1);
            return false;

        },
        gol: function () {
            // debugger;
            printaAcao('OLHUGOOL');

            if (jogo.posseBola.timeAtk == 'timeHome') {
                jogo.timeHome.placar++;
            } else {
                jogo.timeAway.placar++;
            }
            posGol();
        },

        defende: function (jogadorBola) {
            //debugger;
            var timeBola = jogo[jogo.posseBola.timeAtk].jogadores;
            var jogadorBola = timeBola[jogo.posseBola.jogador];

            var goleiro = jogo[jogo.posseBola.timeDef].jogadores[0];

            var forcaGoleiro = goleiro.habilidades.defende + randomNumber(25);
            var forcaChute = jogadorBola.habilidades.chute + randomNumber(20);

            if (forcaGoleiro >= forcaChute) {
                /*a acao */
                printaAcao(goleiro.nome + ' defende firme');
                invertePosse(jogo[jogo.posseBola.timeDef].jogadores[0]);
                return true;
            } else {
                gol();
            }

        },

        rebote: function () {
            //debugger;
            printaAcao('bola tá viva dentro da área !');
            var envolvidos = buscaJogadorCampo(8);
            // //debugger;
            if (envolvidos.atk.length == 0) {
                printaAcao('e ele pega em 2 tempos e fica tranquilo com ela');
                invertePosse(jogo[jogo.posseBola.timeDef].jogadores[0]);

            }
            if (envolvidos.atk.length > 0) {

                if (envolvidos.def.length == 1) {
                    // debugger;
                    // jogo.posseBola.jogador = envolvidos.atk[0].camisa;
                    jogo.posseBola.jogador = getIndexByCamisa(jogo[jogo.posseBola.timeAtk].jogadores, envolvidos.atk[0].camisa);
                    jogo.posseBola.posicao = envolvidos.atk[0].posicao;
                    printaAcao('cai nos pés do centrovante que já tenta o chute! ');
                    chute();
                } else {
                    var envolvidoAtk = envolvidos.atk[randomNumber(envolvidos.atk.length)];
                    var envolvidoDef = envolvidos.def[randomNumber(envolvidos.def.length)];
                    disputa(envolvidoAtk, envolvidoDef);
                }
            } else {
                var goleiro = jogo[jogo.posseBola.timeDef].jogadores[0];
                printaAcao('e sobra tranquila nas mãos do goleiro');
                invertePosse(goleiro);
                tiroMeta(goleiro);
            }

        },

        espalma: function (jogadorBola) {
            //debugger;
            var timeBola = jogo[jogo.posseBola.timeAtk].jogadores;
            var jogadorBola = timeBola[jogo.posseBola.jogador];
            var goleiro = jogo[jogo.posseBola.timeDef].jogadores[0];


            var forcaGoleiro = goleiro.habilidades.espalma + randomNumber(25);

            var forcaChute = jogadorBola.habilidades.chute + randomNumber(20);

            if (forcaGoleiro >= forcaChute) {
                /*a acao */
                printaAcao('espaaalma ' + goleiro.nome);
                rebote();
            } else {
                gol();
            }

        },

        espalmaFora: function () {
            // debugger;
            var timeBola = jogo[jogo.posseBola.timeAtk].jogadores;
            var jogadorBola = timeBola[jogo.posseBola.jogador];
            var goleiro = jogo[jogo.posseBola.timeDef].jogadores[0];

            var forcaGoleiro = goleiro.habilidades.espalmaFora + randomNumber(25);
            var forcaChute = jogadorBola.habilidades.chute + randomNumber(20);

            if (forcaGoleiro >= forcaChute) {
                printaAcao(goleiro.nome + ' poe pra escanteio!');
                /*a acao */
                corner();
            } else {
                gol();
            }

        },
        cabecada: function (jogadorBola) {
            //debugger;
            var goleiro = jogo[jogo.posseBola.timeDef].jogadores[0];


            var forcaGoleiro = goleiro.habilidades.jogoAereo + randomNumber(25);
            var forcaCabecada = jogadorBola.habilidades.jogoAereo + randomNumber(20);


            if (forcaGoleiro >= forcaCabecada) {
                printaAcao(goleiro.nome + ' defende!');
                /*a acao */
                invertePosse(jogo[jogo.posseBola.timeDef].jogadores[0]);
            } else {
                gol();
            }

        },

        buscaJogadorCampo: function (numeroCasa) {
            var arrAtk = buscaJogadorCampoAtk(numeroCasa);
            var arrDef = buscaJogadorCampoDef(9 - numeroCasa);

            return {
                'atk': arrAtk,
                'def': arrDef
            }
        },

        buscaJogadorCampoAtk: function (numeroCasa) {
            //debugger;
            //apenas para encurtar a variavel
            var timeBola = jogo[jogo.posseBola.timeAtk].jogadores;

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
            //debugger;
            var timeBola;
            //apenas para encurtar a variavel
            if (jogo.posseBola.timeAtk == 'timeHome') {
                timeBola = jogo['timeAway'].jogadores;
            } else {
                timeBola = jogo['timeHome'].jogadores;
            }

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

        invertePosse: function (jogador) {
            // debugger;
            printaAcao('inverte a posse');

            var novoAtkTemp = jogo.posseBola.timeDef;
            jogo.posseBola.timeDef = jogo.posseBola.timeAtk;
            jogo.posseBola.timeAtk = novoAtkTemp;

            jogo.posseBola.posicao = jogador.posicao;
            jogo.posseBola.jogador = getIndexByCamisa(jogo[jogo.posseBola.timeAtk].jogadores, jogador.camisa);

            return false;
        },

        randomNumber: function (number) {
            return Math.floor(Math.random() * number);
        },

        getIndexByCamisa: function (time, camisa) {

            index = time.findIndex(x => x.camisa == camisa);
            return index;
        },

        goleiroRepoeBola: function (goleiro) {
            // debugger;
            resetarTime();
            var casaAlvo = randomNumber(2) + 2;
            var jogador = [];
            if (goleiro.habilidades.reposicao > randomNumber(30)) {
                jogador = buscaJogadorCampoAtk(casaAlvo)[0];
                if (!jogador) {
                    jogador = buscaJogadorCampoAtk(casaAlvo - 1)[0];
                    if (!jogador) {
                        jogador = buscaJogadorCampoAtk(casaAlvo - 2)[0];
                    }
                }
                jogo.posseBola.jogador = getIndexByCamisa(jogo[jogo.posseBola.timeAtk].jogadores, jogador.camisa);
                jogo.posseBola.posicao = jogador.posicao;
                printaAcao(goleiro.nome + ' entrega a bola para ' + jogador.nome);
            } else {
                jogador = buscaJogadorCampoDef(9 - casaAlvo)[0];
                if (!jogador) {
                    jogador = buscaJogadorCampoDef(9 - casaAlvo - 1)[0];
                    if (!jogador) {
                        jogador = buscaJogadorCampoDef(9 - casaAlvo - 2)[0];
                    }
                }
                invertePosse(jogador);


                printaAcao(goleiro.nome + ' erra o lançamento, e a bola está com ' + jogador.nome);
            }

        },

        getForcaDefesaCarrinho: function () {

            var timeBola = jogo[jogo.posseBola.timeAtk].jogadores;
            var jogadorBola = timeBola[jogo.posseBola.jogador];

            var pos = jogadorBola.posicao;
            var jogadoresNaCasa = buscaJogadorCampoDef(pos);
            var forcaDef = 0;
            jogadoresNaCasa.forEach(element => {

                forcaDef = forcaDef + element.habilidades.carrinho;
            });
            console.log(jogadoresNaCasa, forcaDef);

            return forcaDef;

        },

        getForcaDefesaCorrida: function () {

            var timeBola = jogo[jogo.posseBola.timeAtk].jogadores;
            var jogadorBola = timeBola[jogo.posseBola.jogador];

            var pos = jogadorBola.posicao;
            var jogadoresNaCasa = buscaJogadorCampoDef(pos);
            var forcaDef = 0;
            jogadoresNaCasa.forEach(element => {

                forcaDef = forcaDef + element.habilidades.corrida;
            });
            console.log(jogadoresNaCasa, forcaDef);

            return forcaDef;

        },

        getForcaDefesaForca: function () {

            var timeBola = jogo[jogo.posseBola.timeAtk].jogadores;
            var jogadorBola = timeBola[jogo.posseBola.jogador];

            var pos = jogadorBola.posicao;
            var jogadoresNaCasa = buscaJogadorCampoDef(pos);
            var forcaDef = 0;
            jogadoresNaCasa.forEach(element => {

                forcaDef = forcaDef + element.habilidades.forca;
            });
            console.log(jogadoresNaCasa, forcaDef);

            return forcaDef;

        }
    }
}

export default {GamePlayers};  