document.addEventListener("DOMContentLoaded", function(event) {
  fetch("/names.json")
    .then(response => response.json())
    .then(data => {
		
      const Names = Object.keys(data);
      let Html = "";

      for (const Name of Names) {
        const name = data[Name].name;
		    const image = data[Name].img;
		    const link = data[Name].link;


        Html += `
          <div class="item btn" onclick="window.location.href='${link}'" ondragstart="return false;">
            <a href="https://runterya.ga/${link}">
              <img src="${image}" alt="${name}">
              <h3>${name}</h3>
            </a>
          </div>
        `;
      }

      document.getElementById("gallery").insertAdjacentHTML("beforeend", Html);
    });
});
