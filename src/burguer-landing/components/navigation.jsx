

export function Navigation() {
  return (
    <header className="flex justify-between items-center pt-2 px-2 w-full h-auto">
      <img src="./images/logo.webp" alt="logotype" className="w-30 h-auto"/>
      <nav>
        <ul className="flex justify-between gap-12 text-4xl">
          <li className="londrina-outline-regular"><a href="#">MENU</a></li>
          <li className="londrina-outline-regular"><a href="#">ENCONTRANOS</a></li>
          <li className="londrina-outline-regular"><a href="#">CONTACTO</a></li>
        </ul>
      </nav>
    </header>
  )
}