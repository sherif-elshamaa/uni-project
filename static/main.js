const stories = [
    {
        story: "The campus is really nice, we all feel comfortable to live here. Good work/life balance, everything is close. About work, you have acess to high class facilities",
        name: 'Student Name',
        year: '2019',
        img: "st01.jpg"
    }, {
        story: "Offered me flexibility in how/when to preform my internship tasks as I was a PhD student at the time and preferred to work on the internship outside of normal working hours.",
        name: 'Student Name',
        year: '2019',
        img: "st02.jpg"
    }, {
        story: "Good facilities, nice work environment, people woth different nationalities and backgrounds, communitylife is awsome.",
        name: 'Student Name',
        year: '2019',
        img: "st03.jpg"
    }
]

const articles = [
    {
        img: "13305554505_7817a63e03_h.jpg",
        text: "CLUSTERED SPATIO-TEMPORAL VARYING COEFFICIENT REGRESSION MODEL",
        date: "Oct 26, 2020",
    },
    {
        img: "13305805023_819e2d1181_h.jpg",
        text: "THERMALLY STABLE SURFACTANT FREE CERIA NANOCUBES IN SILICA AEROGEL",
        date: "Oct 22, 2020",
    },
    {
        img: "13305910664_8755d19747_h.jpg",
        text: 'EVOLUTION AND BIOGEOGRAPHY OF THE ZANCLEA-SCLERACTINIA SYMBIOSIS',
        date: "Oct 19, 2020",
    },
    {
        img: "13295049475_e8cabf0a36_h.jpg",
        text: 'METAL HALIDE PEROVSKITES FOR HIGH-ENERGY RADIATION DETECTION',
        date: "Oct 18, 2020",
    }
]

const research = [
    {
        img: "40549198661_e39309fbf9_k.jpg",
        text: "KAUST DEVELOPED FISH WEARABLE TECHNOLOGY WINS CES IINNOVATION AWARD",
        tag: "Technology Areas",
        date: "Oct 30, 2020",
    },
    {
        img: "44308473515_c102f46b56_k.jpg",
        text: "POSTDOCTORAL FELLOW FOCUS: MOHAMED ABDELHAMID",
        tag: "Focus Areas",
        date: "Oct 18, 2020",
    },
    {
        img: "13305555723_8eabec6be2_h.jpg",
        text: 'RESEARCH IN PHYSICAL SCIENCE & ENGINEERING',
        tag: "Disciplines",
        date: "Oct 12, 2020",
    },
    {
        img: "13305774464_e6ee96dc6b_h.jpg",
        text: 'EXAMINING HOW TECHNOLOGY INFORMS SCIENCE',
        tag: "Applications",
        date: "Oct 10, 2020",
    }
]

const news = [
    {
        img: "13305700433_c9f4ad4685_h.jpg",
        text: "PATZEK RECEIVES DISTINGUISHED ERASMUS AWARD",
        tag: "Faculty Focus",
        date: "Oct 28, 2020",
    },
    {
        img: "13305701663_96d6d846f5_h.jpg",
        text: "PRESIDENT CHAN'S ADDRESS ON COMMUNITY TESTING",
        tag: "News",
        date: "Oct 19, 2020",
    },
    {
        img: "13305912284_f4a700c5ea_h.jpg",
        text: 'THE "NEW NORMAL" - MAJOR TRENDS POST COVID-19',
        tag: "Innovation",
        date: "Oct 11, 2020",
    }
]
const cards = document.getElementsByClassName("cards");

function cardRender(news) {
    for (let i = 0; i < news.length; i++) {

        const node = document.createElement("div");
        node.classList.add("card");
        const add = `<img src="/Images/Latest News/${news[i].img}" } alt="img" />
        <p class="headline">
        ${news[i].text}
        </p>
        <p class="info">${news[i].tag}</p>
        <p class="date">
        <i class="far fa-calendar-alt"></i> ${news[i].date}
        </p>`
        node.innerHTML = add;
        cards[0].appendChild(node)
    }
}

const rcards = document.getElementsByClassName('r-cards')
function researchRender(research) {
    for (let i = 0; i < news.length; i++) {

        const node = document.createElement("div");
        node.classList.add("r-card");
        const add = `<img src='/Images/Research Technologies/${research[i].img}' alt="img" />
        <div class="r-details">
            <p class="r-headline">
                ${research[i].text}
            </p>
            <p class="r-info">${research[i].tag}</p>
            <p class="r-date"><span class="r-color"></span>
                <i class="far fa-calendar-alt"></i> ${research[i].date}
            </p>
        </div>`
        node.innerHTML = add;
        rcards[0].appendChild(node)
    }
}

const pcards = document.getElementsByClassName('p-cards')
function articlesRender(articles) {
    for (let i = 0; i < articles.length; i++) {

        const node = document.createElement("div");
        node.classList.add("p-card");
        const add = `<img src="/Images/Publications/${articles[i].img}" alt="img" />
        <div class="p-details">
            <p class="p-headline">
                ${articles[i].text}
            </p>
            <p class="p-date"><span class="p-color">
                    <i class="far fa-calendar-alt"></i>
                </span>${articles[i].date}</p>
        </div>`
        node.innerHTML = add;
        pcards[0].appendChild(node)
    }
}

const scards = document.getElementsByClassName('s-cards')
function storiesRender(stories) {
    for (let i = 0; i < stories.length; i++) {

        const node = document.createElement("div");
        node.classList.add("s-card");
        const add = `<p class="story">${stories[i].story}</p>
    <div class="arrow"></div>
    <div class="s-img">
        <img src='/Images/Bio/${stories[i].img}' alt="img" />
        <div>
            <p class="name">${stories[i].name}</p>
            <p class="year">${stories[i].year}</p>
        </div>
    </div>`
        node.innerHTML = add;
        scards[0].appendChild(node)
    }
}



(function main() {
    cardRender(news)
    researchRender(research)
    articlesRender(articles)
    storiesRender(stories)
})()
