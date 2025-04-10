import Navbar from "../navbar.jsx"
import Footer from "../footer.jsx"
import Cover from "../cover.jsx"
import Residential from "../residential.jsx"
import Commercial from "../commercial.jsx"
import Detailed from "../detailed.jsx"
import About from "../about.jsx"

const HomePage = () => {

return (
    <div>
    <Navbar />
    <Cover />
    <Residential />
    <Commercial />
    <Detailed />
    <About />
    <Footer />
    </div>
    )   
}

export default HomePage