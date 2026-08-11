/* =========================================
   NSADOP ARCHIVE
   SCRIPT.JS
========================================= */


/* =========================================
   ELEMENTS
========================================= */

const galleryGrid =
    document.getElementById("galleryGrid");

const yearElement =
    document.getElementById("year");


/* =========================================
   GALLERY DATA
========================================= */

const galleryImages = [

    {
        image: "images/gallery/village.jpg",
        title: "Nsadep Village",
        category: "places"
    },

    {
        image: "images/gallery/community-event.jpg",
        title: "Community Gathering",
        category: "events"
    },

    {
        image: "images/gallery/old-photo.jpg",
        title: "Historical Photograph",
        category: "history"
    }

]; 


/* =========================================
   PEOPLE DATA
========================================= */

const people = [

    {
        id: 1,

        name:
            "Late Hon. Chief Michael Etta Ogon Asu",

        category:
            "people",

        year:
            "1930 – 1984",

        image:
            "images/people/michaelogon.jpeg",

        description:
            "A prominent political leader from Nsadep who served in several public and political positions during Nigeria's early political history."
    },


    {
        id: 2,

        name:
            "Professor Kevin Michael Ogon Etta",

        category:
            "people",

        year:
            "Born 1938",

        image:
            "images/people/kelvinogon.jpeg",

        description:
            "A pioneering academic and university administrator who became the founding Vice-Chancellor of CRUTECH."
    },


    {
        id: 3,

        name:
            "Professor Emmanuel Odu Obi",

        category:
            "people",

        year:
            "Contemporary",

        image:
            "images/people/emmaobi.jpeg",

        description:
            "A Professor of Geophysics who has served in academic and administrative roles in Cross River State."
    },

    {
        id: 4,
    
        name:
            "Professor Dominic Akam Obi",
    
        category:
            "people",
    
        year:
            "Contemporary",
    
        image:
            "images/people/domobi.jpeg",
    
        description:
            "Professor Dominic Akam Obi is a Professor of Geology and the third Professor from Nsadep. He attended Boki Boys Secondary School before studying Geology and joining the University of Calabar as a Graduate Assistant in the Department of Geology. He was appointed Director of UNICAL Consultancy Services in 2022."
    },

    {
        id: 5,
    
        name:
            "Prof. Mrs. Favour Bette Obi Abang",
    
        category:
            "people",
    
        year:
            "Contemporary",
    
        image:
            "images/people/favobi.jpeg",
    
        description:
            "Prof. Mrs. Favour Bette Obi Abang of the Faculty of Agriculture, University of Calabar, is the fourth Professor from Nsadep. She is a Professor in the Department of Animal Science, University of Calabar."
    },

    {
        id: 6,
    
        name:
            "Associate Professor Kechi Kankpang",
    
        category:
            "people",
    
        year:
            "Contemporary",
    
        image:
            "images/people/kankpang.jpeg",
    
        description:
            "Associate Professor Kechi Kankpang is the fifth Professor of Nsadep in the making. He joined the University of Calabar as a Graduate Assistant in the Department of Accounting and, through hard work and dedication, rose to the rank of Associate Professor. He is presently the Head of the Department of Accounting, University of Calabar."
    },

    {
        id: 7,
    
        name:
            "Hon. Isidor Obi Nyiam",
    
        category:
            "people",
    
        year:
            "Contemporary",
    
        image:
            "images/people/isidorobi.jpeg",
    
        description:
            "Hon. Isidor Obi Nyiam has been elected Councillor to represent the people of Boje Ward in Boki Local Government Council."
    },

    {
        id: 8,
    
        name:
            "Hon. Edward Etta Ogon",
    
        category:
            "people",
    
        year:
            "Contemporary",
    
        image:
            "images/people/edogon.jpeg",
    
        description:
            "Hon. Edward Etta Ogon has been elected into the Ikom/Boki Federal Constituency and has been appointed as Commissioner for Justice, Environment and Works in the Cross River State Executive Council."
    },

    {
        id: 9,
    
        name:
            "Late Hon. Patrick Obi Owan",
    
        category:
            "people",
    
        year:
            "Late",
    
        image:
            "images/people/patowan.jpeg",
    
        description:
            "Late Hon. Patrick Obi Owan was elected to represent the people of Boje Ward in the Boki Local Government Executive Council."
    },

    {
        id: 10,
    
        name:
            "Hon. Beatrice Etta Nyiam",
    
        category:
            "people",
    
        year:
            "Contemporary",
    
        image:
            "images/people/beatnyiam.jpeg",
    
        description:
            "Hon. Beatrice Etta Nyiam has served as Director of the Cross River State Post Primary Education Board and was the pioneer State Director of JAMB in Cross River State. She is presently the elected Executive Chairperson of Boki Local Government Area."
    },

    {
        id: 11,
    
        name:
            "Late Chief Sir Celestine Osim Tawo",
    
        category:
            "people",
    
        year:
            "Late",
    
        image:
            "images/people/cot.jpeg",
    
        description:
            "Late Chief Sir Celestine Osim Tawo was an astute son of Nsadep who contributed significantly to the development of the community. He served as Commissioner for Commerce and Industry in Cross River State and played an important role in the establishment of Community Secondary School Nsadep (NASCO), including providing a bus for the school in the early 1980s. Sir Celestine Tawo also masterminded the creation of Nsadep as a Clan and remained a true son of the land."
    },

    {
        id: 12,
    
        name:
            "Hon. Chief Edward Ekpang Nyiam",
    
        category:
            "people",
    
        year:
            "Contemporary",
    
        image:
            "images/people/eenyiam.jpeg",
    
        description:
            "Hon. Chief Edward Ekpang Nyiam is a respected son of Boki Nation and is widely known as the first Sole Administrator of Boki Local Government Area following its creation in the early 1990s."
    },

    {
        id: 13,
    
        name:
            "Late Ata Otu Pius Nejie Oku",
    
        category:
            "people",
    
        year:
            "Late",
    
        image:
            "images/people/nejieoku.jpeg",
    
        description:
            "Late Ata Otu Pius Nejie Oku was the first Clan Head of Nsadop."
    },
    
    {
        id: 14,
    
        name:
            "HRH. Ata Otu Michael Ogor Owan",
    
        category:
            "people",
    
        year:
            "Contemporary",
    
        image:
            "images/people/mikeowan.jpeg",
    
        description:
            "HRH. Ata Otu Michael Ogor Owan is the second and incumbent Clan Head of Nsadop."
    },

    {
        id: 15,
    
        name:
            "Late Mr. William Tuku Ogon",
    
        category:
            "people",
    
        year:
            "Late",
    
        image:
            "images/people/willogon.jpeg",
    
        description:
            "Late Mr. William Tuku Ogon was an industrious son of Nsadop."
    },
    
    {
        id: 16,
    
        name:
            "Dr. Kaizer Obi Etta",
    
        category:
            "people",
    
        year:
            "Contemporary",
    
        image:
            "images/people/obietta.jpeg",
    
        description:
            "Dr. Kaizer Obi Etta is one of Nsadop's medical doctors. He is currently the Medical Director at the University of Calabar Medical Centre."
    }

];


