const getALL = async () => {
  try {
    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
    const data = await res.json();

    displayIssues(data.data);
  } catch (error) {
    console.log("Error:", error);
  }
};

const displayIssues = (issues) => {
  const container = document.getElementById("card-container");
  container.innerHTML = "";

  issues.forEach(issue => {

    const title = issue.title || "No Title";
    const description = issue.description || "No description";
    const priority = issue.priority || "LOW";
    const type = issue.type || "BUG";

    // ✅ FIXED IMAGE LOGIC
    const imageSrc =
      issue.status === "open"
        ? "./assets/Open-Status.png"
        : "./assets/Closed- Status .png";

    const card = document.createElement("div");

    card.innerHTML = `
      <div class="card bg-base-100 shadow-md border border-gray-200 rounded-xl">

        <div class="h-2 bg-purple-400 rounded-t-xl"></div>

        <div class="card-body p-4 space-y-2">

          <div class="flex justify-between items-center">

            <div class="w-8 h-8 flex items-center justify-center rounded-full bg-purple-100">
             <img src="${imageSrc}" alt="">
            </div>

            <div class="badge bg-gray-200 text-gray-600 px-3 py-2 text-xs">
              ${priority}
            </div>
          </div>

          <h2 class="text-base font-semibold">
            ${title}
          </h2>

          <p class="text-gray-500 text-xs">
            ${description}
          </p>

          <div class="flex gap-2 flex-wrap">
            <div class="badge border-red-300 text-red-500 bg-red-50 gap-1 px-2 py-1 text-xs">
              <i class="fa-solid fa-bug"></i>
              ${type}
            </div>
          </div>

          <div class="border-t pt-2 text-xs text-gray-400">
            <p>#${issue._id || 1} by ${issue.author || "Unknown"}</p>
            <p>${new Date(issue.createdAt).toLocaleString()}</p>
          </div>

        </div>
      </div>
    `;

    container.appendChild(card);
  });
};

getALL();