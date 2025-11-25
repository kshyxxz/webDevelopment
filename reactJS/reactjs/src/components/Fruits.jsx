import Fruit from "./Fruit";
export default function Fruits() {
    //const fruits = ['Apple','Mango','Banana','Grapes'];
    const fruits = [
        {
            name: "Apple",
            price: "$3.75/lb",
            emoji: "🍎"
        },
        {
            name: "Mango",
            price: "$5.50/lb",
            emoji: "🥭"
        },
        {
            name: "Banana",
            price: "$2.20/lb",
            emoji: "🍌"
        },
        {
            name: "Grapes",
            price: "$3.75/lb",
            emoji: "🍇"
        }
    ];
    return (<ul>
        <div>
            {fruits.map((fruit) => (
                <Fruit 
                    key={fruit.name} 
                    name={fruit.name} 
                    price={fruit.price} 
                    emoji={fruit.emoji}
                />
            ))}
        </div>
    </ul>);
}