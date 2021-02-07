// Test import of a JavaScript function
import example from './ts/example.ts'

// Test import of an asset
import webpackLogo from './images/webpack-logo.svg'

// Test import of styles
import './styles/main.scss'

// Appending to the DOM
const logo = document.createElement('img')
logo.src = webpackLogo

const heading = document.getElementById('heading')
heading.innerText = example()

const app = document.querySelector('#root')
app.append(logo, heading)
