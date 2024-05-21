import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function HomeLayout({ children }) {
    return (
        <main id="home_layout">
            <Navbar />
            {children}
            <Footer />
        </main>
    )
}