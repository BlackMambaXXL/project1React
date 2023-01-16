import style from './Footer.module.css';

const footerMenu = ['Main', 'About', 'Contacts' , 'Navigation' , 'Profile'];

const Footer = () =>{
    return (
        <div className={style.footerMenu}>

            {
                footerMenu.map((footerMenu) =>{
                    return (
                        <a className={style.footerMenuA}>{footerMenu}</a>
                    )
                })
            }
            
        </div>
    )
} 

export default Footer;