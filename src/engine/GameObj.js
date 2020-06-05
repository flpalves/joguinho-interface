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
                    "6": "espalmaFora"
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
                    "6": "corrida"
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
                    "6": "corrida"
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
                    "6": "corrida"
                };
                position = "2";

                break;
            case "Lateral":
                atts = {
                    "1": "carrinho",
                    "2": "corrida",
                    "3": "toque",
                    "4": "drible",
                    "5": "chute",
                    "6": "corrida"
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
                    "6": "corrida"
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
                    "6": "corrida"
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
                    "6": "corrida"
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
                    "6": "corrida"
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
                    "6": "corrida"
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
                    "6": "corrida"
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
                    "6": "corrida"
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
                    "6": "corrida"
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
                    "6": "corrida"
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
                    "6": "corrida"
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
                    "6": "corrida"
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
                    "6": "corrida"
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
        matchTeams.homeTeam.starting11.map((player, index) => {
            let dynamicsAtts = this.fillPositionAndAttsByRole(player);
            player.posicao = dynamicsAtts.position;
            player.acoes = dynamicsAtts.atts;
            player.camisa = index + 1;
            player.nome = player.name;
            player.time = "timeHome";

            match.homeTeam.jogadores.push(player);
            match.homeTeam.inicial.push(player);
            match.homeTeam.cores.principal = matchTeams.homeTeam.colors.primary;
            match.homeTeam.cores.secundaria = matchTeams.homeTeam.colors.secondary;
            match.homeTeam.teamId = matchTeams.homeTeam.teamId;
        });



        matchTeams.awayTeam.starting11.map((player, index) => {
            let dynamicsAtts = this.fillPositionAndAttsByRole(player);
            player.posicao = dynamicsAtts.position;
            player.acoes = dynamicsAtts.atts;
            player.camisa = index + 1;
            player.nome = player.name;
            player.time = "timeAway";

            match.awayTeam.jogadores.push(player);
            match.awayTeam.inicial.push(player);
            match.awayTeam.cores.principal = matchTeams.awayTeam.colors.primary;
            match.awayTeam.cores.secundaria = matchTeams.awayTeam.colors.secondary;
            match.awayTeam.teamId = matchTeams.awayTeam.teamId;
        });
        match.homeTeam.nome = matchTeams.homeTeam.name;
        match.awayTeam.nome = matchTeams.awayTeam.name;

        return match;
        // this.getMatch();
    }


}

export default { GameObj };  