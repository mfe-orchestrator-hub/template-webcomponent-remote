export interface IMicrofrontendWebComponentProps {
    
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            "microfrontend-web-component": IMicrofrontendWebComponentProps
        }
    }
}
