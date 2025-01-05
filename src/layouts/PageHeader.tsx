import { ArrowLeft, Bell, Menu, Mic, Search, User } from "lucide-react";
import main from "../assets/main.png";
import Button from "../components/Button";
import { useState } from "react";

const PageHeader = () => {
    const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);
    return (
        <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
            <div className={`gap-4 items-center flex-shrink-0 ${showFullWidthSearch ? "hidden" : "flex"}`}>
                <Button size="icon">
                    <Menu color="white" />
                </Button>
                <a href="">
                    <img src={main} alt="logo" className="h-8" />
                </a>
            </div>
            <form className={`gap-4 flex-grow justify-center ${showFullWidthSearch ? "flex" : "hidden md:flex"}`}>
                {showFullWidthSearch && (<Button onClick={() => { setShowFullWidthSearch(false) }} className="flex-shrink-0 bg-neutral-700" size="icon">
                    <ArrowLeft color="white" />
                </Button>)}
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
                <Button className="flex-shrink-0 bg-neutral-700" size="icon">
                    <Mic color="white" />
                </Button>
            </form>
            <div className={`flex-shrink-0 md:gap-2 items-center ${showFullWidthSearch ? "hidden" : "flex"}`}>
                <Button onClick={() => setShowFullWidthSearch(true)} size="icon" className="md:hidden">
                    <Search color="white" />
                </Button>
                <Button size="icon" className="md:hidden">
                    <Mic color="white" />
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
