import { reactive } from "vue";

export const store  = reactive({
    socials: [
        {
            name: "Facebook",
            link: "#",
            icon: '<i class="fa-brands fa-facebook-f" style="color: #ffffff;"></i>'
        },
        {
            name: "Twitter",
            link: "#",
            icon: '<i class="fa-brands fa-twitter" style="color: #ffffff;"></i>'
        },
        {
            name: "Pinterest",
            link: "#",
            icon: '<i class="fa-brands fa-pinterest-p" style="color: #ffffff;"></i>'
        },
    ],
    navbarLinks: [
        {
            name: "Home",
            link: "#"
        },
        {
            name: "About",
            link: "#"
        },
        {
            name: "Services",
            link: "#"
        },
        {
            name: "Showcase",
            link: "#"
        },
        {
            name: "Blog",
            link: "#"
        },
        {
            name: "Contact",
            link: "#"
        },
    ]
});