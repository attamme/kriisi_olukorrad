export const water = {
  id: "water",
  title: "Veekatkestus: hommik ja koolipäev",
  timeMinutes: 6,
  difficulty: "Kerge",
  intro:
    "Kraanist ei tule vett. Sul on üks 1.5L pudel. Eesmärk: kasutada vett mõistlikult ja säilitada hügieen ning ohutus.",
  sources: [{ label: "Olevalmis: Veekatkestus", url: "https://www.olevalmis.ee/veekatkestus" }],
  startNode: "V1",
  nodes: {
    V1: {
      text: "Kraanist ei tule vett. Mis on su esimene prioriteet?",
      choices: [
        {
          id: "V1A",
          text: "Kasutan vee ära pikaks dušiks — stress on suur.",
          next: "V2",
          correct: false,
          explain: "Vett võib olla vaja joogiks ja esmavajadusteks.",
          correction: "Prioriteet: joomine + minimaalne hügieen + toidu valmistamine.",
          sourceUrl: "https://www.olevalmis.ee/veekatkestus"
        },
        {
          id: "V1B",
          text: "Hoian vett joomiseks ja esmaseks hügieeniks.",
          next: "V2",
          correct: true,
          explain: "Õige — esmavajadused enne mugavust.",
          correction: "Hea valik!",
          sourceUrl: "https://www.olevalmis.ee/veekatkestus"
        },
        {
          id: "V1C",
          text: "Loputan WC-d mitu korda, et äkki “tuleb vesi tagasi”.",
          next: "V2",
          correct: false,
          explain: "Tarbetu veekulu võib sind hiljem hätta jätta.",
          correction: "Säästa vett ja järgi ametlikke juhiseid, sh ajutised WC-lahendused kui vaja.",
          sourceUrl: "https://www.olevalmis.ee/veekatkestus"
        }
      ]
    },

    V2: {
      text: "Sõber pakub vett tiigist. Mida teed?",
      choices: [
        {
          id: "V2A",
          text: "Joon kohe — näeb puhas välja.",
          next: "V3",
          correct: false,
          explain: "Looduslik vesi võib sisaldada baktereid/saastet.",
          correction: "Keeda või puhasta (tabletid/filter) enne joomist.",
          sourceUrl: "https://www.olevalmis.ee/veekatkestus"
        },
        {
          id: "V2B",
          text: "Keedan/puhastan enne joomist (filter/tabletid).",
          next: "V3",
          correct: true,
          explain: "Õige — ohutus ennekõike.",
          correction: "Hea valik!",
          sourceUrl: "https://www.olevalmis.ee/veekatkestus"
        },
        {
          id: "V2C",
          text: "Lisan soola ja joon — see tapab mikroobid.",
          next: "V3",
          correct: false,
          explain: "Sool ei steriliseeri vett.",
          correction: "Puhasta/keeda vett ametlike soovituste järgi.",
          sourceUrl: "https://www.olevalmis.ee/veekatkestus"
        }
      ]
    },

    V3: {
      text: "Kohalik omavalitsus teavitab joogivee jagamise punktidest. Kuidas käitud?",
      choices: [
        {
          id: "V3A",
          text: "Eiran — äkki on see scam.",
          next: null,
          correct: false,
          explain: "Ametlik info on kriisis kõige usaldusväärsem.",
          correction: "Kontrolli infot ametlikest kanalitest ja järgi juhiseid.",
          sourceUrl: "https://www.olevalmis.ee/veekatkestus"
        },
        {
          id: "V3B",
          text: "Järgin juhiseid ja lähen soovitatud ajal/punkti.",
          next: null,
          correct: true,
          explain: "Õige — nii saad vett turvaliselt ja vältid kaost.",
          correction: "Hea valik!",
          sourceUrl: "https://www.olevalmis.ee/veekatkestus"
        }
      ]
    }
  }
};
