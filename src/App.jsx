import styles from "./App.module.scss";

function App() {
  /**
   * a message to display on the screen while the site is under construction
   * @type {string}
   */
  const quote = "Site under construction!";

  /**
   * Adds the current date and time to the message
   * @date 06/07/2023 - 23:25:12
   * @param {string} message
   * @returns {string}
   */
  function getMessage(message) {
    const date = new Date();
    return `${message} - ${date.toLocaleDateString()} - ${date.toLocaleTimeString()}`;
  }

  return (
    <div className="flex justify-center items-center h-screen font-sans">
      <h1 className="text-3xl">{getMessage(quote)}</h1>
    </div>
  );
}

export default App;
