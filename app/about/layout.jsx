
export const metadata = {
    title: "About",
}

export default function AboutLayout({children}) {
    return <>
    <nav>
        <h3>Seccion About</h3>

        <ul>
            <li>Info</li>
            <li>Data</li>
        </ul>
    </nav>
    {children}
    </>
}