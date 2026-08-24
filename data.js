/**
 * SPRINGBOK TRAVELS & TOURS — content data
 * ------------------------------------------------
 * Loaded as a plain script (no bundler required) so every page can read
 * `window.SPRINGBOK_DATA` directly — including when opened straight off disk.
 *
 * TO SWAP IN REAL PHOTOGRAPHY:
 * Every tour/activity below has an `image` path pointing into /images/.
 * Drop a same-named file at that path and it will appear automatically —
 * no code changes needed. Until then, a branded placeholder is shown.
 */

const SPRINGBOK_DATA = {

    BRAND: {
        name: "Springbok Travels & Tours",
        shortName: "Springbok",
        tagline: "Zimbabwe, on your terms.",
        location: "Victoria Falls, Zimbabwe",
        coordinates: "17°55′S 25°51′E",
        phone: "+263 773 410 547",
        phoneHref: "tel:+263773410547",
        whatsappHref: "https://wa.me/263773410547",
        email: "springboktravelsandtours@gmail.com",
    },

    TOURS: [
        {
            id: 1,
            slug: "victoria-falls",
            title: "Victoria Falls Tour",
            price: 35,
            unit: "per person",
            image: "https://cdn.discoverafrica.com/wp-content/uploads/2021/11/15173443/1-52.jpg",
            desc: "Witness \u201cThe Smoke That Thunders\u201d — one of the Seven Natural Wonders of the World, on a guided walk along the rainforest trail.",
        },
        {
            id: 2,
            slug: "hwange-safari",
            title: "Hwange Safari Experience",
            duration: "3–5 Days",
            price: 969,
            unit: "per person",
            image: "https://www.expertafrica.com/images/itinerary/286f9342e68e45658cc5fc3b02b579ae-800.jpg",
            desc: "Discover Zimbabwe's largest national park and its incredible elephant populations. Full-day Big 5 game viewing in specialised 4x4 vehicles, with chef-prepared meals and camping under African stars.",
        },
        {
            id: 3,
            slug: "mana-pools",
            title: "Mana Pools Walking Safari",
            price: 499,
            unit: "per person",
            image: "https://film-fixers.com/wp-content/uploads/2024/08/About-Mana-pools-National-Park-Zimbabwe.jpg",
            desc: "Experience one of Africa's most spectacular wilderness areas on foot, guided by a licensed professional walking guide.",
        },
        {
            id: 4,
            slug: "great-zimbabwe",
            title: "Great Zimbabwe Heritage Tour",
            price: 399,
            unit: "per person",
            image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0f/52/12/de.jpg",
            desc: "Explore the ancient stone ruins of a UNESCO World Heritage Site, and the civilisation that built them.",
        },
        {
            id: 5,
            slug: "gonarezhou",
            title: "Gonarezhou Wilderness",
            price: 1599,
            unit: "per person",
            image: "https://www.tanzapages.com/img/tz/h/1633422700-24-kubwa-five-safaris.jpg",
            desc: "Experience the remote beauty of Zimbabwe's second-largest national park — sandstone cliffs, ancient baobabs, and few other travellers in sight.",
        },
        {
            id: 6,
            slug: "eastern-highlands",
            title: "Eastern Highlands Adventure",
            price: 595,
            unit: "per person",
            image: "https://i.ytimg.com/vi/ETbZjiFcwkI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDXoWkrZ6uUp2Wd-A6-_-8heFALIA",
            desc: "Explore stunning mountain landscapes, waterfalls, and tea plantations far from the savanna heat.",
        },
    ],

    CAT_LABELS: ["all", "adventure", "wildlife", "culture", "water", "luxury"],

    CAT_DESC: {
        all: "Every experience we offer, in one place.",
        adventure: "The raw thrill of African adventure.",
        wildlife: "Up close with Africa's incredible wildlife.",
        culture: "Rich local heritage and tradition.",
        water: "Breathtaking waterways of the Zambezi.",
        luxury: "Exclusive, personalised experiences.",
    },

    ACTIVITIES: [
        { id: 1, slug: "sunset-boat-cruise", title: "Sunset Boat Cruise", price: 75, cat: "adventure", image: "https://wildhorizons.co.za/wp-content/uploads/2024/03/Hero-Banner-1920-x-1080-px-22.jpg" },
        { id: 2, slug: "jet-boat-adventure", title: "Jet Boat Adventure", price: 155, cat: "adventure", image: "https://www.victoriafallsbackpackers.com/wp-content/uploads/2021/11/jetboat-01-2.jpeg" },
        { id: 3, slug: "bungee-jumping", title: "Bungee Jumping", price: 200, cat: "adventure", image: "https://www.visitvictoriafalls.org/wp-content/uploads/2024/06/victoria-falls-bunger-jumping.jpg" },
        { id: 4, slug: "gorge-swing", title: "Gorge Swing", price: 140, cat: "adventure", image: "https://www.visit-livingstone.com/wp-content/uploads/2018/05/Tandem-Bridge-Swing-Victoria-Falls.jpg" },
        { id: 5, slug: "zip-lining", title: "Zip-lining", price: 109, cat: "adventure", image: "https://berkshireeast.com/images/Summer/zip3.jpg" },
        { id: 6, slug: "white-water-rafting", title: "White Water Rafting", price: 180, cat: "adventure", image: "https://images.squarespace-cdn.com/content/v1/55668388e4b0992f1a75b868/ebab6905-2334-430c-a0af-4e366102a779/best-white-water-river-rafting.jpg" },
        { id: 7, slug: "elephant-encounter", title: "Elephant Encounter", price: 85, cat: "wildlife", image: "https://wearevictoriafalls.com/site_content/image-cache/content/images/Wildlife/elephant-encounter-4.e9129b85.png" },
        { id: 8, slug: "rhino-tracking", title: "Rhino Tracking", price: 110, cat: "wildlife", image: "https://anthillgorillasafaris.com/wp-content/uploads/2025/07/Ziwa-Rhino-Sanctuary.jpg" },
        { id: 9, slug: "lion-walking", title: "Lion Walking", price: 155, cat: "wildlife", image: "https://cdn.tripspoint.com/uploads/photos/9745/lion-encounter_hatYP.jpeg" },
        { id: 10, slug: "game-drive", title: "Game Drive", price: 90, cat: "wildlife", image: "https://www.lukimbi.com/wp-content/uploads/2020/08/IMG_1151-1500x650.jpg" },
        { id: 11, slug: "night-safari", title: "Night Safari", price: 170, cat: "wildlife", image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/e0/65/22.jpg" },
        { id: 12, slug: "boma-dinner-experience", title: "Boma Dinner Experience", price: 65, cat: "culture", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUtxqn6apQW2bG9V0o_ZTA1qVXbpAG2H8VhA&s" },
        { id: 13, slug: "cultural-village-tour", title: "Cultural Village Tour", price: 55, cat: "culture", image: "https://www.visit-victoria-falls.com/wp-content/uploads/2018/05/Victoria-Falls-Cultural-Village-Tour.jpg" },
        { id: 14, slug: "hiking-adventure", title: "Hiking Adventure", price: 75, cat: "adventure", image: "https://s1.wklcdn.com/image_5/175658/235151760/140221957.700x525.jpg" },
        { id: 15, slug: "tribal-dance-performance", title: "Tribal Dance Performance", price: 50, cat: "culture", image: "https://www.matriarchafrica.com/wp-content/uploads/2018/07/Boma-Dinner-Victoria-Falls-1.jpg" },
        { id: 16, slug: "river-cruise", title: "River Cruise", price: 80, cat: "water", image: "https://www.visit-victoria-falls.com/wp-content/uploads/2018/01/Moon-Dancer-River-Cruise.jpg" },
        { id: 17, slug: "canoe-safari", title: "Canoe Safari", price: 90, cat: "water", image: "https://artofsafari.travel/wp-content/uploads/2017/03/BANNER-Zimbabwe_ManaPools_WildernessSafarisRuckomechi_Canoeing.jpg" },
        { id: 18, slug: "fishing-excursion", title: "Fishing Excursion", price: 75, cat: "water", image: "https://falconsafaris.com/images/zambezi-fishings-banner.jpg" },
        { id: 19, slug: "gourmet-bush-dinner", title: "Gourmet Bush Dinner", price: 239, cat: "luxury", image: "https://www.victoriafallsconference.com/wp-content/uploads/2019/11/Victoria-Falls-Conference-Bush-Dinner-Event.jpg" },
        { id: 20, slug: "white-lion-experience", title: "White Lion Experience", price: 90, cat: "luxury", image: "https://elandelalodge.co.za/wp-content/uploads/2023/10/white-lions-1024x525-1.jpg" },
        { id: 21, slug: "helicopter-flight", title: "Helicopter Flight", price: 180, cat: "luxury", image: "https://www.visit-victoria-falls.com/wp-content/uploads/2018/05/Helicopter-Flights-Victoria-Falls.jpg" },
    ],

    REVIEWS: [
        { id: 1, name: "Thomas Moyo", initials: "TM", rating: 5, text: "The Victoria Falls tour was absolutely breathtaking! The guides were knowledgeable and made our experience unforgettable." },
        { id: 2, name: "Leah Sithole", initials: "LS", rating: 4.5, text: "Our safari in Hwange National Park exceeded all expectations. We saw so many elephants and other wildlife up close." },
        { id: 3, name: "Marie Peréz", initials: "MP", rating: 4.5, text: "The Boma Dinner was the highlight of our trip! The food, music, and dancing created an unforgettable cultural experience." },
        { id: 4, name: "James Nkomo", initials: "JN", rating: 5, text: "The helicopter flight over Victoria Falls was worth every penny! The views were spectacular." },
        { id: 5, name: "Sarah Peterson", initials: "SP", rating: 4, text: "The elephant encounter was a once-in-a-lifetime experience. Getting so close to these magnificent creatures was humbling." },
        { id: 6, name: "Aisha Khumalo", initials: "AK", rating: 5, text: "The fishing excursion was fantastic! The atmosphere was impeccable." },
    ],

    ADS_ENABLED: true,
    ADS: [
        {
            label: "Sponsor",
            title: "Springbok Official Merchandise",
            text: "Get 15% off official team gear and jerseys for the upcoming season.",
            href: "https://example.com/shop",
            cta: "Shop Now"
        },
        {
            label: "Partner",
            title: "Matchday Hospitality",
            text: "Upgrade your matchday experience with exclusive stadium suite tickets.",
            href: "https://example.com/tickets",
            cta: "View Packages"
        },
        {
            label: "Featured",
            title: "Springbok Rugby App",
            text: "Download the official app for live scores, stats, and match updates.",
            href: "https://example.com/app",
            cta: "Download Free"
        }
    ],

    WHY_US: [
        {
            icon: "compass",
            front: "Expert Guides",
            back: "Our team was born and raised across the region — offering authentic insight you won't find in any guidebook.",
        },
        {
            icon: "leaf",
            front: "Sustainable Tourism",
            back: "We partner with conservation projects, ensuring minimal environmental impact while supporting local economies.",
        },
        {
            icon: "tent",
            front: "Luxury Accommodations",
            back: "From tented camps with king beds to boutique lodges with private pools — comfort meets the wild.",
        },
    ],

};

/**
 * Return a random image from tours and/or activities.
 *
 * @param {string[]} categories - Optional activity categories to filter by.
 * @returns {{ image: string, title: string, slug: string }}
 */
function getRandomSpringbokImage(categories = []) {
    const tours = SPRINGBOK_DATA.TOURS.map(item => ({
        image: item.image,
        title: item.title,
        slug: item.slug
    }));

    let activities = SPRINGBOK_DATA.ACTIVITIES;

    if (categories.length > 0) {
        activities = activities.filter(item =>
            categories.includes(item.cat)
        );
    }

    activities = activities.map(item => ({
        image: item.image,
        title: item.title,
        slug: item.slug
    }));

    const images = [...tours, ...activities];

    return images[Math.floor(Math.random() * images.length)];
}