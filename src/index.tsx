import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {ToggleColorMode} from "./app/ThemeProvider";
import {App} from "./app/App";
import {UsersStoreProvider} from "./app/StoreProvider";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <ToggleColorMode>
            <UsersStoreProvider>
                <App/>
            </UsersStoreProvider>
        </ToggleColorMode>
    </React.StrictMode>
);


