import { WhatsAppIcon, InstagramIcon, FacebookIcon } from "../../assets/svg-icons/icons"

export function SideMenu() {
    return (
        <div className="md:flex flex-col justify-between p-2 w-auto h-screen hidden border-r vina-sans-regular">
            <div className="flex flex-col gap-10">
                <header className="flex flex-col justify-center items-center">
                    <h2 className="text-nowrap text-7xl">lorem ipsum</h2>
                    <p className="pt-2 bahianita-regular text-3xl text-start text-pretty">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </header>
                <nav>
                    <ul className="flex flex-col gap-5 text-4xl">
                        <li><a href="#">option menu</a></li>
                        <li><a href="#">option </a></li>
                        <li><a href="#">optionme</a></li>
                        <li><a href="#">option menu</a></li>
                    </ul>
                </nav>
            </div>
            <footer>
                <ul className="flex justify-center gap-4 *:p-2 *:border *:rounded-full">
                    <li><a href="#"><WhatsAppIcon size={24} color="currentColor"/></a></li>
                    <li><a href="#"><InstagramIcon size={24} color="currentColor"/></a></li>
                    <li><a href="#"><FacebookIcon size={24} color="currentColor"/></a></li>
                </ul>
            </footer>
        </div>
    )
}