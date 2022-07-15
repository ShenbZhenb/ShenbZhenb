
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
            if (list.classList.contains("active")) {
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


/*(function () {
    // Add event listener
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector("#welcome");
    // Magic happens here
    function parallax(e) {
      let _w = window.innerWidth / 2;
      let _h = window.innerHeight / 2;
      let _mouseX = e.clientX;
      let _mouseY = e.clientY;
      let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${
        50 - (_mouseY - _h) * 0.01
      }%`;
      let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${
        50 - (_mouseY - _h) * 0.02
      }%`;
      let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${
        50 - (_mouseY - _h) * 0.06
      }%`;
      let x = `${_depth3}, ${_depth2}, ${_depth1}`;
      console.log(x);
      elem.style.backgroundPosition = x;
    }
  })();
  */
  
  (function () {
    // Add event listener
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector("#plain-img");
    // Magic happens here
    function parallax(e) {
    let _w = window.innerWidth / 2;
    let _h = window.innerHeight / 2;
    let _mouseX = e.clientX;
    let _mouseY = e.clientY;
    let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${
    50 - (_mouseY - _h) * 0.01
    }%`;
    let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${
    50 - (_mouseY - _h) * 0.02
    }%`;
    let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${
    50 - (_mouseY - _h) * 0.06
    }%`;
    let x = `${_depth3}, ${_depth2}, ${_depth1}`;
    console.log(x);
    elem.style.backgroundPosition = x;
    }
    })();

    /*(function () {
        // Add event listener
        document.addEventListener("mousemove", parallax);
        const elem = document.querySelector("#box_red1");
        // Magic happens here
        function parallax(e) {
        let _w = window.innerWidth / 2;
        let _h = window.innerHeight / 2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${
        50 - (_mouseY - _h) * 0.01
        }%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${
        50 - (_mouseY - _h) * 0.02
        }%`;
        let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${
        50 - (_mouseY - _h) * 0.06
        }%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        console.log(x);
        elem.style.backgroundPosition = x;
        }
        })();
        
        (function () {
        // Add event listener
        document.addEventListener("mousemove", parallax);
        const elem = document.querySelector("#box_red2");
        // Magic happens here
        function parallax(e) {
        let _w = window.innerWidth / 2;
        let _h = window.innerHeight / 2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${
        50 - (_mouseY - _h) * 0.01
        }%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${
        50 - (_mouseY - _h) * 0.02
        }%`;
        let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${
        50 - (_mouseY - _h) * 0.06
        }%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        console.log(x);
        elem.style.backgroundPosition = x;
        }
        })();
        
        (function () {
        // Add event listener
        document.addEventListener("mousemove", parallax);
        const elem = document.querySelector("#box_red3");
        // Magic happens here
        function parallax(e) {
        let _w = window.innerWidth / 2;
        let _h = window.innerHeight / 2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${
        50 - (_mouseY - _h) * 0.01
        }%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${
        50 - (_mouseY - _h) * 0.02
        }%`;
        let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${
        50 - (_mouseY - _h) * 0.06
        }%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        console.log(x);
        elem.style.backgroundPosition = x;
        }
        })();*/

  function Rotator(start_from){
    var phrases = ["Ремонт авиационной техники","Сервисное обслуживание авиационной техники","Производство деталей и авиакомпонентов"];
    var total = phrases.length;
    var interval = 4000;
    if(void 0 === start_from){
        start_from = 0;
    }
 
    $(".textrotator").text(phrases[start_from]).animate({"opacity":"1"}, 1000, function(){
                if(start_from >= (total-1)){
                    setTimeout(function(){
                        $(".textrotator").animate({"opacity":"0"}, 1000, function(){
                            Rotator();
                        });
                    }, interval);
                }else{
                    start_from++;
                    setTimeout(function(){
                        $(".textrotator").animate({"opacity":"0"}, 1000,function(){
                            Rotator(start_from);
                        });
                    }, interval);
         
                }           
         
    })
}

let center = [53.11546507128684,26.033077999999993];

function init(){
    let map = new ymaps.Map('map', {
        center: center,
        zoom: 16
    });

    let placemark = new ymaps.Placemark(center, {}, {
      iconLayout: 'default#image',
      iconImageHref: 'gps.png',
      iconImageSize: [80, 111],
      iconImageOffset: [-40, -110]

    });

    //map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    //map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

    map.geoObjects.add(placemark);
}

ymaps.ready(init);

            