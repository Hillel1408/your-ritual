const askQuestionBtn = document.querySelector(".ask-question-btn");
const askQuestionModal = document.querySelector(".ask-question-modal");
const overlay = document.querySelector(".overlay");
const askQuestionCloseBtn = document.querySelector(".ask-question-close-btn");

const toggle = (block) => {
    overlay.style.top = "0";
    block.classList.toggle("active");
    overlay.classList.toggle("fixed");
    document.body.classList.toggle("lock");
    overlay.classList.toggle("active");
};

askQuestionBtn.addEventListener("click", () => {
    toggle(askQuestionModal);
});
askQuestionCloseBtn.addEventListener("click", () => {
    toggle(askQuestionModal);
});

const callingAgentBtn = document.querySelector(".calling-agent-btn");
const callingAgentModal = document.querySelector(".calling-agent-modal");
const callingAgentCloseBtn = document.querySelector(".calling-agent-close-btn");

callingAgentBtn.addEventListener("click", () => {
    toggle(callingAgentModal);
});
callingAgentCloseBtn.addEventListener("click", () => {
    toggle(callingAgentModal);
});

const headerNavItems = document.querySelectorAll(".header__nav > li");
const headerNav = document.querySelector(".header__block-3");
const header = document.querySelector(".header");

headerNavItems.forEach((item) => {
    item.addEventListener("mouseover", (e) => {
        if (window.innerWidth > 600) {
            const ul = item.querySelector("ul");
            ul.style.top = headerNav.clientHeight + 0.2 + "px";
            overlay.classList.add("active");
            overlay.style.top = header.clientHeight + 0.2 + "px";
            overlay.style.height = document.body.scrollHeight + "px";
        }
    });
    item.addEventListener("mouseout", () => {
        if (window.innerWidth > 600) {
            overlay.classList.remove("active");
        }
    });
    item.querySelector("a").addEventListener("click", (e) => {
        if (window.innerWidth <= 600) {
            e.preventDefault();
            item.classList.toggle("active");
            const ul = item.querySelector("ul");
            ul.classList.toggle("active");
        }
    });
});

const openMenuBtn = document.querySelector(".open-menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");

openMenuBtn.addEventListener("click", () => {
    headerNav.classList.add("active");
    document.body.classList.toggle("lock");
    openMenuBtn.style.display = "none";
    closeMenuBtn.style.display = "block";
});

closeMenuBtn.addEventListener("click", () => {
    headerNav.classList.remove("active");
    document.body.classList.toggle("lock");
    closeMenuBtn.style.display = "none";
    openMenuBtn.style.display = "block";
});

const openSubmenuBtn = document.querySelectorAll(".open-submenu-btn");

openSubmenuBtn.forEach((item) => {
    item.addEventListener("click", (e) => {
        if (window.innerWidth <= 600) {
            e.preventDefault();
            const ul = item.parentElement.querySelector("ul");
            ul.classList.toggle("active");
            item.classList.toggle("active");
        }
    });
});
