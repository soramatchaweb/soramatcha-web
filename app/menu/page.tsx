import { Navbar } from '../../components/navbar'
import MenuListClient from '../../components/menu-list-client'

export default function MenuPage() {
    return (
        <>
            <Navbar />
            <div className="">
                <div className="container mx-auto px-6 py-6">                
                    <MenuListClient />
                </div>
            </div>
        </>
    )
}