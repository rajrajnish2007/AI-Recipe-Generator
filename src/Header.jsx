import logo from "./assets/logo.svg"
export default function Header(){
    return(
    <>
    <header id="Header">
      <img src={logo} alt="Your Chef" />
      <h1>Chef Claude</h1> 
    </header>
    </>
    )
}