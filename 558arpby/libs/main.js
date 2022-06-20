const drodownManager = () => {
    const controls = document.querySelectorAll(".menu-control");
    const dropdownLists = document.querySelectorAll(".submenu");
    
    controls.forEach(control => {
        control.addEventListener("click", (e) => {
            const element = Array.from(e.target.children).find(element => element.tagName.toLowerCase() === 'ul');
            element.classList.toggle("active");
            element.style.bottom = (element.scrollHeight * -1) + "px";
        })
    })

    dropdownLists.forEach(list => {
        list.addEventListener("mouseleave", e => {
            if(list.classList.contains("active")) {
                list.classList.remove("active");
            }
        })
    })
}

const burgerToggler = () => {
    const burgerOpenBtn = document.getElementById("burger-open");
    const burgerCloseBtn = document.getElementById("burger-close");
    const burger = document.getElementById("burger");

    burgerOpenBtn.addEventListener("click", () => {
        burger.classList.add("visible");
    })

    
    burgerCloseBtn.addEventListener("click", () => {
        burger.classList.remove("visible");
    })
}

drodownManager();
burgerToggler();


