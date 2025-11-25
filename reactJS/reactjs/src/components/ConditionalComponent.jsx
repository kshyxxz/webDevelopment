import If from "./If";
import Else from "./Else";
export default function ConditionalComponent({display}) {
    if(display){
        return(
            <If />
        );
    }
    else {
        return (
            <Else />
        );
    }
}