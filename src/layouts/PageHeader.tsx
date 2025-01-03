import { Bell, Menu, Mic, Search, User } from "lucide-react";
import main from "../assets/main.png";
import Button from "../components/Button";

const PageHeader = () => {
    return (
        <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
            <div className="flex gap-4 items-center flex-shrink-0">
                <Button size="icon">
                    <Menu color="white" />
                </Button>
                <a href="">
                    <img src={main} alt="logo" className="h-8" />
                </a>
            </div>
            <form className="md:flex hidden gap-4 flex-grow justify-center">
                <div className="flex flex-grow max-w-[600px]">
                    <input
                        type="search"
                        placeholder="Search"
                        className="bg-neutral-800 text-white rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus:border-blue-500 outline-none"
                    />
                    <div className="bg-neutral-700 rounded-r-full border border-secondary-border border-l-0 flex-shrink-0">
                        <Button size="icon" className="rounded-r-full bg-neutral-700">
                            <Search color="white" />
                        </Button>
                    </div>
                </div>
                <Button className="flex-shrink-0 bg-neutral-700" size="icon" type="submit">
                    <Mic color="white" />
                </Button>
            </form>
            <div className="flex flex-shrink-0 md:gap-2 items-center">
                <Button size="icon" className="md:hidden">
                    <Search color="white" />
                </Button>
                <Button size="icon">
                    <Bell color="white" />
                </Button>
                <Button size="icon">
                    <User color="white" />
                </Button>
            </div>
        </div>
    )
}

export default PageHeader
