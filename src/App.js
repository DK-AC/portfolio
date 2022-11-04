import './App.css'
import {Header} from './header'
import {Main} from './main'
import {Skills} from './skills'
import {Projects} from './projects'
import {Contacts} from './contacts'
import {Footer} from './footer'

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>
    )
}

export default App
