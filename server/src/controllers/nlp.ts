// @ts-ignore
import aposToLexForm from "apos-to-lex-form";
import { WordTokenizer, SentimentAnalyzer, PorterStemmer } from "natural";
// @ts-ignore
import SpellCorrector from "spelling-corrector";
import {removeStopwords} from "stopword";
// @ts-ignore
const tokenizer = new WordTokenizer();
const spellCorrector = new SpellCorrector();
spellCorrector.loadDictionary();

const analyzer = new SentimentAnalyzer("English", PorterStemmer, "afinn");

export function getSentiment(str: string): number {
  if (!str.trim()) {
    return 0;
  }

  const lexed = aposToLexForm(str)
    .toLowerCase()
    .replace(/[^a-zA-Z\s]+/g, "");

  const tokenized = tokenizer.tokenize(lexed);

  const fixedSpelling = tokenized.map((word) => spellCorrector.correct(word));
  // console.log(stopword)
  const stopWordsRemoved = removeStopwords(fixedSpelling);

  const analyzed = analyzer.getSentiment(stopWordsRemoved);
  // console.log(analyzed);
  if (analyzed >= 1) return 1; // positive
  if (analyzed === 0) return 0;
  return -1;
  // return analyzed;
}
