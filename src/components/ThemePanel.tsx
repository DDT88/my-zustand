import React from "react";
import {useStore} from '../store/store'


export const ThemePanel:React.FC =() =>{
    const  theme= useStore(state => state.theme)
    return <div>Ciao {theme}</div>
}

