import { signOut } from "firebase/auth";
import {useContext} from "react";
import { auth } from "../firebase";
import { UserCtx } from "../Documentos/ContextUser";
import "./Buttonout.css";

function ButtonOut() {
    const {setUser} = useContext(UserCtx);

    const signOut = () => {
        auth.signOut()
        .then(() => {
            setUser(null);
    })
    };
    
    return <button className="buttout" onClick={signOut}>Desconectarse</button>
    }

export default ButtonOut;