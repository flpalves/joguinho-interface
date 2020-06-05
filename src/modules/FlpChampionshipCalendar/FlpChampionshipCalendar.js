const championship = {

    /*
    * Gera o calendário de partidas do campeonato
    * @param participants object with the clubs participating in the championship
    * @param roundNumber number of times each participant plays against each other
    * 
    */
    generateCalendar: function (championship) {
        let fixtures;
        if (championship.participants.length % 2 == 0) {
            // console.log('numero par')
            return fixtures = this.calendarEvenTeams(championship.participants, championship.turns);
        } else {
            // console.log('numero impar')
            return fixtures = this.calendarOddTeams(championship.participants, championship.turns);
        }

    },

    calendarEvenTeams: function(participants, numberOfTurns){
        let numberClubs = participants.length;
        let numberOfRounds = (numberClubs - 1) * numberOfTurns;
        let numberOfGamesInRound = parseInt(numberClubs / 2);
        let fixtures = [];

        for (let i = 0; i < numberOfRounds; i++) {
            let round = {
                roundNumber : i + 1,
                finished : false,
                games : []
            };

            for (let j = 0; j < numberOfGamesInRound; j++) {
                var homeTeam = (j == 0) ? participants[0] : participants[numberClubs - j];
                var awayTeam = participants[j + 1];
                // console.log(`${home.name} x ${away.name}`)
                round.games.push({
                    homeTeam,
                    awayTeam,
                    homeScore:0,
                    awayScore:0,
                });
            }
            
            fixtures.push(round);
            participants = this.reOrderClubs(numberClubs, participants);
            
        }

        // console.tabletable(fixtures);
        return fixtures;

    },

    reOrderClubs : function(numberClubs, participants){
        for (let index = 1; index < (numberClubs - 1); index++) {
            if(index == 1){
                var aux = participants[index];
            }
            participants[index] = participants[index+1];    
        }
        participants[numberClubs - 1] = aux;
        return participants;
    },

    calendarOddTeams: function(participants, numberOfTurns){
        let numberClubs = participants.length;
        let numberOfRounds = (numberClubs - 1) * numberOfTurns;
        let numberOfGamesInRound = parseInt(numberClubs / 2);
        let fixtures = [];

        for (let i = 0; i < numberOfRounds; i++) {
            
            let round = {
                roundNumber : i + 1,
                finished : false,
                games : []
            };

            for (let j = 0; j < numberOfGamesInRound; j++) {
                
                if(i == numberClubs){
                    let homeTeam = participants[numberClubs - j - 1];
                } else{
                    let homeTeam = (j == 0) ? participants[0] : participants[numberClubs - j];
                }

                let awayTeam = participants[j + 1];
                

                round.games.push({
                    homeTeam,
                    awayTeam,
                    homeScore:0,
                    awayScore:0
                });
            }

            fixtures.push(round);
            participants = this.reOrderClubs(numberClubs, participants);
            
        }

        return fixtures;
    },

    generateStandings : function(championship){
        let standings = championship.participants.map( (team) => {
            return {
                position : 1,
                matchs : 0,
                won : 0,
                lost : 0,
                drawn : 0,
                percentage : 0,
                goalsFor : 0,
                goalsAgainst : 0,
                points : 0,
                form: [],
                team : team  // club object
              }
        });

        return standings;
    },

    createChampionship: function(options){

        let championship = {
            participants : options.participants,
            turns: options.turns
        };
        // console.log(championship);

        championship.standings = this.generateStandings(championship); 
        championship.fixtures = this.generateCalendar(championship); 
        return championship;
    },

    log: function () {
        console.log('hey!');
    }

}


export default championship