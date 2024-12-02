const motivationaMessages = [
    "You're doing great!",
    "Keep up the good work!",
    "You're awesome!",
    "You're killing it!",
    "You're the best!",
    "Solo sigué adelante!",
    "You're a star!",
    "You're a rockstar!",
    "You're a superhero!",
    "You're a legend!",
    "You're a genius!",
    "You're a wizard!",
    "You're a master!",
    "You're a champion!",
    "You're a warrior!",
    "You're a beast!",
    "You're a machine!",
    "You're a powerhouse!",
    "You're a force of nature!",
    "You're a miracle!",
    "You're a blessing!",
    "You're a gift!",
    "You're a treasure!",
    "You're a jewel!",
    "You're a diamond!",
    "You're a pearl!",
    "I believe in you!",
    "You're a winner!",
    "You're a success!",
    "You're a victor!",
    "You're a conqueror!",
    "You're a leader!",
    "You're a boss!",
    "You're a king!",
    "You're a queen!",
    "You're a prince!",
    "You're a princess!",
    "You're a knight!",
    "Eres el señor de la noche!",
  ];
  
  const funnyCommit = () => {
      // elige un mensaje aleatorio de la lista y lo imprime en azul
      const message = motivationaMessages[Math.floor(Math.random() * motivationaMessages.length)];
      console.log(`\x1b[36m${message}\x1b[89m`);
      // \x1b[34m es colocar el texto en color celeste
      // \x1b[89m es para regresar el color del texto a su color original
  }
  
  module.exports = {
    funnyCommit
  };