const battleList = document.getElementById("battles-list");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let battles = [];
const rowsPerPage = 10;
let currentPage = 1;

const fetchBattles = async () => {
  try {
    const response = await fetch("/battles-list");
    battles = await response.json();
    battles.sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date
    renderBattles();
  } catch (error) {
    console.error("Error fetching battle list:", error);
  }
};

const renderBattles = () => {
  battleList.innerHTML = "";
  const start = (currentPage - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const paginatedBattles = battles.slice(start, end);

  paginatedBattles.forEach((battle) => {
    const tr = document.createElement("tr");
    const dateTd = document.createElement("td");
    const linkTd = document.createElement("td");

    dateTd.textContent = battle.date;
    const link = document.createElement("a");
    link.href = battle.path;
    link.textContent = "View Battle";
    link.target = "_blank";
    linkTd.appendChild(link);

    tr.appendChild(dateTd);
    tr.appendChild(linkTd);
    battleList.appendChild(tr);
  });

  updatePagination();
};

const updatePagination = () => {
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === Math.ceil(battles.length / rowsPerPage);
};

prevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    renderBattles();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentPage < Math.ceil(battles.length / rowsPerPage)) {
    currentPage++;
    renderBattles();
  }
});

// Initial fetch
fetchBattles();
