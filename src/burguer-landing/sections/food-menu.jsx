import { infoMenuItems } from "../data/data"
import { PlusIcon } from "../../assets/svg-icons/icons"

export function FoodMenu() {
    return (
        <section className="flex flex-col items-center gap-10 p-2 pt-10 w-full h-screen overflow-hidden">
            <h1 className="vina-sans-regular text-5xl">Lorem ipsum dolor sit amet consectetur</h1>
            <article className="flex flex-wrap justify-center items-center gap-6 mt-20 w-full h-auto overflow-y-scroll">
                {infoMenuItems.map((item) => (
                    <div key={item.id} className="flex flex-col gap-2 w-50 h-auto">
                        <div>
                            <img src={item.imageUrl} alt="Preview of the product" />
                        </div>
                        <div className="flex">
                            <div>
                                <h3 className="vina-sans-regular">{item.title}</h3>
                                <p className="bahianita-regular">{item.description}</p> 
                            </div>
                            <button className="flex justify-center items-center size-8 border rounded-full">
                                <PlusIcon size={24} color="currentColor"/>
                            </button>
                        </div>
                        <div className="vina-sans-regular">
                            <span>$</span>
                            <span>{item.price}</span>
                        </div>
                    </div>
                ))}
            </article>
        </section>
    )
}