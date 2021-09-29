const Formations = {
    formations : [
        {
            name: "4-4-2Losango",
            defaultPositions: ["Goleiro", "Zagueiro Cobertura", "Zagueiro Combate", "Lateral", "Ala", "Cabeça de Área", "Volante", "Armador Recuado", "Meia Avançado", "Segundo Atacante", "Centrovante"],
            positions: [
                ["Goleiro"],
                ["Zagueiro Cobertura"],
                ["Zagueiro Combate"],
                ["Lateral Recuado", "Lateral", "Ala"],
                ["Lateral Recuado", "Lateral", "Ala"],
                ["Cabeça de Área"],
                [
                    "Volante Recuado",
                    "Volante",
                    "Meia Central",
                    "Armador Recuado",
                    "Armador"
                ],
                [
                    "Volante",
                    "Meia Central",
                    "Meia Avançado",
                    "Armador Recuado",
                    "Armador",
                    "Armador Avançado"
                ],
                ["Meia Avançado", "Armador Avançado"],
                ["Segundo Atacante"],
                ["Centrovante"]
            ]
        },
        {
            name: "4-4-2Quadrado",
            defaultPositions: ["Goleiro", "Zagueiro Cobertura", "Zagueiro Combate", "Ala", "Ala Ofensivo", "Cabeça de Área", "Volante Recuado", "Armador", "Meia Avançado", "Segundo Atacante", "Centrovante"],
            positions: [
                ["Goleiro"],
                ["Zagueiro Cobertura"],
                ["Zagueiro Combate"],
                ["Ala", "Ala Ofensivo"],
                ["Ala", "Ala Ofensivo"],
                ["Cabeça de Área"],
                ["Cabeça de Área", "Volante Recuado"],
                ["Meia Central", "Armador"],
                ["Meia Avançado", "Armador Avançado"],
                ["Segundo Atacante"],
                ["Centrovante"]
            ]
        },
        {
            name: "4-4-2Ofensivo",
            defaultPositions: ["Goleiro", "Zagueiro Cobertura", "Zagueiro Combate", "Lateral", "Ala", "Volante", "Meia Central", "Armador", "Meia Avançado", "Segundo Atacante", "Centrovante"],
            positions: [
                ["Goleiro"],
                ["Zagueiro Cobertura"],
                ["Zagueiro Combate"],
                ["Lateral", "Ala"],
                ["Lateral", "Ala"],
                ["Volante", "Meia Central", "Armador Recuado", "Armador"],
                ["Volante", "Meia Central", "Armador Recuado", "Armador"],
                [
                    "Volante",
                    "Meia Central",
                    "Armador Recuado",
                    "Armador",
                    "Meia Avançado",
                    "Armador Avançado"
                ],
                ["Meia Avançado", "Armador Avançado"],
                ["Segundo Atacante"],
                ["Centrovante"]
            ]
        },
        {
            name: "4-3-3Padrao",
            defaultPositions: ["Goleiro", "Zagueiro Cobertura", "Zagueiro Combate", "Lateral", "Ala", "Volante", "Meia Central", "Meia Avançado", "Segundo Atacante", "Segundo Atacante", "Centrovante"],
            positions: [
                ["Goleiro"],
                ["Zagueiro Cobertura"],
                ["Zagueiro Combate"],
                ["Lateral", "Ala", "Ala Ofensivo"],
                ["Lateral", "Ala", "Ala Ofensivo"],
                ["Volante", "Meia Central", "Armador Recuado", "Armador"],
                [
                    "Volante",
                    "Meia Central",
                    "Meia Avançado",
                    "Armador Recuado",
                    "Armador",
                    "Armador Avançado"
                ],
                ["Meia Avançado", "Armador Avançado"],
                ["Segundo Atacante"],
                ["Segundo Atacante", "Centrovante"],
                ["Centrovante"]
            ]
        },
        {
            name: "3-5-2Alas",
            defaultPositions: ["Goleiro", "Zagueiro Cobertura", "Zagueiro Combate", "Zagueiro Combate", "Ala", "Ala Ofensivo", "Volante", "Meia Central", "Meia Avançado", "Segundo Atacante", "Centrovante"],
            positions: [
                ["Goleiro"],
                ["Zagueiro Cobertura"],
                ["Zagueiro Combate"],
                ["Zagueiro Cobertura", "Zagueiro Combate"],
                ["Lateral", "Ala", "Ala Ofensivo"],
                ["Lateral", "Ala", "Ala Ofensivo"],
                ["Volante", "Meia Central", "Armador Recuado", "Armador"],
                ["Meia Central", "Meia Avançado", "Armador", "Armador Avançado"],
                ["Meia Avançado", "Armador Avançado"],
                ["Segundo Atacante"],
                ["Centrovante"]
            ]
        },
        {
            name: "3-5-2SemAlas",
            defaultPositions: ["Goleiro", "Zagueiro Cobertura", "Zagueiro Combate", "Zagueiro Combate", "Cabeça de Área", "Volante Recuado", "Volante", "Meia Central", "Meia Avançado", "Segundo Atacante", "Centrovante"],
            positions: [
                ["Goleiro"],
                ["Zagueiro Cobertura"],
                ["Zagueiro Combate"],
                ["Zagueiro Cobertura", "Zagueiro Combate"],
                ["Cabeça de Área"],
                ["Cabeça de Área", "Volante Recuado", "Volante", "Armador Recuado"],
                [
                    "Cabeça de Área",
                    "Volante Recuado",
                    "Meia Central",
                    "Volante",
                    "Armador Recuado",
                    "Armador"
                ],
                ["Meia Central", "Meia Avançado", "Armador", "Armador Avançado"],
                ["Meia Avançado", "Armador Avançado"],
                ["Segundo Atacante"],
                ["Centrovante"]
            ],

        }
    ],
    getFormationByName: function (formationName) {
        return this.formations.find((formation) => {
            if(formation.name == formationName){
                return formation;
            }
        });
    },
    getPositionByRole: function(role){
        var position = '';
        switch (role) {
            case "Goleiro":
                position = '1';
                break;

            case "Zagueiro Cobertura":
                position = '1';
                break;
        
            case "Zagueiro Combate":
                position = '2';
                break;
        
            case "Lateral Recuado":
                position = '1';
                break;
        
            case "Lateral":
                position = '2';
                break;
        
            case "Ala":
                position = '3';
                break;
        
            case "Ala Ofensivo":
                position = '4';
                break;
        
            case "Cabeça de Área":
                position = '3';
                break;
        
            case "Volante Recuado":
                position = '3';
                break;
        
            case "Volante":
                position = '4';
                break;
        
            case "Meia Central":
                position = '5';
                break;
        
            case "Meia Avançado":
                position = '6';
                break;
        
            case "Armador Recuado":
                position = '4';
                break;
        
            case "Armador":
                position = '5';
                break;
        
            case "Armador Avançado":
                position = '6';
                break;
        
            case "Segundo Atacante":
                position = '7';
                break;
        
            case "Centrovante":
                position = '8';
                break;
        
            default:
                break;
        }

        return {
            'position' : position
        }
    }
};

export default Formations;  