// import { Inter, Lora, Source_Sans_Pro } from 'next/font/google'
import localFont from 'next/font/local'
 
// define your variable fonts
// const inter = Inter()
// const lora = Lora()

// define 2 weights of a non-variable font
// const sourceCodePro400 = Source_Sans_Pro({ weight: '400' })
// const sourceCodePro700 = Source_Sans_Pro({ weight: '700' })

// define a custom local font where GreatVibes-Regular.ttf is stored in the styles folder
const cavolini = localFont({ src: 'fonts/CAVOLINI.ttf' })
const didactGothic = localFont({ src: 'fonts/DidactGothic-Regular.ttf' })
const instrumentSans = localFont({ src: 'fonts/InstrumentSans-VariableFont-wdth-wght.ttf' })
const monaco = localFont({ src: 'fonts/Monaco.ttf' })
const poppins = localFont({ src: 'fonts/Poppins-Regular.ttf' })
const questrial = localFont({ src: 'fonts/Questrial-Regular.ttf' })
const sfProDisplay = localFont({ src: 'fonts/SFPRODISPLAYREGULAR.otf' })
const trialByCupcakes = localFont({ src: 'fonts/Trial by Cupcakes - Quickpen.otf' })
 
// export { inter, lora, sourceCodePro400, sourceCodePro700, greatVibes }
 
export {
  cavolini, didactGothic, instrumentSans, monaco,
  poppins, questrial, sfProDisplay, trialByCupcakes
}