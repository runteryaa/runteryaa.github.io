document.addEventListener("DOMContentLoaded", function(event) {
  fetch("/names.json")
    .then(response => response.json())
    .then(data => {
		
      const Names = Object.keys(data);
      let Html = "";

      for (const Name of Names) {
        const name = data[Name];
		const image = data[Name].img;
		const link = data[Name].link;


        Html += `
          <div onclick="window.location.href='${link}'">
          </div>
        `;
      }

      document.getElementById("gallery").insertAdjacentHTML("beforeend", Html);
    });
});
