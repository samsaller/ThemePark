const profilesEl = document.querySelector(".profiles");

const profiles = [
    {
        name: "Goh Zong Xuan",
        id: "0386362",
        text: "Hey, I’m <span>Goh Zong Xuan</span>. I love mixing tech and creativity - whether it’s designing visuals, organizing ideas, or making projects look clean and polished. I enjoy working with my team, sharing ideas, and making sure everything runs smoothly. I’m all about the details and getting things just right.",
        img: "../imgs/gzx.jpg",
    },
    {
        name: "Kong Jun Hwa",
        id: "0386146",
        text: "Hi! I’m <span>Kong Jun Hwa</span> — the kind of person who walks into a room and immediately forgets why I came in. I survive on vibes, snacks, and pure chaos, and I’m known for cracking jokes even when nobody asked. I’m half-serious, half-lazy, and fully committed to enjoying life in the funniest way possible. If you ever need someone who can turn a boring moment into a comedy scene, that’s basically my special skill. Nice to meet you.",
        img: "../imgs/kjh.jpg",
    },
    {
        name: "Hanee Safiah",
        id: "0386107",
        text: "Hi! I’m <span>Hanee Safiah</span>. I like to stay behind the scenes, watching how people move, how ideas grow, how quiet moments reveal more than loud ones ever do. I’m not the type who speaks first, but when I do, it’s with purpose. I’m drawn to depth, to mystery, to anything that feels like a puzzle worth solving. I believe in subtlety, in gentle confidence, and in letting my presence tell its own story before I ever introduce myself.",
        img: "../imgs/hs.png",
    },
    {
        name: "Kaung Khant Kyaw",
        id: "0387796",
        text: "Hi! I’m <span>Kaung Khant Kyaw</span>, but you can call me <span>Henry</span> - let’s be honest, it’s easier that way. I’m the one who jumps into discussions, always ready to speak up and bring energy to the table. I thrive on making connections, meeting new people, and being open minded. I’m that loud voice in the group, and while that might make me the first one you hear, it also makes me the most approachable. Life’s too short to blend in, so I’m all about doing what I love, making things happen, and having a bit of fun while I’m at it.",
        img: "../imgs/kkk.jpg",
    },

    {
        name: "Kodirov Alisher Ikrom Ugli",
        id: "0388374",
        text: "Hey, I'm <span>Kodirov Alisher Ikrom Ugli</span>. People often call me <span>Sam</span> and it became my english name. I like coding and I'm actually a FullStack Web Developer. That's it.",
        img: "../imgs/kaiu.jpg",
    },
];

profiles.forEach((profile) => {
    const profileEl = document.createElement("div");
    profileEl.classList.add("profile");

    const profileImgEl = document.createElement("img");
    profileImgEl.setAttribute("src", profile.img);
    profileImgEl.setAttribute("alt", profile.name);

    const profileImgBoxEl = document.createElement("div");
    profileImgBoxEl.classList.add("profile-img");
    profileImgBoxEl.appendChild(profileImgEl)
    profileEl.appendChild(profileImgBoxEl)

    const profileNameEl = document.createElement("div");
    profileNameEl.classList.add("profile-name");
    profileNameEl.textContent = profile.name;
    profileEl.appendChild(profileNameEl)

    const profileIDEl = document.createElement("div");
    profileIDEl.classList.add("profile-id");
    profileIDEl.textContent = profile.id;
    profileEl.appendChild(profileIDEl)

    const profileTextEl = document.createElement("div");
    profileTextEl.classList.add("profile-text");
    profileTextEl.innerHTML = profile.text;
    profileEl.appendChild(profileTextEl)

    profilesEl.appendChild(profileEl)
});
