export const storm = {
  id: "storm",
  title: "Torm: tugev tuul ja äike",
  timeMinutes: 6,
  difficulty: "Keskmine",
  intro:
    "Ilmateade: tugev tuul, äike ja sademed. Eesmärk: valmistuda, vähendada riske ja hoida end kursis.",
  sources: [
    { label: "Olevalmis: Torm", url: "https://www.olevalmis.ee/torm-tugev-tuul-aike-ja-sademed" }
  ],
  startNode: "T1",
  nodes: {
    T1: {
      text: "Torm on tulemas. Mida teed kodus/ühikas?",
      choices: [
        {
          id: "T1A",
          text: "Jätan rõduasjad ja lahtised asjad õue — las olla.",
          next: "T2",
          correct: false,
          explain: "Tuul võib need ohtlikult laiali lennutada.",
          correction: "Too lahtised esemed sisse, sulge aknad-uksed.",
          sourceUrl: "https://www.olevalmis.ee/torm-tugev-tuul-aike-ja-sademed"
        },
        {
          id: "T1B",
          text: "Toon lahtised esemed sisse ja sulgen aknad-uksed.",
          next: "T2",
          correct: true,
          explain: "Õige — vähendad vigastuste ja kahjude riski.",
          correction: "Hea valik!",
          sourceUrl: "https://www.olevalmis.ee/torm-tugev-tuul-aike-ja-sademed"
        },
        {
          id: "T1C",
          text: "Teen kõik aknad pärani, et “surve ei lõhuks klaasi”.",
          next: "T2",
          correct: false,
          explain: "Avatud aknad võivad tormiga tekitada rohkem kahju.",
          correction: "Sulge aknad-uksed ja hoia lahtised esemed kontrolli all.",
          sourceUrl: "https://www.olevalmis.ee/torm-tugev-tuul-aike-ja-sademed"
        }
      ]
    },

    T2: {
      text: "Sinu auto on puude all. Mis on parim tegu?",
      choices: [
        {
          id: "T2A",
          text: "Viin auto avatud alale või garaaži, eemale puudest.",
          next: "T3",
          correct: true,
          explain: "Õige — puud/oksad võivad tormiga kukkuda.",
          correction: "Hea valik!",
          sourceUrl: "https://www.olevalmis.ee/torm-tugev-tuul-aike-ja-sademed"
        },
        {
          id: "T2B",
          text: "Jätan puude alla — seal on vähemalt varjus.",
          next: "T3",
          correct: false,
          explain: "Varjus olemine ei aita, kui oksad kukuvad.",
          correction: "Parki eemale puudest või garaaži.",
          sourceUrl: "https://www.olevalmis.ee/torm-tugev-tuul-aike-ja-sademed"
        }
      ]
    },

    T3: {
      text: "Tormiga võib elekter ära minna. Kuidas valmistud?",
      choices: [
        {
          id: "T3A",
          text: "Laen telefoni/powerbanki, panen taskulambi valmis ja jälgin ametlikke teateid.",
          next: null,
          correct: true,
          explain: "Õige — valmisolek vähendab stressi ja riske.",
          correction: "Hea valik!",
          sourceUrl: "https://www.olevalmis.ee/torm-tugev-tuul-aike-ja-sademed"
        },
        {
          id: "T3B",
          text: "Ei tee midagi — kindlasti läheb kiiresti üle.",
          next: null,
          correct: false,
          explain: "Tormi mõju võib olla ettearvamatu.",
          correction: "Valmista ette laadimine, valgusallikad ja jälgi ametlikku infot.",
          sourceUrl: "https://www.olevalmis.ee/torm-tugev-tuul-aike-ja-sademed"
        }
      ]
    }
  }
};
