export const war = {
  id: "war",
  title: "Sõjaline konflikt: esimesed otsused",
  timeMinutes: 7,
  difficulty: "Raske",
  intro:
    "Kuulad ametlikke teateid, olukord on pingeline. Eesmärk: tegutseda rahulikult, järgida ametlikke juhiseid ja vältida ohtlikku käitumist.",
  sources: [
    { label: "Olevalmis: Sõjaline konflikt", url: "https://www.olevalmis.ee/sojaline-konflikt" },
    { label: "Olevalmis: Varjumine", url: "https://www.olevalmis.ee/varjumine" }
  ],
  startNode: "W1",
  nodes: {
    W1: {
      text: "Sa kuuled ametlikke hoiatusi. Mis on esimene mõistlik samm?",
      choices: [
        {
          id: "W1A",
          text: "Usun ainult kuulujutte ja paanikat grupichatist.",
          next: "W2",
          correct: false,
          explain: "Kuulujutud võivad olla valed ja viia ohtlike otsusteni.",
          correction: "Jälgi ametlikke kanaleid ja tee otsuseid juhiste põhjal.",
          sourceUrl: "https://www.olevalmis.ee/sojaline-konflikt"
        },
        {
          id: "W1B",
          text: "Jälgin ametlikke teateid ja valmistan end ette varjumiseks/juhisteks.",
          next: "W2",
          correct: true,
          explain: "Õige — ametlik info on kriisis kõige usaldusväärsem.",
          correction: "Hea valik!",
          sourceUrl: "https://www.olevalmis.ee/sojaline-konflikt"
        },
        {
          id: "W1C",
          text: "Lähen õue “olukorda kontrollima”.",
          next: "W2",
          correct: false,
          explain: "Võid sattuda ohtu; turvalisus enne uudishimu.",
          correction: "Püsi turvalises kohas ja järgi ametlikke juhiseid.",
          sourceUrl: "https://www.olevalmis.ee/sojaline-konflikt"
        }
      ]
    },

    W2: {
      text: "Sõber tahab postitada sotsiaalmeedias “tundlikku infot”. Kuidas reageerid?",
      choices: [
        {
          id: "W2A",
          text: "Julgustan postitama, et kõik teaksid.",
          next: "W3",
          correct: false,
          explain: "Avalik info levitamine võib tekitada lisariske ja segadust.",
          correction: "Ära levita tundlikku infot; keskendu ohutusele ja ametlikele juhistele.",
          sourceUrl: "https://www.olevalmis.ee/sojaline-konflikt"
        },
        {
          id: "W2B",
          text: "Soovitan mitte levitada ja jälgida ametlikke teateid.",
          next: "W3",
          correct: true,
          explain: "Õige — infohügieen ja rahulik käitumine on oluline.",
          correction: "Hea valik!",
          sourceUrl: "https://www.olevalmis.ee/sojaline-konflikt"
        }
      ]
    },

    W3: {
      text: "Saad juhise varjuda. Mida teed?",
      choices: [
        {
          id: "W3A",
          text: "Varjun kohe (keldris/sisemises ruumis), akendest eemale.",
          next: null,
          correct: true,
          explain: "Õige — varjumine on kiire ja turvaline reaktsioon.",
          correction: "Hea valik!",
          sourceUrl: "https://www.olevalmis.ee/varjumine"
        },
        {
          id: "W3B",
          text: "Ootan veel 10 minutit ja siis vaatan edasi.",
          next: null,
          correct: false,
          explain: "Viivitamine võib suurendada riski.",
          correction: "Varju kohe ja jälgi ametlikke juhiseid.",
          sourceUrl: "https://www.olevalmis.ee/varjumine"
        }
      ]
    }
  }
};