/* =========================================
   COMBINE EVERYTHING
========================================= */

const allGalleryItems = [

    ...people,
    ...galleryImages

];


/* =========================================
   CATEGORY NAMES
========================================= */

function formatCategory(category) {

    const names = {

        people: "Our People",

        events: "Events",

        places: "Places",

        history: "History"

    };

    return names[category] || category;

}


/* =========================================
   CREATE GALLERY CARD
========================================= */

function createGalleryItem(item) {

    const galleryItem =
        document.createElement("article");


    galleryItem.classList.add(
        "gallery-item"
    );


    /* Add people class */

    if (item.category === "people") {

        galleryItem.classList.add(
            "people"
        );

    }


    /* Store category */

    galleryItem.dataset.category =
        item.category;


    /* =====================================
       PEOPLE CARD
    ===================================== */

    if (item.category === "people") {

        galleryItem.innerHTML = `

            <div class="gallery-image">

                <img
                    src="${item.image}"
                    alt="${item.name}"
                    loading="lazy"
                >

            </div>


            <div class="gallery-caption">

                <span>
                    ${formatCategory(item.category)}
                </span>


                <div class="person-year">
                    ${item.year}
                </div>


                <h3>
                    ${item.name}
                </h3>


                <p>
                    ${item.description}
                </p>


                <a
                    href="#"
                    class="read-more"
                    data-person-id="${item.id}"
                >
                    Read Full Story →
                </a>

            </div>

        `;

    }


    /* =====================================
       NORMAL GALLERY CARD
    ===================================== */

    else {

        galleryItem.innerHTML = `

            <div class="gallery-image">

                <img
                    src="${item.image}"
                    alt="${item.title}"
                    loading="lazy"
                >

            </div>


            <div class="gallery-caption">

                <span>
                    ${formatCategory(item.category)}
                </span>


                <h3>
                    ${item.title}
                </h3>

            </div>

        `;

    }


    /* =====================================
       IMAGE ERROR HANDLING
    ===================================== */

    const image =
        galleryItem.querySelector("img");


    image.addEventListener(
        "error",
        function () {

            image.style.display =
                "none";

            galleryItem.classList.add(
                "image-error"
            );

        }
    );


    return galleryItem;

}


