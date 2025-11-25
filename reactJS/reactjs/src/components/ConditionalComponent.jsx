import If from "./If";
import Else from "./Else";
export default function ConditionalComponent({display}) {
    let message;
    message = display ? <If /> : <Else />
    return message;
}