import Logo from "./assets/icon/Logo(Nav).svg";  

const Nav = () => {
    return (
        <nav className="nav">
            <div >
                <a href="" className="logoContainer">
                    <img src={Logo} alt="logo" className="logo" />
                    <span className="logoName">Imperial</span>
                </a>
            </div>
            <div className="navPanel">
                <a href="#">Каталог</a>
                <a href="#">О нас</a>
                <a href="#">Контакты</a>
                <a className="reservetion" href="">Забронировать</a>
            </div>
        </nav>
    );
}

export default Nav;