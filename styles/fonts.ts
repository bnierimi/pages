// import { Inter, Lora, Source_Sans_Pro } from 'next/font/google'
import localFont from 'next/font/local'
 
// define your variable fonts
// const inter = Inter()
// const lora = Lora()

// define 2 weights of a non-variable font
// const sourceCodePro400 = Source_Sans_Pro({ weight: '400' })
// const sourceCodePro700 = Source_Sans_Pro({ weight: '700' })

// define a custom local font where GreatVibes-Regular.ttf is stored in the styles folder
const instrumentSans = localFont({ src: 'InstrumentSans-VariableFont-wdth-wght.ttf' })
const poppins = localFont({ src: 'Poppins-Regular.ttf' })
const questrial = localFont({ src: 'Questrial-Regular.ttf' })
 
// export { inter, lora, sourceCodePro400, sourceCodePro700, greatVibes }
 
export { instrumentSans, poppins, questrial }