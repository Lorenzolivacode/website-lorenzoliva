import viewArtImg from "./../assets/projects-img/VA-screen.jpg";
import adviceAppImg from "./../assets/projects-img/Advice-screen.jpg";
import donutShopImg from "./../assets/projects-img/Donut-screen.jpg";
import listArtistsImg from "./../assets/projects-img/ListArtists-screen.jpg";
import todohImg from "./../assets/projects-img/todohlist-screen.jpg";
import calcImg from "./../assets/projects-img/Calc-screen.jpg";
import ultimateWeatherImg from "./../assets/projects-img/Ultimate-Weather-screen.jpg";
import movieDBImg from "./../assets/projects-img/Movie-screen.jpg";
import boomImg from "./../assets/projects-img/Boom-screen.jpg";
import todoImg from "./../assets/projects-img/Todotoday-screen.jpg";
import ticketAOImg from "./../assets/projects-img/TicketArtOne-screen.jpg";

const githubUrlBase = "https://github.com/Lorenzolivacode/";

export const portfolioData = [
  /* {
    id: self.crypto.randomUUID(),
    title: "project",
    tecnicalRequirements: ["html", "css", "javascript", "react"],
    img: "",
    description: "Project description",
    linkGithub: "https://github.com/",
    linkProject: "",
    created: "yyyy-mm-dd",
  }, */
  {
    id: self.crypto.randomUUID(),
    title: "ViewArt",
    tecnicalRequirements: ["react", "reactrouter", "tailwind"],
    img: viewArtImg,
    description: {
      italian:
        "Web app gestionale di opere d'arte, sfrutta un fake server per utilizzare, modificare o aggiungere dati.",
      english:
        "Web app for managing works of art, uses a fake server to use, modify or add data.",
    },
    linkGithub: `${githubUrlBase}Edgemony-exercises/tree/main/2024-07-22-Project-ViewArt`,
    linkProject: "",
    created: "2024-07-22",
  },
  {
    id: self.crypto.randomUUID(),
    title: "Advice app",
    tecnicalRequirements: ["css", "react"],
    img: adviceAppImg,
    description: {
      italian: "Applicazione che genera casualmente una frase ad ogni click.",
      english: "Application that generates a sentences randomly on each click.",
    },
    linkGithub: `${githubUrlBase}Edgemony-exercises/tree/main/2024-07-15-Esercitazione2`,
    linkProject: "https://www.lorenzoliva.it/advice-app/",
    created: "2024-07-15",
  },
  {
    id: self.crypto.randomUUID(),
    title: "D'ohnut shop",
    tecnicalRequirements: ["css", "react"],
    img: donutShopImg,
    description: {
      italian:
        "Applicazione per un finto shop che permette di selezionare il numero di prodotti da acquistare, vedere il costo totale e sfogliare le immagini del prodotto.",
      english:
        "Fake shop application that allows you to select the number of products to purchase, see the total cost and browse product images.",
    },
    linkGithub: `${githubUrlBase}Edgemony-exercises/tree/main/2024-07-11-E-commerce`,
    linkProject: "",
    created: "2024-07-11",
  },
  {
    id: self.crypto.randomUUID(),
    title: "List Artists",
    tecnicalRequirements: ["css", "react"],
    img: listArtistsImg,
    description: {
      italian:
        "Web app che permette di filtrare una lista di artisti preferiti e l'aggiunzione di nuovi o rimozione (temporanea).",
      english:
        "Web app that allows you to filter a list of favorite artists and add new ones or remove them (temporarily).",
    },
    linkGithub: `${githubUrlBase}Edgemony-exercises/tree/main/2024-07-09-Esercitazione-Form-ListArtist`,
    linkProject: "https://list-artist.vercel.app/",
    created: "2024-07-09",
  },
  {
    id: self.crypto.randomUUID(),
    title: "To d'oh List",
    tecnicalRequirements: ["css", "react"],
    img: todohImg,
    description: {
      italian:
        "Web app di una to do list che permette di aggiungere e rimuovere to do (temporaneamente).",
      english:
        "To do list web app that allows you to add and remove to dos (temporarily).",
    },
    linkGithub: `${githubUrlBase}Edgemony-exercises/tree/main/2024-07-08-Esercitazione-ToDo`,
    linkProject: "https://todoh-list.vercel.app/",
    created: "2024-07-08",
  },
  {
    id: self.crypto.randomUUID(),
    title: "Calculator",
    tecnicalRequirements: ["css", "react"],
    img: calcImg,
    description: {
      italian:
        "Calcolatrice che permette l'utilizzo delle principali operazioni.",
      english: "Calculator that allows the use of the main operations.",
    },
    linkGithub: `${githubUrlBase}Edgemony-exercises/tree/main/2024-06-27-Esercitazione`,
    linkProject: "https://www.lorenzoliva.it/calculator/",
    created: "2024-06-27",
  },
  {
    id: self.crypto.randomUUID(),
    title: "Ultimate Weather",
    tecnicalRequirements: ["html", "css", "javascript"],
    img: ultimateWeatherImg,
    description: {
      italian:
        "Web App meteo che permette di conoscere le condizioni atmosferiche delle principali città del mondo, di fare ricerche e filtrare. Utilizza le chiamate API per un DB pubblico.",
      english:
        "Weather Web App that allows you to know the weather conditions of the main cities in the world, to do searches and filter. It uses API calls for a public DB.",
    },
    linkGithub: `${githubUrlBase}Code-Week-Ultimate-Weather/tree/main`,
    linkProject: "",
    created: "2024-06-24",
  },
  {
    id: self.crypto.randomUUID(),
    title: "Movie DB",
    tecnicalRequirements: ["html", "css", "javascript"],
    img: movieDBImg,
    description: {
      italian:
        "Web App che permette di consultare una lista di film e serie tv, sfrutta le chiamate API ad un DB esterno.",
      english:
        "Web App that allows you to consult a list of films and TV series, uses API calls to an external DB.",
    },
    linkGithub: `${githubUrlBase}Edgemony-exercises/tree/main/2024-06-10-Esercitazione`,
    linkProject: "",
    created: "2024-06-10",
  },
  {
    id: self.crypto.randomUUID(),
    title: "Timer BOOM",
    tecnicalRequirements: ["html", "css", "javascript"],
    img: boomImg,
    description: {
      italian:
        "Applicativo che mostra un orologio ed un conto alla rovescia. Primo approccio con SetTimeout.",
      english:
        "Application that shows a clock and a countdown. First approach with SetTimeout.",
    },
    linkGithub: "#",
    linkProject: "https://www.lorenzoliva.it/timer-boom/",
    created: "2024-06-04",
  },
  {
    id: self.crypto.randomUUID(),
    title: "ToDoToDay",
    tecnicalRequirements: ["html", "css", "javascript"],
    img: todoImg,
    description: {
      italian:
        "Web App per una ToDo list, permette inserimento e rimozione di nuove ToDo, di specificare un grado di importanza e di utilizzare vari filtri.",
      english:
        "Web App for a ToDo list, allows you to insert and remove new ToDos, specify a level of importance and use various filters.",
    },
    linkGithub: `${githubUrlBase}Edgemony-exercises/tree/main/2024-05-27-Project%20ToDo`,
    linkProject: "https://www.lorenzoliva.it/todotoday/",
    created: "2024-05-27",
  },
  {
    id: self.crypto.randomUUID(),
    title: "TicketArtOne",
    tecnicalRequirements: ["html", "css"],
    img: ticketAOImg,
    description: {
      italian:
        "Landing page statica di una finta biglietteria online per mostre d'arte.",
      english:
        "Static landing page of a fake online ticket office for art exhibitions.",
    },
    linkGithub: `${githubUrlBase}Edgemony-exercises/tree/main/2024-05-08-Esercitazione-sito`,
    linkProject: "https://www.lorenzoliva.it/ticketartone/",
    created: "2024-05-27",
  },
];
