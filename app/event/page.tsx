import { Navbar } from '../../components/navbar'
import EventListClient from '../../components/event-list-client'

export default function EventPage() {
    return (
        <>
            <Navbar />

            <main className="max-w-7xl mx-auto px-6 py-6">
                <EventListClient />
            </main>
        </>
    )
}