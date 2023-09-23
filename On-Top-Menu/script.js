window.config = {
    firstButtonLabels: [
      "button1", "button2", "button3", "button4"
    ],
    secondButtonLabels: [
      "Discord", "Credits"
    ]
}

const menu = document.createElement("div");

menu.style.width = "400px";
menu.style.height = "auto";
menu.style.backgroundColor = "black";
menu.style.borderRadius = "10px";
menu.style.opacity = "0.9";
menu.id = "menuId";
menu.style.fontFamily = "monospace";
menu.style.borderStyle = "none";
menu.style.cursor = "move";

document.body.appendChild(menu);

menu.innerHTML = `
  <style>
    ::-webkit-scrollbar {
    width: 10px;
    cursor: pointer;
  }

  ::-webkit-scrollbar-track {
    background-color: rgba(0,0,0,0);
    cursor: pointer;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0,255,0,0.1);
    border-radius: 5px;
    transition: all 0.1s;
    cursor: pointer;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0,255,0,0.3);
    cursor: pointer;
  }
    h1 {
      font-family: 'Ubuntu', sans-serif;
      color: white;
      text-align: center;
      font-size: 45px;
    }
    h5 {
      color: white;
      text-align: center;
      font-size: 12px;
    }
    /* editing the h6 to be illegible, or even the slightest of hard to read, goes against the license. the font size cannot be less than 10px */
    h6 {
      color: white;
      text-align: center;
      font-size: 10px;
    }
    h3 {
      color: white;
      text-align: center;
      font-size: 15px;
    }
    .button-grid-container {
      max-height: 200px;
      overflow-y: auto;
    }
    .button-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
      margin: 10px;
    }
    .button {
      background-color: rgba(0,0,255,0.1);
      color: skyblue;
      border: none;
      padding: 10px;
      border-radius: 5px;
      cursor: pointer;
      font-family: monospace;
      transition: all 0.1s;
    }
    .button:hover {
      background-color: rgba(0,0,255,0.3);
    }
    .button:active {
      background-color: rgba(0,0,255,0.1);
    }
  </style>

  <h1>Menu Name</h1>
  <h3>Menu Description</h3>
  <h5>v1.0.0</h5>
  
  <div class="button-grid-container">
    <div class="button-grid">
    </div>
  </div>
  
  <br>
  
  <div class="button-grid-container">
    <div class="button-grid">
    </div>
  </div>

<!-- editing or removing "Library by OnTop Development" goes against the license. if you want to remove it, message zeakify on discord and transfer $4.99 -->
<h6>Library by OnTop Development</h6>
`;

const closeButtonContainer = document.createElement("div");
closeButtonContainer.className = "close-button-container";

const closeButton = document.createElement("button");
closeButton.className = "close-button";
closeButton.innerHTML = "&times;";
closeButton.style.borderTopRightRadius = "10px";
closeButton.style.width = "60px";
closeButton.style.height = "30px";
closeButton.style.fontSize = "20px";
closeButton.style.color = "red";
closeButton.style.backgroundColor = "rgba(255,0,0,0.1)";
closeButton.style.borderStyle = "none";
closeButton.style.cursor = "pointer";
closeButton.style.borderBottomLeftRadius = "10px";

closeButtonContainer.appendChild(closeButton);
menu.appendChild(closeButtonContainer);

closeButton.addEventListener("click", () => {
  document.body.removeChild(menu);
});

closeButton.addEventListener("mouseenter", () => {
  closeButton.style.backgroundColor = "rgba(255,0,0,0.3)";
  closeButton.style.transition = "all 0.1s";
});

closeButton.addEventListener("mouseleave", () => {
  closeButton.style.backgroundColor = "rgba(255,0,0,0.1)";
});

menu.style.position = "relative";
menu.style.paddingTop = "5px";
closeButtonContainer.style.position = "absolute";
closeButtonContainer.style.top = "0";
closeButtonContainer.style.right = "0";

const firstButtonGridContainer = menu.querySelectorAll(".button-grid-container")[0];
const secondButtonGridContainer = menu.querySelectorAll(".button-grid-container")[1];

const firstButtonGrid = firstButtonGridContainer.querySelector(".button-grid");
const secondButtonGrid = secondButtonGridContainer.querySelector(".button-grid");

// code for primary buttons
config.firstButtonLabels.forEach(label => {
  const button = document.createElement("button");
  button.className = "button";
  button.textContent = label;
  firstButtonGrid.appendChild(button);

  // disabled buttons
  if (label === "button3" || label === "button4") {
    button.style.backgroundColor = "rgb(31, 31, 31)";
    button.style.color = "grey";
    button.addEventListener("click", function() {
      alert("This isn't available at the moment.");
    });
  }

  if (label === "button1") {
    button.addEventListener("click", function() {
      //code here
    });
  }

  if (label === "button2") {
    button.addEventListener("click", function() {
      //code here
    });
  }
});

// code for secondary buttons
config.secondButtonLabels.forEach(label => {
  const button = document.createElement("button");
  button.className = "button";
  button.textContent = label;
  secondButtonGrid.appendChild(button);

  if (label === "Discord") {
    button.addEventListener("click", function() {
      window.open("Your discord link here");
    });
  }
  
  if (label === "Credits") {
    button.addEventListener("click", function() {
      // not finished
    });
  }
});
