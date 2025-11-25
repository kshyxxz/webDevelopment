const name = "robin";
function Hello({person}) {
    return <h1>hello {person.seatNumbers} {person.name}, {person.msg} {person.emoji}</h1>;
}

export default Hello;