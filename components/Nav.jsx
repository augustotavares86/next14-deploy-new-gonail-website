import Link from "next/link";

//Hooks
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";



const links = [
    { path: '/', name: 'Início' },
    { path: '/sobre-nos', name: 'sobre-nos' },
    { path: '/servicos', name: 'servicos' },
    { path: '/Imagens', name: 'Imagens' },
    { path: '/contactos', name: 'contactos' },
]

const Nav = ({ containerStyles, linkStyles, underlineStyles, }) => {
    const path = usePathname();
    return (
        <nav className={`${containerStyles}`}>
          {
            links.map((link, index) => {
              return (
                <Link
                href={link.path}
                key={index}
                className={`uppercase ${linkStyles}`}
                >
                {link.path === path && (
                   <motion.span 
                    initial={{ y: '-100%' }}
                    animate={{ y: 0 }}
                    transition={{ type: 'tween' }}
                    layoutId='underline'
                    className={`${underlineStyles}`}
                   />
                )}  
                {link.name}  
                </Link>
              )
            })
          }
        </nav>
    )
}

export default Nav