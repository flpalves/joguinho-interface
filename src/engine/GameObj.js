const GameObj = {


    fillPositionAndAttsByRole: function(player) {
        let position = "";
        let atts = {};
        switch (player.role) {
            case "Goleiro":
                atts = {
                    "1": "defende",
                    "2": "defende",
                    "3": "espalma",
                    "4": "espalma",
                    "5": "espalmaFora",
                    "6": "espalmaFora",
                    "7": "defende",
                    "8": "espalma"
                };
                position = "1";

                break;
            case "Zagueiro Cobertura":
                atts = {
                    "1": "carrinho",
                    "2": "disputa",
                    "3": "toque",
                    "4": "drible",
                    "5": "chute",
                    "6": "corrida",
                    "7": "disputa",
                    "8": "lancamento"
                };
                position = "1";
                break;
            case "Zagueiro Combate":
                atts = {
                    "1": "carrinho",
                    "2": "disputa",
                    "3": "toque",
                    "4": "drible",
                    "5": "chute",
                    "6": "corrida",
                    "7": "disputa",
                    "8": "lancamento"
                };
                position = "2";

                break;
            case "Lateral Recuado":
                atts = {
                    "1": "carrinho",
                    "2": "disputa",
                    "3": "toque",
                    "4": "drible",
                    "5": "chute",
                    "6": "corrida",
                    "7": "corrida",
                    "8": "lancamento"
                };
                position = "1";

                break;
            case "Lateral":
                atts = {
                    "1": "carrinho",
                    "2": "corrida",
                    "3": "toque",
                    "4": "drible",
                    "5": "chute",
                    "6": "corrida",
                    "7": "corrida",
                    "8": "lancamento"
                };
                position = "2";
                break;
            case "Ala":
                atts = {
                    "1": "carrinho",
                    "2": "corrida",
                    "3": "toque",
                    "4": "drible",
                    "5": "chute",
                    "6": "corrida",
                    "7": "corrida",
                    "8": "lancamento"
                };
                position = "3";
                break;
            case "Ala Ofensivo":
                atts = {
                    "1": "carrinho",
                    "2": "corrida",
                    "3": "toque",
                    "4": "drible",
                    "5": "chute",
                    "6": "corrida",
                    "7": "corrida",
                    "8": "lancamento"
                };
                position = "4";
                break;
            case "Cabeça de Área":
                atts = {
                    "1": "carrinho",
                    "2": "disputa",
                    "3": "toque",
                    "4": "drible",
                    "5": "chute",
                    "6": "corrida",
                    "7": "disputa",
                    "8": "lancamento"
                };
                position = "3";
                break;
            case "Volante Recuado":
                atts = {
                    "1": "carrinho",
                    "2": "toque",
                    "3": "toque",
                    "4": "drible",
                    "5": "chute",
                    "6": "corrida",
                    "7": "disputa",
                    "8": "lancamento"
                };
                position = "3";
                break;
            case "Volante":
                atts = {
                    "1": "carrinho",
                    "2": "toque",
                    "3": "toque",
                    "4": "drible",
                    "5": "chute",
                    "6": "corrida",
                    "7": "disputa",
                    "8": "lancamento"
                };
                position = "4";
                break;

            case "Meia Central":
                atts = {
                    "1": "carrinho",
                    "2": "toque",
                    "3": "toque",
                    "4": "drible",
                    "5": "chute",
                    "6": "corrida",
                    "7": "disputa",
                    "8": "lancamento"
                };
                position = "5";
                break;
            case "Meia Avançado":
                atts = {
                    "1": "carrinho",
                    "2": "toque",
                    "3": "toque",
                    "4": "drible",
                    "5": "chute",
                    "6": "corrida",
                    "7": "disputa",
                    "8": "lancamento"
                };
                position = "6";
                break;
            case "Armador Recuado":
                atts = {
                    "1": "carrinho",
                    "2": "lancamento",
                    "3": "toque",
                    "4": "drible",
                    "5": "chute",
                    "6": "corrida",
                    "7": "toque",
                    "8": "lancamento"
                };
                position = "4";
                break;
            case "Armador":
                atts = {
                    "1": "carrinho",
                    "2": "lancamento",
                    "3": "toque",
                    "4": "drible",
                    "5": "chute",
                    "6": "corrida",
                    "7": "toque",
                    "8": "lancamento"
                };
                position = "5";
                break;

            case "Armador Avançado":
                atts = {
                    "1": "carrinho",
                    "2": "lancamento",
                    "3": "toque",
                    "4": "drible",
                    "5": "chute",
                    "6": "corrida",
                    "7": "toque",
                    "8": "lancamento"
                };
                position = "6";
                break;
            case "Segundo Atacante":
                atts = {
                    "1": "carrinho",
                    "2": "chute",
                    "3": "toque",
                    "4": "drible",
                    "5": "chute",
                    "6": "corrida",
                    "7": "chute",
                    "8": "toque"
                };
                position = "7";
                break;
            case "Ponta":
                atts = {
                    "1": "carrinho",
                    "2": "chute",
                    "3": "toque",
                    "4": "drible",
                    "5": "chute",
                    "6": "corrida",
                    "7": "drible",
                    "8": "lancamento"
                };
                position = "7";
                break;
            case "Centrovante":
                atts = {
                    "1": "carrinho",
                    "2": "chute",
                    "3": "toque",
                    "4": "drible",
                    "5": "chute",
                    "6": "corrida",
                    "7": "drible",
                    "8": "chute"
                };
                position = "8";
                break;

            default:
                atts = {
                    "1": "",
                    "2": "",
                    "3": "",
                    "4": "",
                    "5": "",
                    "6": ""
                };
                position = "9";
                break;
        }
        return {
            position,
            atts
        };
    },

    mountMatch: function(matchTeams) {
        // let matchTeams = this.$store.state.match;
        let match = {
            homeTeam: {
                jogadores : [],
                inicial : [],
                cores: {},
                teamId : '',
                placar: 0
            },
            awayTeam: {
                jogadores : [],
                inicial : [],
                cores: {},
                teamId : '',
                placar: 0
            },
        };
        /** separar desse componente */
        
        matchTeams.homeTeam.starting11 = JSON.parse(matchTeams.homeTeam.starting11);
        matchTeams.homeTeam.starting11.map((player, index) => {
             
            let dynamicsAtts = this.fillPositionAndAttsByRole(player);
            player.posicao = dynamicsAtts.position;
            player.acoes = dynamicsAtts.atts;
            player.camisa = index + 1;
            player.nome = player.nome_completo;
            player.time = "timeHome";
            player.habilidades = {};
            // debugger
            player.habilidades.drible = player.drible;
            player.habilidades.corrida = player.corrida;
            player.habilidades.chute = player.chute;
            player.habilidades.toque = player.toque;
            player.habilidades.lancamento = player.lancamento;
            player.habilidades.carrinho = player.carrinho;
            player.habilidades.forca = player.forca;
            player.habilidades.jogoAereo = player.jogo_aereo;
            player.habilidades.penalti = player.penalti;
            player.habilidades.defende = player.defende;
            player.habilidades.espalma = player.espalma;
            player.habilidades.espalmaFora = player.espalma_fora;
            player.habilidades.reposicao = player.reposicao;
            

            match.homeTeam.jogadores.push(player);
            match.homeTeam.inicial.push(player);
            match.homeTeam.cores.principal = matchTeams.homeTeam.cor_principal;
            match.homeTeam.cores.secundaria = matchTeams.homeTeam.cor_secundaria;
            match.homeTeam.teamId = matchTeams.homeTeam.slug;
        });


        matchTeams.awayTeam.starting11 = JSON.parse(matchTeams.awayTeam.starting11);
        matchTeams.awayTeam.starting11.map((player, index) => {
            let dynamicsAtts = this.fillPositionAndAttsByRole(player);
            player.posicao = dynamicsAtts.position;
            player.acoes = dynamicsAtts.atts;
            player.camisa = index + 1;
            player.nome = player.nome_completo;
            player.time = "timeAway";
            player.habilidades = {};
            // debugger
            player.habilidades.drible = player.drible;
            player.habilidades.corrida = player.corrida;
            player.habilidades.chute = player.chute;
            player.habilidades.toque = player.toque;
            player.habilidades.lancamento = player.lancamento;
            player.habilidades.carrinho = player.carrinho;
            player.habilidades.forca = player.forca;
            player.habilidades.jogoAereo = player.jogo_aereo;
            player.habilidades.penalti = player.penalti;
            player.habilidades.defende = player.defende;
            player.habilidades.espalma = player.espalma;
            player.habilidades.espalmaFora = player.espalma_fora;
            player.habilidades.reposicao = player.reposicao;

            match.awayTeam.jogadores.push(player);
            match.awayTeam.inicial.push(player);
            match.awayTeam.cores.principal = matchTeams.awayTeam.cor_principal;
            match.awayTeam.cores.secundaria = matchTeams.awayTeam.cor_secundaria;
            match.awayTeam.teamId = matchTeams.awayTeam.slug;
        });
        match.homeTeam.nome = matchTeams.homeTeam.nome;
        match.awayTeam.nome = matchTeams.awayTeam.nome;

        return match;
        // this.getMatch();
    }


}

export default { GameObj };  