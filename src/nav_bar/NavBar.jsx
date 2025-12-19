import penguindance from '/penguindance.gif'



export default function NavBar() {
  return (
    <nav className="nav">

      <img src={penguindance} alt="guat??" className='penguin' />
      <ul>
        <li className='nav-selection'><a href="#projects">Projects</a></li>
        <li className='nav-selection'><a href="#experience">Experience</a></li>
        <li className='nav-selection'><a href="#about">About Me</a></li>
        <li className='nav-selection'><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}