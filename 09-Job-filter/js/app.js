const cards = document.querySelector(".cards");
const allFilter = document.querySelector(".all-filter-content");
const clearBtn = document.querySelector(".all-filter-clear");
let tecnologies = [];

document.addEventListener("DOMContentLoaded", () => {

    clearBtn.addEventListener("click", () => {
        location.reload();
    })

    showHTML(jobs);
    function showHTML(jobs) {
        clearHTML();

        jobs.forEach((job) => {
            const oneCard = document.createElement("DIV");
            oneCard.classList.add("one-card");
        
            const jobNew = job.new === true ? "New" : "";
            const jobFeatured = job.featured === true ? "Featured" : "";
            const lenguagesMap = job.languages.map(lenguage => `<p class="two-children-tecnologies" data-lenguage="${lenguage}">${lenguage}</p>`).join("");
            const ToolsMap = job.tools.map(tool => `<p class="two-children-tecnologies" data-tool="${tool}">${tool}</p>`).join("");
            
            oneCard.innerHTML = `
                    <div class="one-card-flex">
                    <div class="one-children">
                      <div class="one-children-image-info">
                        <img src="${job.logo}" alt="Job image">
                        <div class="one-children-info">
                          <div class="one-children-info-1">
                            <p>${job.company}</p>
                            ${jobNew && `<p>${jobNew}</p>`}
                            ${jobFeatured && `<p>${jobFeatured}</p>`}
                          </div>
                          <div class="one-children-info-2">
                            <h4>${job.position}</h4>
                          </div>
                          <div class="one-children-info-3">
                            <p>${job.postedAt}</p>
                            <p>${job.contract}</p>
                            <p>${job.location}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="two-children">
                      ${lenguagesMap} <p class="two-children-tecnologies" data-role="${job.role}">${job.role}</p> <p class="two-children-tecnologies" data-level="${job.level}">${job.level}</p> ${ToolsMap}
                    </div>
                  </div>
                `;
        
                cards.appendChild(oneCard);
          });
    }

    cards.addEventListener("click", e => {
        if(e.target.classList.contains("two-children-tecnologies")) {
            const selectedLenguage = e.target.dataset.lenguage || e.target.dataset.role || e.target.dataset.level || e.target.dataset.tool;
            filteredLenguage(selectedLenguage);
        }
    });

    function filteredLenguage(selected) {
        const results = jobs.filter(filterLenguage(selected));
        const item = document.createElement("DIV");
        item.classList.add("read-filter")
        item.innerHTML = `
            <p>${selected}</p>
        `;

        allFilter.appendChild(item);
        
        if(results.length) {
            showHTML(results);
        }else {
            console.log("hola");
            
        }
        
    }

    function filterLenguage(selected) {
        return (job) => {
            const allFilter = [...job.languages , ...job.tools, job.role, job.level];
            return allFilter.includes(selected);
        }
    }

    function clearHTML() {
        while(cards.firstChild) {
            cards.removeChild(cards.firstChild);
        }
    }
    
});
