<template>
  <div class="row">
    <div class="col-md-6">
      <h1>Escolha seu time</h1>
      <b-form-select v-model="selected">
          <b-form-select-option v-for="(team, index) in options" :value="team" :key="index">{{team.name}}</b-form-select-option>
      </b-form-select>
    </div>
    <div class="col-md-6">
        <h3>{{selected.name}}</h3>
        <p>inserir camisa</p>
        <p>inserir escudo</p>
        <p>{{selected.description}}</p>
    </div>
  </div>
</template>
 <script>
// @ is an alias to /src

export default {
  name: "SelectTeam",
  components: {},
  methods: {},
  data() {
    return {
      options: [
        {
          name: "Esperança FC",
          teamId: "esperanca-fc",
          color: {
            primary: "green",
            secondary: "white"
          },
          description:"lorem ipsum dolor emet hue heuheu heuh eueh uehuehuehudhue heu hdueh ueh ude he hed hded hdeh uedh ueh ueh ue"
        },
        {
          name: "Seropedica AC",
          teamId: "seropedica-ac",
          color: {
            primary: "white",
            secondary: "red"
          },
          description:"lorem ipsum dolor emet hue heuheu heuh eueh uehuehuehudhue heu hdueh ueh ude he hed hded hdeh uedh ueh ueh ue"
        },
        {
          name: "Grêmio Km49",
          teamId: "gremio-km49",
          color: {
            primary: "white",
            secondary: "black"
          },
          description:"lorem ipsum dolor emet hue heuheu heuh eueh uehuehuehudhue heu hdueh ueh ude he hed hded hdeh uedh ueh ueh ue"
        },
        {
          name: "Tupy SC",
          teamId: "tupy-sc",
          color: {
            primary: "green",
            secondary: "black"
          },
          description:"lorem ipsum dolor emet hue heuheu heuh eueh uehuehuehudhue heu hdueh ueh ude he hed hded hdeh uedh ueh ueh ue"
        },
        {
          name: "Brasil Industrial EC",
          teamId: "biec-pbi",
          color: {
            primary: "red",
            secondary: "white"
          },
          description:"lorem ipsum dolor emet hue heuheu heuh eueh uehuehuehudhue heu hdueh ueh ude he hed hded hdeh uedh ueh ueh ue"
        },
        {
          name: "AC Ecologia",
          teamId: "ecologia-ac",
          color: {
            primary: "#900",
            secondary: "white"
          },
          description:"lorem ipsum dolor emet hue heuheu heuh eueh uehuehuehudhue heu hdueh ueh ude he hed hded hdeh uedh ueh ueh ue"
        }
      ],
      selected: {}
    };
  }
};
</script>