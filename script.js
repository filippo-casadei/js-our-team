const teamMembers = [
    {
        name: "Marco Bianchi",
        role: "Designer",
        email: "marcobianchi@team.com",
        img: "img/male1.png"
    },
    {
        name: "Laura Rossi",
        role: "Front-end Developer",
        email: "laurarossi@team.com",
        img: "img/female1.png"
    },
    {
        name: "Giorgio Verdi",
        role: "Back-end Developer",
        email: "giorgioverdi@team.com",
        img: "img/male2.png"
    },
    {
        name: "Marta Ipsum",
        role: "SEO Specialist",
        email: "martarossi@team.com",
        img: "img/female2.png"
    },
    {
        name: "Roberto Lorem",
        role: "SEO Specialist",
        email: "robertolorem@team.com",
        img: "img/male3.png"
    },
    {
        name: "Daniela Amet",
        role: "Analyst",
        email: "danielaamet@team.com",
        img: "img/female3.png"
    }
];

// Collego a JS l'elemento container di HTML e lo salvo in una variabile
const container = document.querySelector(".team-container");
// ciclo con un foreach tutti gli oggetti dell'array
teamMembers.forEach((member) => {
    container.innerHTML +=`
    <div class="card mb-3 col-md-4" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img class="img-fluid rounded-start" src="${member.img}">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h3 class="card-title">${member.name}</h3>
                    <p class="card-text">${member.role}</p>
                    <p class="card-text"> ${member.email}</p>
                </div> 
            </div>
        </div>
    </div>`
});