/* =========================================
   DISPLAY GALLERY
========================================= */

function displayGallery(category = "all") {

    if (!galleryGrid) {

        return;

    }


    galleryGrid.innerHTML = "";


    const filteredItems =
        category === "all"

            ? allGalleryItems

            : allGalleryItems.filter(
                item =>
                    item.category === category
            );


    filteredItems.forEach(item => {

        const card =
            createGalleryItem(item);


        galleryGrid.appendChild(card);

    });

}


/* =========================================
   GALLERY FILTERS
========================================= */

const galleryFilters =
    document.querySelectorAll(
        ".gallery-filter"
    );


galleryFilters.forEach(button => {

    button.addEventListener(
        "click",
        function () {

            const category =
                button.dataset.category;


            /* Remove active */

            galleryFilters.forEach(
                filter => {

                    filter.classList.remove(
                        "active"
                    );

                }
            );


            /* Activate selected */

            button.classList.add(
                "active"
            );


            /* Filter gallery */

            displayGallery(category);

        }
    );

});


/* =========================================
   INITIALIZE
========================================= */

displayGallery();


/* =========================================
   FOOTER YEAR
========================================= */

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* =========================================
   WHATSAPP
========================================= */

/*
   Put your WhatsApp group link here later.

   Example:

   const whatsappLink =
       "https://chat.whatsapp.com/XXXXXXXX";
*/

const whatsappLink = "https://chat.whatsapp.com/F8Qsaxa5oOEIH7NVdoIZBl?s=cl&p=i&ilr=2";


const whatsappButtons =
    document.querySelectorAll(
        ".whatsapp-btn, .join-whatsapp"
    );


whatsappButtons.forEach(button => {

    if (whatsappLink) {

        button.href =
            whatsappLink;

    }

});


/* =========================================
   SMOOTH NAVIGATION
========================================= */

const navigationLinks =
    document.querySelectorAll(
        'a[href^="#"]'
    );


navigationLinks.forEach(link => {

    link.addEventListener(
        "click",
        function (event) {

            const targetId =
                link.getAttribute("href");


            if (
                !targetId ||
                targetId === "#"
            ) {

                return;

            }


            const target =
                document.querySelector(
                    targetId
                );


            if (!target) {

                return;

            }


            event.preventDefault();


            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }
    );

});


/* =========================================
   FINISHED
========================================= */

console.log(
    "NSADOP Archive loaded successfully."
);