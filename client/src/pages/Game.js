const Game= () => {
  return (
  <div className="flex flex-col justify-center">
    <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl text-center">
      Character Dress Up Game
    </h1>
    <br></br>

      <div className="text-center">
        <h4 className="text-2xl">Be able to change your characters clothes and style using this outfit generator</h4>
        <p className="font-bold">The process is simple!</p>
        <br></br>
        <ol className="text-center">
        <li>Choose your class</li>
        <li>Choose your race</li>
        <li>Mix and match your characters styles</li>
        <li>Have fun!</li>
        </ol>
      </div>
    </div>

  );
};

export default Game