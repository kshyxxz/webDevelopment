import Fruit from "./Fruit";
export default function Fruits() {
    //const fruits = ['Apple','Mango','Banana','Grapes'];
    const fruits = [
        {
            name: "Apple",
            price: '3.75',
            emoji: "🍎",
            soldOut: false
        },
        {
            name: "Mango",
            price: '5.50',
            emoji: "🥭",
            soldOut: true
        },
        {
            name: "Banana",
            price: '2.20',
            emoji: "🍌",
            soldOut: true
        },
        {
            name: "Grapes",
            price: '7.75',
            emoji: "🍇",
            soldOut: false
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
                    soldOut={fruit.soldOut}
                />
            ))}
        </div>
    </ul>);
}