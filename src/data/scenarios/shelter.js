export const shelter = {
  id: "shelter",
  title: "EE-ALARM: varjumine kohe",
  timeMinutes: 5,
  difficulty: "Medium",
  intro:
    "Said EE-ALARM ohuteavituse ja kuuled sireeni. Eesmärk: minna kiiresti varju ja käituda turvaliselt.",
  sources: [
    { label: "Olevalmis: Varjumine", url: "https://www.olevalmis.ee/varjumine" },
    { label: "Olevalmis: EE-ALARM", url: "https://www.olevalmis.ee/ohuteavitus-ehk-ee-alarm" }
  ],
  startNode: "S1",
  nodes: {
    S1: {
      text: "Sireen/EE-ALARM. Mida teed esimesena?",
      choices: [
        {
          id: "S1A",
          text: "Lähen õue filmima ja vaatan, mis toimub.",
          next: "S2",
          correct: false,
          explain: "Oht võib olla vahetu — õues oled haavatavam.",
          correction: "Varju kohe. Uuri infot alles siis, kui oled turvalises kohas.",
          sourceUrl: "https://www.olevalmis.ee/varjumine"
        },
        {
          id: "S1B",
          text: "Varjun kohe seal, kus olen, ja kontrollin infot ametlikest kanalitest.",
          next: "S2",
          correct: true,
          explain: "Õige — esmalt turvalisus, siis info.",
          correction: "Hea valik!",
          sourceUrl: "https://www.olevalmis.ee/varjumine"
        },
        {
          id: "S1C",
          text: "Sõidan teise linna otsa, et “paremasse kohta” minna.",
          next: "S2",
          correct: false,
          explain: "Liikumine võib suurendada riski ja ummistada teid.",
          correction: "Varju kohe lähedal. Liigu ainult siis, kui ametlik juhis seda ütleb.",
          sourceUrl: "https://www.olevalmis.ee/ohuteavitus-ehk-ee-alarm"
        }
      ]
    },

    S2: {
      text: "Kus on hoones kõige mõistlikum varjuda?",
      choices: [
        {
          id: "S2A",
          text: "Suurte akendega ruumis — parem nähtavus.",
          next: "S3",
          correct: false,
          explain: "Akende lähedus suurendab vigastuste riski (killud, lööklaine).",
          correction: "Varju keldrisse või hoone sisemistesse ruumidesse, akendest eemale.",
          sourceUrl: "https://www.olevalmis.ee/varjumine"
        },
        {
          id: "S2B",
          text: "Keldris või sisemises ruumis, akendest eemale.",
          next: "S3",
          correct: true,
          explain: "Õige — sisemised ruumid/keldrid on üldjuhul turvalisemad.",
          correction: "Hea valik!",
          sourceUrl: "https://www.olevalmis.ee/varjumine"
        },
        {
          id: "S2C",
          text: "Rõdul — värske õhk ja hea vaade.",
          next: "S3",
          correct: false,
          explain: "Õues/rõdul oled otseses ohus.",
          correction: "Mine siseruumi ja varju akendest eemale.",
          sourceUrl: "https://www.olevalmis.ee/varjumine"
        }
      ]
    },

    S3: {
      text: "Tahad kontrollida, kas teavitus on päris. Mis on parim viis?",
      choices: [
        {
          id: "S3A",
          text: "Kontrollin, kas info on ametlikes kanalites ja EE-ALARM teavitustes.",
          next: null,
          correct: true,
          explain: "Õige — kinnita info ametlikest allikatest.",
          correction: "Hea valik!",
          sourceUrl: "https://www.olevalmis.ee/ohuteavitus-ehk-ee-alarm"
        },
        {
          id: "S3B",
          text: "Usun ainult sõbra screenshoti.",
          next: null,
          correct: false,
          explain: "Screenshote saab võltsida ja info võib olla aegunud.",
          correction: "Kontrolli infot ametlikest allikatest.",
          sourceUrl: "https://www.olevalmis.ee/ohuteavitus-ehk-ee-alarm"
        }
      ]
    }
  }
};
