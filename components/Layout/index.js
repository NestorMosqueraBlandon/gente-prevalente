import Header from "./Header"

export default function index({children}) {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}
