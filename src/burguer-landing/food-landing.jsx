import { SideMenu } from "./components/side-menu"
import { FoodMenu } from "./sections/food-menu"

export function FoodLanding() {
    return (
        <div className="flex justify-center w-full">
            <SideMenu />
            <FoodMenu />
        </div>
    )
}