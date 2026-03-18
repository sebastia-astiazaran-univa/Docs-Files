const paletteDemo = document.getElementById("palette-demo");
const paletteButtons = document.querySelectorAll("[data-palette]");

paletteButtons.forEach((button) => {
  button.addEventListener("click", () => {
    paletteButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    paletteDemo.className = "palette-demo";
    paletteDemo.classList.add(`palette-${button.dataset.palette}`);
  });
});

const typeDemo = document.getElementById("type-demo");
const spaceControl = document.getElementById("space-control");
const lineControl = document.getElementById("line-control");
const spaceValue = document.getElementById("space-value");
const lineValue = document.getElementById("line-value");

function updateTypeDemo() {
  if (!typeDemo) {
    return;
  }

  const spacing = `${spaceControl.value}px`;
  const lineHeight = `${(Number(lineControl.value) / 10).toFixed(1)}`;

  typeDemo.style.setProperty("--demo-space", spacing);
  typeDemo.style.setProperty("--demo-line", lineHeight);
  spaceValue.textContent = spacing;
  lineValue.textContent = lineHeight;
}

[spaceControl, lineControl].forEach((control) => {
  control.addEventListener("input", updateTypeDemo);
});

updateTypeDemo();

const iconDemo = document.getElementById("icon-demo");
const iconButtons = document.querySelectorAll("[data-icon-mode]");

const iconContent = {
  benefits: [
    ["✓", "Code review", "Feedback de calidad con ritmo semanal."],
    ["★", "Contenido premium", "Recursos que elevan el valor visual del proyecto."],
    ["→", "Navegacion clara", "Guiar al usuario tambien es parte del diseno."]
  ],
  faq: [
    ["+", "Pregunta clara", "La accion de abrir o cerrar debe ser evidente."],
    ["?", "Respuesta visible", "El usuario entiende rapido que puede interactuar."],
    ["!", "Estado activo", "Color, icono o peso visual indican que algo cambio."]
  ],
  stats: [
    ["↑", "Crecimiento", "Ideal para dashboards o paneles con metricas."],
    ["●", "Estado", "Un pequeno punto de color puede comunicar mucho."],
    ["#", "Dato clave", "Ayuda a separar cifras de descripcion."]
  ]
};

function renderIconDemo(mode) {
  const items = iconContent[mode];
  iconDemo.innerHTML = items
    .map(
      ([icon, title, text]) => `
        <article>
          <span class="icon-bubble">${icon}</span>
          <div>
            <strong>${title}</strong>
            <p>${text}</p>
          </div>
        </article>
      `
    )
    .join("");
}

iconButtons.forEach((button) => {
  button.addEventListener("click", () => {
    iconButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    renderIconDemo(button.dataset.iconMode);
  });
});

renderIconDemo("benefits");

const carouselTrack = document.getElementById("carousel-track");
const prevSlideButton = document.getElementById("prev-slide");
const nextSlideButton = document.getElementById("next-slide");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;
const totalSlides = 3;

function updateCarousel() {
  carouselTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
  dots.forEach((dot) => dot.classList.remove("is-active"));
  dots[currentSlide].classList.add("is-active");
}

prevSlideButton.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateCarousel();
});

nextSlideButton.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateCarousel();
});

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    currentSlide = Number(dot.dataset.slide);
    updateCarousel();
  });
});

updateCarousel();

const countValue = document.getElementById("count-value");
const increaseCount = document.getElementById("increase-count");
const decreaseCount = document.getElementById("decrease-count");

let count = 0;

function renderCount() {
  countValue.textContent = count;
}

increaseCount.addEventListener("click", () => {
  count += 1;
  renderCount();
});

decreaseCount.addEventListener("click", () => {
  count -= 1;
  renderCount();
});

renderCount();

const tabButtons = document.querySelectorAll("[data-tab]");
const tabPanel = document.getElementById("tab-panel");

const tabContent = {
  dom: {
    title: "DOM",
    text: "JavaScript localiza elementos para leerlos, cambiarlos o responder a acciones."
  },
  eventos: {
    title: "Eventos",
    text: "Click, input o submit permiten que la interfaz reaccione a lo que hace el usuario."
  },
  clases: {
    title: "Clases dinamicas",
    text: "Con classList se activan estados visuales como abierto, activo, oculto o seleccionado."
  }
};

function renderTab(tabName) {
  tabPanel.innerHTML = `
    <strong>${tabContent[tabName].title}</strong>
    <p>${tabContent[tabName].text}</p>
  `;
}

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tabButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    renderTab(button.dataset.tab);
  });
});

renderTab("dom");

const accordionButtons = document.querySelectorAll(".accordion-button");

accordionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const currentItem = button.parentElement;
    const isOpen = currentItem.classList.contains("is-open");

    document.querySelectorAll(".accordion-item").forEach((item) => {
      item.classList.remove("is-open");
      item.querySelector(".accordion-button").setAttribute("aria-expanded", "false");
    });

    if (!isOpen) {
      currentItem.classList.add("is-open");
      button.setAttribute("aria-expanded", "true");
    }
  });
});
