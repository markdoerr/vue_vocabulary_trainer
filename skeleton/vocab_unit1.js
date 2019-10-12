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
]

for (var vocab of vocabulary) {
  vocab.en_correct = false;
  vocab.de_correct = false;
  vocab.trained = false;
  vocab.num_errors = 0;
}
