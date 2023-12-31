import { useGlobalContext } from "../context"


const Header=()=>{
    const{setMenu, menu}=useGlobalContext()

    const controlMenu=()=>{
        setMenu(!menu)
    }
    return(
        <header className="header">
            <div className="logo">
                <a href="/"><h1>F<span className="logo-image">W</span><span className="logo-name"> Faith & Grace</span></h1></a>
            </div>
            <div className='mobileLogo'>
                <img onClick={controlMenu} className="displaymenu" src={menu ?"icon/cancel.png":"icon/icons8-menu-50.png"} alt=""/>
            </div>
        </header>
    )
}



export default Header