import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter'
import { name, age, templateString } from './bases/01-types';
import { pokemons } from './bases/02-objects';
import { charmander } from './bases/03-classes';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more ${ name } y tengo ${ age }
    </p>
  </div>
  <div>
    ${ templateString.length }
  </div>
  <div>
    ${ pokemons[0].name }
  </div>
  <div>
    ${ charmander.name }
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
