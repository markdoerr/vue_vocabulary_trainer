var wordtype = {noun: 'noun',
                verb: 'verb',
                auxiliary_verb: 'auxiliary_verb',
                adjective: 'adjective',
                 adverb: 'adverb' };

var vocabulary = [
  { en: "tomorrow", de: "morgen", pl:"" },
  { en: "today", de: "heute", pl:"" },
  { en: "bird", de: "Vogel", pl:"birds" },
  { en: "tree", de: "Baum", pl:"trees" },
  { en: "forget", de: "vergessen", pl:"" },
  { en: "ill", de: "krank", pl:"" },
  { en: "headache", de: "Kopfweh", pl:"" },
  { en: "hurt", de: "verletzen", pl:"" },
  { en: "leg", de: "Bein", pl:"" },
  { en: "stomach ache", de: "Bauchweh", pl:"" },
  { en: "break", de: "brechen", pl:"" },
  { en: "stomach", de: "Bauch", pl:"" },
  { en: "mouth", de: "Mund", pl:"" },
  { en: "nose", de: "Nase", pl:"" },
  { en: "head", de: "Kopf", pl:"" },
  { en: "ear", de: "Ohr", pl:"" },
  { en: "cheek", de: "Wange", pl:"" },
  { en: "foot", de: "Fuß", pl:"" },
  { en: "toe", de: "Zeh", pl:"" },
  { en: "tooth", de: "Zahn", pl:"" },
  { en: "teeth", de: "Zähne", pl:"" },
  { en: "finger", de: "Finger", pl:"" },
  { en: "hand", de: "Hand", pl:"" },
  { en: "arm", de: "Arm", pl:"" },
  { en: "elbow", de: "Ellenbogen", pl:"" },
  { en: "shoulder", de: "Schulter", pl:"" },
  { en: "breast", de: "Brust", pl:"" },
  { en: "hair", de: "Haare", pl:"" },
  { en: "patient", de: "Patient", pl:"" },
  { en: "tablet", de: "Tablette", pl:"" },
  { en: "a lot", de: "sehr", pl:"" },
]

for (var vocab of vocabulary) {
  vocab.en_correct = false;
  vocab.de_correct = false;
  vocab.trained = false;
  vocab.num_errors = 0;
}
