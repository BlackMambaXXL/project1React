import style from './Header.module.css';

const headerMenu = ['Main', 'About', 'Contacts' , 'Navigation' , 'Profile'];

const Header = () =>{
    return (
        <div className={style.headerMenu}>

            {
                headerMenu.map((headerMenu) =>{
                    return (
                        <a className={style.headerMenuA}>{headerMenu}</a>
                    )
                })
            }
            
        </div>
    )
} 

export default Header;
