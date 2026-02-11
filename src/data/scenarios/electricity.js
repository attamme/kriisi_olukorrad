export const electricity = {
  id: "electricity",
  title: "Elektrikatkestus: õhtu ühikas",
  timeMinutes: 6,
  difficulty: "Easy",
  intro:
    "Elekter läks ära. Telefon on 22%. Väljas on tuuline ja külm. Sinu eesmärk: hoida end turvaliselt ja teha mõistlikud otsused.",
  sources: [
    { label: "Olevalmis: Elektrikatkestus", url: "https://www.olevalmis.ee/elektrikatkestus" },
    { label: "Kriis.ee: Kuidas saan ise kriisideks valmistuda?", url: "https://www.kriis.ee/kriisideks-valmistumine-eestis/kuidas-saan-ise-kriisideks-valmistuda" }
  ],
  startNode: "E1",
  nodes: {
    E1: {
      text: "Valgus kadus. Mida teed esimesena?",
      choices: [
        {
          id: "E1A",
          text: "Süüdan küünlad igale poole, et oleks väga valge.",
          next: "E2",
          correct: false,
          explain:
            "Palju lahtist tuld suurendab tuleohtu (eriti segaduses ja pimedas).",
          correction:
            "Kasuta esmalt ohutuid valgusallikaid (taskulamp) ja säästa akut.",
          sourceUrl: "https://www.olevalmis.ee/elektrikatkestus"
        },
        {
          id: "E1B",
          text: "Kasutan taskulampi või telefoni valgust säästlikult, hoian akut.",
          next: "E2",
          correct: true,
          explain:
            "Õige — elekter võib olla maas pikemalt, aku säästmine aitab info ja suhtluse jaoks.",
          correction: "Hea valik!",
          sourceUrl: "https://www.olevalmis.ee/elektrikatkestus"
        },
        {
          id: "E1C",
          text: "Panen elektripliidi tööle ja hakkan kiiresti süüa tegema.",
          next: "E2",
          correct: false,
          explain:
            "Elektripliit ei tööta ning esmavajadused ja info on olulisemad kui paaniline kokkamine.",
          correction:
            "Keskendu ohutusele, infole ja varude säästmisele.",
          sourceUrl: "https://www.kriis.ee/kriisideks-valmistumine-eestis/kuidas-saan-ise-kriisideks-valmistuda"
        }
      ]
    },

    E2: {
      text: "Toas on külm. Kuidas tegutsed soojaga?",
      choices: [
        {
          id: "E2A",
          text: "Panen rõivad kihiti selga, hoian uksi-aknaid kinni.",
          next: "E3",
          correct: true,
          explain: "Õige — soojus püsib paremini ja vähendad energiakulu.",
          correction: "Hea valik!",
          sourceUrl: "https://www.olevalmis.ee/elektrikatkestus"
        },
        {
          id: "E2B",
          text: "Teen akna lahti, et “õhk ringleks”, muidu hakkab halb.",
          next: "E3",
          correct: false,
          explain:
            "Külmaga kaotad kiiresti soojust. Ventileeri lühidalt vajadusel, mitte pidevalt.",
          correction:
            "Hoia aknad kinni, tuuluta lühidalt ja mõistlikult.",
          sourceUrl: "https://www.olevalmis.ee/elektrikatkestus"
        },
        {
          id: "E2C",
          text: "Süüdan toas grillisöegrilli, et sooja saada.",
          next: "E3",
          correct: false,
          explain:
            "Siseruumis grillimine tekitab vingugaasi ja tuleohtu.",
          correction:
            "Ära kasuta siseruumis grillseadmeid. Hoia end soojas riietega ja tee turvalisi valikuid.",
          sourceUrl: "https://www.olevalmis.ee/elektrikatkestus"
        }
      ]
    },

    E3: {
      text: "Tahad osta poest patareisid ja snäkke, aga kaardimakse võib maas olla. Mida teed?",
      choices: [
        {
          id: "E3A",
          text: "Maksan ainult kaardiga — see töötab alati.",
          next: "E4",
          correct: false,
          explain:
            "Kriisis võib maksetaristu häiruda. Ainult kaardile lootmine on risk.",
          correction:
            "Hoia mõistlikus koguses sularaha juhuks, kui kaardid ei tööta.",
          sourceUrl: "https://www.kriis.ee/kriisideks-valmistumine-eestis/kuidas-saan-ise-kriisideks-valmistuda"
        },
        {
          id: "E3B",
          text: "Kasutan sularaha või küsin, kas on alternatiivseid makseviise.",
          next: "E4",
          correct: true,
          explain:
            "Õige — sularaha võib olla vajalik, kui elektroonilised maksed ei toimi.",
          correction: "Hea valik!",
          sourceUrl: "https://www.kriis.ee/kriisideks-valmistumine-eestis/kuidas-saan-ise-kriisideks-valmistuda"
        },
        {
          id: "E3C",
          text: "Võtan kauba ja ütlen, et maksan hiljem.",
          next: "E4",
          correct: false,
          explain:
            "See tekitab konflikti ja ei ole korrektne käitumine.",
          correction:
            "Tegutse rahulikult ja kasuta ametlikke võimalusi (sularaha, arve, kui pakutakse).",
          sourceUrl: "https://www.kriis.ee/kriisideks-valmistumine-eestis/kuidas-saan-ise-kriisideks-valmistuda"
        }
      ]
    },

    E4: {
      text: "Internet on aeglane. Kuidas hoiad end kursis?",
      choices: [
        {
          id: "E4A",
          text: "Usaldan ainult juhuslikke sotsiaalmeedia kuulujutte.",
          next: null,
          correct: false,
          explain:
            "Kuulujutud levivad kriisis kiiresti ja võivad olla valed või ohtlikud.",
          correction:
            "Jälgi ametlikke kanaleid ja kohaliku omavalitsuse teateid.",
          sourceUrl: "https://www.olevalmis.ee/elektrikatkestus"
        },
        {
          id: "E4B",
          text: "Jälgin ametlikke teateid ja kohaliku omavalitsuse infot.",
          next: null,
          correct: true,
          explain:
            "Õige — ametlik info aitab teha turvalisi otsuseid.",
          correction: "Hea valik!",
          sourceUrl: "https://www.olevalmis.ee/elektrikatkestus"
        }
      ]
    }
  }
};
