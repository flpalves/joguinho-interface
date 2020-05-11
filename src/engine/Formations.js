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
    }
};

export default Formations;  