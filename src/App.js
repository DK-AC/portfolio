import './App.scss'
import {Header} from './header'
import {Main} from './main'
import {Skills} from './skills'
import {Projects} from './projects'
import {Contacts} from './contacts'
import {Footer} from './footer'

export const App = () => {
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

