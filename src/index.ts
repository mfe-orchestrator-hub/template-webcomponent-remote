import r2wc from "@r2wc/react-to-web-component"
import MicrofrontendWebComponent from "./MicrofrontendWebComponent"

const name = "microfrontend-web-component"

customElements.get(name) ||
    customElements.define(
        name,
        r2wc(MicrofrontendWebComponent, {
            props: {
            }
        })
    )