const scoreBoard = document.getElementById("scoreboard");
const data = [
  {
    category: "Reaction",
    score: 80,
    icon: "./assets/images/icon-reaction.svg",
  },
  {
    category: "Memory",
    score: 92,
    icon: "./assets/images/icon-memory.svg",
  },
  {
    category: "Verbal",
    score: 61,
    icon: "./assets/images/icon-verbal.svg",
  },
  {
    category: "Visual",
    score: 72,
    icon: "./assets/images/icon-visual.svg",
  },
];

const summaryScore = (data, i) => {
  const { category, score, icon, color } = data;
  return `
        <div class="score-entry color-${i}">
            <div class="category">
                <img src=${icon}>
                <p>${category}</p>
            </div>
            <p class="grey"><span style="color:#000">${score}</span> / 100</p>
        </div>
        `;
};

data.forEach((entry, i) => {
  scoreBoard.innerHTML += summaryScore(entry, i);
});
