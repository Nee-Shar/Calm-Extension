document.getElementById("joke").addEventListener("click", () => {
  fetch("https://backend-omega-seven.vercel.app/api/getjoke")
    .then((response) => response.json())
    .then((data) => {
      const joke = data[0];
      const question = joke.question;
      const answer = joke.punchline;

      const jokeText = `Q: ${question}\nA: ${answer}`; // Format question and answer

      console.log(jokeText);
      document.getElementById("joke").innerText = jokeText;
    })
    .catch((error) => {
      console.log("An error occurred:", error);
    });
});

document.getElementById("qoute").addEventListener("click", () => {
  fetch("https://api.quotable.io/random?tags=inspirational&maxLength=60")
    .then((response) => response.json())
    .then((data) => {
      const qt = data.content;
      const author = data.author;
      console.log(qt);
      document.getElementById("qoute").innerHTML = `${qt}       ~ ${author}`;
    })
    .catch((error) => {
      console.log("An error occurred:", error);
    });
});

let audioElement;

document.getElementById("music").addEventListener("click", () => {
  const musicFiles = [
    "music1.mp3",
    "music2.mp3",
    "music3.mp3",
    "music4.mp3",
    "music5.mp3",
    "music6.mp3",
  ];
  const randomIndex = Math.floor(Math.random() * musicFiles.length);
  const randomMusic = musicFiles[randomIndex];

  if (audioElement) {
    audioElement.pause();
    audioElement.currentTime = 0;
    audioElement.src = randomMusic;
    audioElement.play();
  } else {
    audioElement = new Audio(randomMusic);
    audioElement.play();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "s" || event.key === "S") {
    if (audioElement) {
      audioElement.pause();
      audioElement.currentTime = 0;
    }
  }
});
