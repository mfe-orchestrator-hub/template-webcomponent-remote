import React from "react"
import ReactDOM from "react-dom/client"
import "./index"

export const App: React.FC = () => {
    return (
        <microfrontend-web-component />
    )
}

ReactDOM.createRoot(document.getElementById("root")!).render(<App />)
