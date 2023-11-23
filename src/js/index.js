import '../scss/style.scss'

let pageMenu = document.querySelector(".menu");
let sidebar = document.querySelector(".sidebar");
let closeSidebarButton = sidebar.querySelector(".sidebar__button-close");
let sidePanel = sidebar.querySelector(".sidebar__panel");
let sidebarOverlay = sidebar.querySelector(".sidebar__overlay");
let burger = pageMenu.querySelector(".menu__burger");

	burger.addEventListener("click", function(evt) {
		evt.preventDefault();
		
		sidePanel.classList.add("sidebar__panel--opened");
		sidebarOverlay.classList.add("sidebar__overlay--opened");
		sidebar.classList.add("sidebar--opened");
	});


	closeSidebarButton.addEventListener("click", function(evt) {
		evt.preventDefault();
		
		sidePanel.classList.remove("sidebar__panel--opened");
		sidebarOverlay.classList.remove("sidebar__overlay--opened");
		sidebar.classList.remove("sidebar--opened");
	});

	sidebarOverlay.addEventListener("click", function() {

		sidePanel.classList.remove("sidebar__panel--opened");
		sidebarOverlay.classList.remove("sidebar__overlay--opened");
		sidebar.classList.remove("sidebar--opened");
	});

let brandsSlider = document.querySelector(".brands");
let brandsOpenMoreButton = brandsSlider.querySelector(".brands__button");
let brandCards = brandsSlider.querySelector(".brands__list");
let brandsDisabledElements = brandCards.querySelectorAll(".brands__list-item--hidden");

const brandsSwiper = new Swiper(brandsSlider, {
	wrapperClass: "brands__list",
	slideClass: "brands__list-item",
  slidesPerView: "auto",
  spaceBetween: 20,
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: "auto",
      enabled: true,
      spaceBetween: 20,
    },

    768: {
      enabled: false,
      spaceBetween: 0,
    },
  },
});

brandsOpenMoreButton.addEventListener("click", function (evt) {
  evt.preventDefault();

  let brandCardList = brandCards.children;
  openMoreBrands(brandCardList, brandsDisabledElements, brandsOpenMoreButton);
});

function openMoreBrands(elements, hiddenElements, button) {
  if (button.innerText === "Показать все") {
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].classList.contains("brands__list-item--hidden")) {
        elements[i].classList.remove("brands__list-item--hidden");
      }
    }
    button.innerText = "Скрыть";
  } else {

    if (window.innerWidth >= 1440) {
      for (let i = 2; i < hiddenElements.length; i++) {
        hiddenElements[i].classList.add("brands__list-item--hidden");
      }

    } else {
      for (let i = 0; i < hiddenElements.length; i++) {
        hiddenElements[i].classList.add("brands__list-item--hidden");
      }
    }
    button.innerText = "Показать все";
  }
}

let devicesSlider = document.querySelector(".devices");
let devicesOpenMoreButton = devicesSlider.querySelector(".devices__button");
let deviceCards = devicesSlider.querySelector(".devices__list");
let devicesDisabledElements = deviceCards.querySelectorAll(".devices__list-item--hidden");

const devicesSwiper = new Swiper(devicesSlider, {
	wrapperClass: "devices__list",
	slideClass: "devices__list-item",
  slidesPerView: "auto",
  spaceBetween: 20,
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: "auto",
      enabled: true,
      spaceBetween: 20,
    },

    768: {
      enabled: false,
      spaceBetween: 0,
    },
  },
});

devicesOpenMoreButton.addEventListener("click", function (evt) {
  evt.preventDefault();
	
  let deviceCardList = deviceCards.children;
  openMoreDevices(deviceCardList, devicesDisabledElements, devicesOpenMoreButton);
});

function openMoreDevices(elements, hiddenElements, button) {
  if (button.innerText === "Показать все") {

    for (let i = 0; i < elements.length; i++) {
      if (elements[i].classList.contains("devices__list-item--hidden")) {
        elements[i].classList.remove("devices__list-item--hidden");
      }
    }
    button.innerText = "Скрыть";

  } else {
    if (window.innerWidth >= 1440) {
      for (let i = 1; i < hiddenElements.length; i++) {
        hiddenElements[i].classList.add("devices__list-item--hidden");
      }
    } else {

      for (let i = 0; i < hiddenElements.length; i++) {
        hiddenElements[i].classList.add("devices__list-item--hidden");
      }
    }
    button.innerText = "Показать все";
  }
}

let feedback = document.querySelector(".feedback");
let feedbackForm = feedback.querySelector(".feedback__form");
let feedbackOverlay = feedback.querySelector(".feedback__overlay");
let closeFeedbackButton = feedbackForm.querySelector(".feedback__close-button");
let feedbackButton = pageMenu.querySelector(".menu__feedback-button");
let sidebarFeedbackButton = sidebar.querySelector(".sidebar__feedback-button");

feedbackButton.addEventListener("click", function(evt) {
  evt.preventDefault();

  feedback.classList.add("feedback--opened");
  feedbackOverlay.classList.add("feedback__overlay--opened");
  feedbackForm.classList.add("form--opened");
});

