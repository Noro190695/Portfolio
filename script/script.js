let loading = document.querySelector('.loading');
loading.style = 'display: flex;'

window.addEventListener("load", () => {
  loading.style = 'display: none;'
  const scillsConfig = [
    {
      el: ".front_end",
      value: 95,
      name: ["H", "T", "M", "L"],
    },
    {
      el: ".front_end",
      value: 95,
      name: ["C", "S", "S"],
    },
    {
      el: ".front_end",
      value: 80,
      name: ["S", "C", "S", "S"],
    },
    {
      el: ".front_end",
      value: 80,
      name: ["L", "E", "S", "S"],
    },
    {
      el: ".front_end",
      value: 95,
      name: ["J", "A", "V", "A", "S", "C", "R", "I", "P", "T"],
    },
    {
      el: ".front_end",
      value: 50,
      name: ["R", "E", "A", "C", "T"],
    },
    {
      el: ".front_end",
      value: 75,
      name: ["W", "E", "B", "P", "A", "C", "K"],
    },

    {
      el: ".back_end",
      value: 85,
      name: ["P", "H", "P"],
    },
    {
      el: ".back_end",
      value: 80,
      name: ["M", "V", "C"],
    },
    {
      el: ".back_end",
      value: 80,
      name: ["R", "E", "S", "T"],
    },

    {
      el: ".back_end",
      value: 75,
      name: ["S", "Q", "L"],
    },
    {
      el: ".back_end",
      value: 70,
      name: ["M", "Y", "S", "Q", "L"],
    },
  ];

  function auto_write_text(selector) {
    selector = document.querySelector(selector);
    let text = "{Heloo, I'm Full Stack Javascript Php Developer...}";
    let audio = document.querySelector('audio')
    audio.play()
    let textArr = text.split("");
    
    let interval = setInterval(() => {
      if (textArr.length) {
        
        selector.innerHTML += textArr.shift();

      } else {
        audio.pause()
        audio.currentTime = 0;
        clearInterval(interval);
        
      }
    }, 100);
  }

  auto_write_text(".full_stack");

  function personal_information(selector) {
    selector = document.querySelector(selector);

    selector.style = "transform: translateY(0%);";
  }
  personal_information(".personal_information");

  class Skils {
    constructor(config) {
      this.el = document.querySelector(config.el);
      this.value = config.value;
      this.name = config.name;
      this.addSkilsDom();
    }
    createHtml() {
      let div = document.createElement("div");
      div.classList.add("skils_progress");
      div.innerHTML = `  
        
            <div class="skils_border"></div>
            <div class="skils_progress_bg" style="height: ${this.value}%">
              <span class="skils_progress_value" >${this.value} %</span>
            </div>
            <div class="skils_name"></div>

        `;
      return div;
    }
    addSkilsDom() {
      let html = this.createHtml();
      this.el.appendChild(html);
      this.createName(this.name);
    }
    createName(name) {
      let skils_name = document.querySelectorAll(".skils_name");
      name.map((value) => {
        let span = document.createElement("span");
        span.innerHTML = value;
        skils_name.forEach((teg) => {
          teg.appendChild(span);
        });
      });
    }
  }

  for (const skill of scillsConfig) {
    new Skils(skill);
  }

  function Burger(container, button) {
    container = document.querySelector(container);
    button = document.querySelector(button);
    let isClose = true;

    button.addEventListener('click', () => {
      if (isClose) {
        isClose = false
        container.style = 'right: 0;';
        button.style = 'left:10px';
        button.children[0].src = './img/close.png'
        console.log(1);
        
        
        
      }else{
        isClose = true;
        container.style = 'right: -225px;';
        button.style = 'left:-50px';
        button.children[0].src = './img/burger.png'
       
      }
      
      
    })
  }
  Burger('.button_gradient_border','.burger');

  function Contacts(container, button) {
    container = document.querySelector(container);
    button = document.querySelector(button);
    let isClose = true;
    button.addEventListener('click', () => {
      if (isClose) {
        isClose = false
        container.style = 'left: 10px;';
        
        
      }else{
        isClose = true;
        container.style = 'left: -45px;';

      }
      
      
    })
  }
  Contacts('.contacts','.contacts_button')
    
  
});
