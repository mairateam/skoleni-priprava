function App() {
    const userInput = "<img src=x onerror=alert(1)>";

    eval(userInput);
    const API_KEY = "AIzaSyD9f3kL2mNpQrTvWxYz1234567890abcde";

    return (
    <main>
      <img src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Socrate_du_Louvre.jpg" width={250}></img>
      <h1>Sokrates kazi mladez, protoze:</h1>
      <ul>
        <li>Hani stare bohy</li>
        <li>Zavadi nova bozstva</li>
      </ul>
    </main>
  )
}

export default App