sidebarFeedbackButton.addEventListener("click", function(evt) {
  evt.preventDefault();

  feedback.classList.add("feedback--opened");
  feedbackOverlay.classList.add("feedback__overlay--opened");
  feedbackForm.classList.add("form--opened");
  
  if (window.innerWidth < 1440) {
    sidePanel.classList.remove("sidebar__panel--opened");
    sidebarOverlay.classList.remove("sidebar__overlay--opened");
    sidebar.classList.remove("sidebar--opened");
  }
});

closeFeedbackButton.addEventListener("click", function(evt) {
  evt.preventDefault();

  feedback.classList.remove("feedback--opened");
  feedbackOverlay.classList.remove("feedback__overlay--opened");
  feedbackForm.classList.remove("form--opened");
});

feedbackOverlay.addEventListener("click", function(evt) {
  evt.preventDefault();

  feedback.classList.remove("feedback--opened");
  feedbackOverlay.classList.remove("feedback__overlay--opened");
  feedbackForm.classList.remove("form--opened");
});

let callBlock = document.querySelector(".call");
let callForm = callBlock.querySelector(".call__form");
let callBlockOverlay = callBlock.querySelector(".call__overlay");
let callFormCloseButton = callForm.querySelector(".call__close-button");
let callButton = pageMenu.querySelector(".menu__call-button");
let sidebarCallButton = sidebar.querySelector(".sidebar__call-button");

callButton.addEventListener("click", function(evt) {
  evt.preventDefault();

  callBlock.classList.add("call--opened");
  callBlockOverlay.classList.add("call__overlay--opened");
  callForm.classList.add("form--opened");
});

sidebarCallButton.addEventListener("click", function(evt) {
  evt.preventDefault();

  callBlock.classList.add("call--opened");
  callBlockOverlay.classList.add("call__overlay--opened");
  callForm.classList.add("form--opened");

  if (window.innerWidth < 1440) {
    sidePanel.classList.remove("sidebar__panel--opened");
    sidebarOverlay.classList.remove("sidebar__overlay--opened");
    sidebar.classList.remove("sidebar--opened");
  }
});

callFormCloseButton.addEventListener("click", function(evt) {
  evt.preventDefault();

  callBlock.classList.remove("call--opened");
  callBlockOverlay.classList.remove("call__overlay--opened");
  callForm.classList.remove("form--opened");
});

callBlockOverlay.addEventListener("click", function(evt) {
  evt.preventDefault();

  callBlock.classList.remove("call--opened");
  callBlockOverlay.classList.remove("call__overlay--opened");
  callForm.classList.remove("form--opened");
});

let slide = document.querySelector(".slide__content");
let slideElements = slide.children;
let readMoreButton = slide.querySelector(".slide__read-more");
let disabledSlideContent;

if (window.innerWidth < 768) {
  for (let i = 1; i < slideElements.length - 1; i++) {
    slideElements[i].classList.add("slide__text--disable");
  }
  disabledSlideContent = slide.querySelectorAll(".slide__text--disable");

} else if ( (window.innerWidth >= 768) && (window.innerWidth < 1440) ) {
  for (let i = 2; i < slideElements.length - 1; i++) {
    slideElements[i].classList.add("slide__text--disable");
  }
  disabledSlideContent = slide.querySelectorAll(".slide__text--disable");
}

readMoreButton.addEventListener("click", function (evt) {
  evt.preventDefault();

  let slideContent = slide.children;
  readMore(slideContent, readMoreButton, disabledSlideContent);
});

function readMore(elements, button, disabledText) {
  if (button.innerText === "Читать далее") {
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].classList.contains("slide__text--disable")) {
        elements[i].classList.remove("slide__text--disable");
      }
    }
    button.innerText = "Скрыть";

  } else {

    for (let i = 0; i < disabledText.length; i++) {
      disabledText[i].classList.add("slide__text--disable");
    }
    button.innerText = "Читать далее";
  }
} 

let pricesSlider = document.querySelector(".prices__list");

const pricesSwiper = new Swiper(pricesSlider, {
  wrapperClass: "prices__list-body",
  slideClass: "prices__list-tr",
  slidesPerView: "auto",
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".prices__pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: "auto",
      enabled: true,
      spaceBetween: 20,
    },
    768: {
      enabled: false,
      spaceBetween: 0,
    },
  },
});

if (window.innerWidth >= 1440) {
  for (let i = 3; i < slideElements.length - 1; i++) {
    slideElements[i].classList.add("slide__text--disable");
  }
  disabledSlideContent = slide.querySelectorAll(".slide__text--disable");

  let brandsCardList = brandCards.children;
  let devicesCardList = deviceCards.children;

  for (let i = 6; i < 8; i++) { // i < 8   ?
    let disabledElement = brandsCardList[i];
    disabledElement.classList.remove("brands__list-item--hidden");
  }

  for (let i = 7; i < 8; i++) { // i < 8   ?
    let disabledElement = devicesCardList[i];
    disabledElement.classList.remove("devices__list-item--hidden");
  }
}

console.log('Works!')