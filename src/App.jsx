function App() {
    const userInput = "<img src=x onerror=alert(1)>";

    // toto Semgrep chyti jako React XSS
    <div dangerouslySetInnerHTML={{ __html: userInput }} />

    const password = "SuperSecret123!";
    const aws_secret = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY";


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
