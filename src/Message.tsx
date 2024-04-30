function Message() {

    const name = 'Tim';
    if (name) {
        return <h1>Hello World {name}</h1>;
    }
    return <h1>hello world</h1>
}


export default Message;