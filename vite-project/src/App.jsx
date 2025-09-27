import './App.css'

/**
 * Membuat component Header.
 * Component Header menampilkan navigasi.
 */
function Header() {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Content</li>
      </ul>
    </nav>
  )
}

/**
 * Membuat component content.
 * Component content menampung konten utama.
 */

function Content() {
  return <h1>Content</h1>
}

/**
 * Membuat component footer.
 * Component footer menampilkan footer.
 */

function Footer() {
  return (
      <footer>
      <h2>by Esen</h2>
      <p>Created by React JS</p>
      </footer>
  )
}

function Hello() {
  const nama = "Sahlaa";
  return (
    <>
    <h2>Hello React</h2>
    <p>Saya {nama} seorang mahasiswa Sistem Informasi</p>
    </>
  )
}

function Profile (props) {
  return (
    <>
    <h1>{props.name}</h1>
    <p>Age: {props.age}</p>
    <p>Country: {props.country}</p>
    </>
    )
}

function App() {

  return (
    <>
    <Header/>
    <Content/>
    <Hello/>
    <Profile name="Asa" age={20} country="Spain"/>
    <Footer/>
    </>
  )
}

export default App