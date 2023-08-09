import './style.scss'
import morseCharacters from './data/eng-morse.ts'

const textInputField = document.querySelector<HTMLInputElement>(".translator__input--input-field")
const displayOutput = document.querySelector<HTMLDivElement>(".translator__display--output");
const displayInput = document.querySelector<HTMLDivElement>(".translator__display--input");
let userInput: string;
let translationToMorse: any;

if (!textInputField || !displayInput || !displayOutput) {
  throw new Error("check selector")
}

const getUserInput = (e: Event) => {
  userInput = (e.target as HTMLInputElement).value.toUpperCase().replace(/ /g, "/");
  if (userInput) {
    return translate(userInput);
  }
}
textInputField.addEventListener("input", getUserInput)

const translate = (userInput: string) => {
  const translateArray = [...userInput];
  console.log(translateArray)
  translationToMorse = translateArray.map((character) => {
    return (morseCharacters[character] as any)
  })
  return displayOutput.innerText = `${translationToMorse}`
}