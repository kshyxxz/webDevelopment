export default function Message() {
    const handleClick = () => {
        console.log("Button Clicked!");
    }
    return (
        <>
            <button onClick={handleClick}>Click here!</button>
        </>
    );
}