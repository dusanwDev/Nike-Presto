let cart = document.querySelectorAll(".cart-icon-link");
let cart_menu = document.querySelector(".cart-menu");
let favorites_btn = document.querySelectorAll(".heart-icon-link");
let hero = document.querySelector(".hero");
let header = document.querySelector("header");

let heart_fixed = document.querySelector(".heart-fixed");
let cart_fixed = document.querySelector(".cart-fixed");

let right_btn = document.querySelectorAll(".right-btn");
let left_btn = document.querySelectorAll(".left-btn");

let btn_to_cart = document.querySelectorAll(".btn-to-cart");

let fav_btn = document.querySelectorAll(".fav-btn");

let scroll_links = document.querySelectorAll(".scroll-link");

let wrapper_menu = document.querySelector(".wrapper-menu");
let favorites_wrpaaermenu = document.querySelector(".favorites-wrapper-menu");

let hamburger = document.querySelector(".hamburger-btn");
//Functions

let hamburger_function = () => {
  let droopdown_menu = document.querySelector(".dropdown-menu");
  let links = document.querySelector(".dropdown-links");
  let linksHeight = links.getBoundingClientRect().height;
  let dropDownheight = droopdown_menu.getBoundingClientRect().height;
  if (dropDownheight === 0) {
    droopdown_menu.style.height = `${linksHeight}px`;
  } else {
    droopdown_menu.style.height = 0;
  }
};
let fixed_heart_btn = () => {
  let favorites_section = document.querySelector(".favorites");
  let favorites_cancel = document.getElementById("favorites-cancel");

  let favoriteswidth = favorites_section.getBoundingClientRect().width;
  if (favoriteswidth === 0) {
    favorites_section.style.width = "430px";
    favorites_section.classList.add("visible");
    favorites_section.style.visibility = "visible";
  } else {
    favorites_section.style.width = "0px";
    favorites_section.classList.remove("visible");
  }

  favorites_cancel.addEventListener("click", () => {
    favorites_section.style.width = "0px";
  });
};
//Crate cart item
let cart_item = (source, itemName, itemPrice, element) => {
  if (element.classList.contains("btn-to-cart")) {
    let wrapper_menu = document.querySelector(".wrapper-menu");

    let new_item = document.createElement("div");
    new_item.classList.add("item");
    new_item.style.margin = ".5em 0 ";

    let item_img = document.createElement("div");
    item_img.classList.add("item-img");
    new_item.appendChild(item_img);

    let image = document.createElement("img");
    image.src = source;
    item_img.appendChild(image);

    let item_name_p = document.createElement("p");
    item_name_p.textContent = itemName;
    new_item.appendChild(item_name_p);
    item_name_p.classList.add("item-name");

    let item_price_p = document.createElement("p");
    item_price_p.textContent = itemPrice;
    new_item.appendChild(item_price_p);
    item_price_p.classList.add("item-price");

    let circle = document.createElement("p");
    circle.classList.add("remove");
    circle.innerHTML = `<i class="fas fa-minus-circle"></i>`;

    new_item.appendChild(circle);

    wrapper_menu.appendChild(new_item);
  } else {
    let wrapper_menu = document.querySelector(".favorites-wrapper-menu");

    let new_item = document.createElement("div");
    new_item.classList.add("item");
    new_item.style.margin = ".5em 0 ";

    let item_img = document.createElement("div");
    item_img.classList.add("item-img");
    new_item.appendChild(item_img);

    let image = document.createElement("img");
    image.src = source;
    item_img.appendChild(image);

    let item_name_p = document.createElement("p");
    item_name_p.textContent = itemName;
    new_item.appendChild(item_name_p);
    item_name_p.classList.add("item-name");

    let circle = document.createElement("p");
    circle.classList.add("remove");
    circle.innerHTML = `<i class="fas fa-minus-circle"></i>`;
    new_item.appendChild(circle);

    wrapper_menu.appendChild(new_item);
  }
};

let sum = () => {
  let items = document.querySelectorAll(".item-price");
  let total = document.getElementById("total");

  let sum = 0;
  items.forEach((item) => {
    sum = sum + parseInt(item.textContent);
  });

  total.textContent = sum + "$";
  return sum;
};
let fixed_cart = () => {
  let cartwidth = cart_menu.getBoundingClientRect().width;
  if (cartwidth === 0) {
    cart_menu.style.width = "430px";
    cart_menu.classList.add("visible");
  } else {
    cart_menu.style.width = "0px";
    cart_menu.classList.remove("visible");
  }
};
let small_screens = () => {
  let card_shoes = document.querySelectorAll(".card-shoes");
  let card_hodies = document.querySelectorAll(".card-hoodie");
  let card_jacket = document.querySelectorAll(".card-jacket");
  let card_man = document.querySelectorAll(".card-man");
  let card_women = document.querySelectorAll(".card-women");
  let card_kids = document.querySelectorAll(".card-kids");

  for (let i = 0; i < card_hodies.length; i++) {
    //remove all active classes
    card_shoes[i].classList.remove("active");
    card_hodies[i].classList.remove("active");
    card_jacket[i].classList.remove("active");
    card_man[i].classList.remove("active");
    card_women[i].classList.remove("active");
    card_kids[i].classList.remove("active");

    //display only first one
    if (i === 0) {
      card_shoes[i].classList.add("active");
      card_hodies[i].classList.add("active");
      card_jacket[i].classList.add("active");
      card_man[i].classList.add("active");
      card_women[i].classList.add("active");
      card_kids[i].classList.add("active");
    }
  }
};

let big_screens = () => {
  let card_shoes = document.querySelectorAll(".card-shoes");
  let card_hodies = document.querySelectorAll(".card-hoodie");
  let card_jacket = document.querySelectorAll(".card-jacket");
  let card_man = document.querySelectorAll(".card-man");
  let card_women = document.querySelectorAll(".card-women");
  let card_kids = document.querySelectorAll(".card-kids");

  //for bigger screens
  for (let i = 0; i < card_shoes.length; i++) {
    //Add class to all but then remove from the last three elements
    // beacuse we want first three elements to apear
    card_shoes[i].classList.add("active");
    card_hodies[i].classList.add("active");
    card_jacket[i].classList.add("active");
    card_man[i].classList.add("active");
    card_women[i].classList.add("active");
    card_kids[i].classList.add("active");
    if (i > 2) {
      card_shoes[i].classList.remove("active");
      card_hodies[i].classList.remove("active");
      card_jacket[i].classList.remove("active");
      card_man[i].classList.remove("active");
      card_women[i].classList.remove("active");
      card_kids[i].classList.remove("active");
    }
  }
};

//-------------------------------------------------------------------------

hamburger.addEventListener("click", () => {
  hamburger_function();
});
let cancel_cart = document.querySelector(".cancel");
cart.forEach((crt) => {
  crt.addEventListener("click", () => {
    let cartwidth = cart_menu.getBoundingClientRect().width;
    if (cartwidth === 0) {
      cart_menu.style.width = "430px";
      cart_menu.classList.add("visible");
    } else {
      cart_menu.style.width = "0px";
      cart_menu.classList.remove("visible");
    }
    if (window.innerWidth < 600) {
      if (cartwidth === 0) {
        cart_menu.style.width = "100%";
        cart_menu.classList.add("visible");
      } else {
        cart_menu.style.width = "0px";
        cart_menu.classList.remove("visible");
      }
    }
  });
});
cancel_cart.addEventListener("click", () => {
  cart_menu.style.width = "0px";
});
favorites_btn.forEach((fav) => {
  fav.addEventListener("click", () => {
    //Display favorites menu
    let favorites_section = document.querySelector(".favorites");
    let favoriteswidth = favorites_section.getBoundingClientRect().width;
    if (favoriteswidth === 0) {
      favorites_section.style.width = "430px";
      favorites_section.classList.add("visible");
    } else {
      favorites_section.style.width = "0px";
      favorites_section.classList.remove("visible");
    }

    //Cancel Btn
    let favorites_cancel = document.getElementById("favorites-cancel");
    favorites_cancel.addEventListener("click", () => {
      favorites_section.style.width = "0px";
    });

    //For Mobile
    if (window.innerWidth < 600) {
      let favorites_section = document.querySelector(".favorites");
      let favoriteswidth = favorites_section.getBoundingClientRect().width;
      if (favoriteswidth === 0) {
        favorites_section.style.width = "100%";
        favorites_section.classList.add("visible");
        favorites_section.style.visibility = "visible";
      } else {
        favorites_section.style.width = "0px";
        favorites_section.classList.remove("visible");
      }
    }
  });
});

//favorties btn on fixed header
heart_fixed.addEventListener("click", () => {
  fixed_heart_btn();
});

//cat btn on fixed header
cart_fixed.addEventListener("click", () => {
  fixed_cart();
});

right_btn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let niz = e.target.previousElementSibling.children;
    let card_shoes = document.querySelectorAll(".card-shoes");
    let card_hodies = document.querySelectorAll(".card-hoodie");
    let card_jacket = document.querySelectorAll(".card-jacket");
    let card_man = document.querySelectorAll(".card-man");
    let card_women = document.querySelectorAll(".card-women");
    let card_kids = document.querySelectorAll(".card-kids");
    //for mobile
    if (window.innerWidth < 600) {
      if (niz[0].classList.contains("card-shoes")) {
        let element = document.querySelectorAll(".active");
        //get first active class
        let reqElement = element[0];
        reqElement.classList.remove("active");
        if (reqElement.nextElementSibling) {
          reqElement.nextElementSibling.classList.add("active");
        } else {
          niz[0].classList.add("active");
        }
      } else if (niz[0].classList.contains("card-hot")) {
        let element = document.querySelector(".active-hot");
        element.classList.remove("active-hot");
        if (element.nextElementSibling) {
          element.nextElementSibling.classList.add("active-hot");
        } else {
          niz[0].classList.add("active-hot");
        }
      } else if (niz[0].classList.contains("card-hoodie")) {
        let element = document.querySelectorAll(".active");
        let reqElement = element[1];
        reqElement.classList.remove("active");
        if (reqElement.nextElementSibling) {
          reqElement.nextElementSibling.classList.add("active");
        } else {
          niz[0].classList.add("active");
        }
      } else if (niz[0].classList.contains("card-jacket")) {
        let element = document.querySelectorAll(".active");
        let reqElement = element[2];
        reqElement.classList.remove("active");
        if (reqElement.nextElementSibling) {
          reqElement.nextElementSibling.classList.add("active");
        } else {
          niz[0].classList.add("active");
        }
      } else if (niz[0].classList.contains("card-kids")) {
        let element = document.querySelectorAll(".active");
        let reqElement = element[3];
        reqElement.classList.remove("active");
        if (reqElement.nextElementSibling) {
          reqElement.nextElementSibling.classList.add("active");
        } else {
          niz[0].classList.add("active");
        }
      } else if (niz[0].classList.contains("card-women")) {
        let element = document.querySelectorAll(".active");
        let reqElement = element[4];
        reqElement.classList.remove("active");
        if (reqElement.nextElementSibling) {
          reqElement.nextElementSibling.classList.add("active");
        } else {
          niz[0].classList.add("active");
        }
      } else if (niz[0].classList.contains("card-man")) {
        let element = document.querySelectorAll(".active");
        let reqElement = element[5];
        reqElement.classList.remove("active");
        if (reqElement.nextElementSibling) {
          reqElement.nextElementSibling.classList.add("active");
        } else {
          niz[0].classList.add("active");
        }
      }
    } else {
      //For bigger screens
      for (let i = 0; i < niz.length; i++) {
        if (niz[i].classList.contains("card-shoes"))
          if (i > 2) {
            //Add active to the next three cards
            card_shoes[i].classList.add("active");
          } else {
            //Add active to the next three cards
            card_shoes[i].classList.remove("active");
          }
        else if (niz[i].classList.contains("card-hoodie")) {
          if (i > 2) {
            card_hodies[i].classList.add("active");
          } else {
            card_hodies[i].classList.remove("active");
          }
        } else if (niz[i].classList.contains("card-jacket")) {
          if (i > 2) {
            card_jacket[i].classList.add("active");
          } else {
            card_jacket[i].classList.remove("active");
          }
        } else if (niz[i].classList.contains("card-kids")) {
          if (i > 2) {
            card_kids[i].classList.add("active");
          } else {
            card_kids[i].classList.remove("active");
          }
        } else if (niz[i].classList.contains("card-women")) {
          if (i > 2) {
            card_women[i].classList.add("active");
          } else {
            card_women[i].classList.remove("active");
          }
        } else if (niz[i].classList.contains("card-man")) {
          if (i > 2) {
            card_man[i].classList.add("active");
          } else {
            card_man[i].classList.remove("active");
          }
        }
      }
    }
  });
});

left_btn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let niz = e.target.nextElementSibling.children;
    let card_shoes = document.querySelectorAll(".card-shoes");
    let card_hodies = document.querySelectorAll(".card-hoodie");
    let card_jacket = document.querySelectorAll(".card-jacket");
    let card_man = document.querySelectorAll(".card-man");
    let card_women = document.querySelectorAll(".card-women");
    let card_kids = document.querySelectorAll(".card-kids");

    if (window.innerWidth < 600) {
      if (niz[0].classList.contains("card-shoes")) {
        let element = document.querySelectorAll(".active");
        let reqElement = element[0];
        reqElement.classList.remove("active");
        if (reqElement.previousElementSibling) {
          reqElement.previousElementSibling.classList.add("active");
        } else {
          niz[niz.length - 1].classList.add("active");
        }
      } else if (niz[0].classList.contains("card-hot")) {
        let element = document.querySelector(".active-hot");
        element.classList.remove("active-hot");
        if (element.previousElementSibling) {
          element.previousElementSibling.classList.add("active-hot");
        } else {
          niz[niz.length - 1].classList.add("active-hot");
        }
      } else if (niz[0].classList.contains("card-hoodie")) {
        let element = document.querySelectorAll(".active");
        let reqElement = element[1];
        reqElement.classList.remove("active");
        if (reqElement.previousElementSibling) {
          reqElement.previousElementSibling.classList.add("active");
        } else {
          niz[niz.length - 1].classList.add("active");
        }
      } else if (niz[0].classList.contains("card-jacket")) {
        let element = document.querySelectorAll(".active");
        let reqElement = element[2];
        reqElement.classList.remove("active");
        if (reqElement.previousElementSibling) {
          reqElement.previousElementSibling.classList.add("active");
        } else {
          niz[niz.length - 1].classList.add("active");
        }
      } else if (niz[0].classList.contains("card-kids")) {
        let element = document.querySelectorAll(".active");
        let reqElement = element[3];
        reqElement.classList.remove("active");
        if (reqElement.previousElementSibling) {
          reqElement.previousElementSibling.classList.add("active");
        } else {
          niz[niz.length - 1].classList.add("active");
        }
      } else if (niz[0].classList.contains("card-women")) {
        let element = document.querySelectorAll(".active");
        let reqElement = element[4];
        reqElement.classList.remove("active");
        if (reqElement.previousElementSibling) {
          reqElement.previousElementSibling.classList.add("active");
        } else {
          niz[niz.length - 1].classList.add("active");
        }
      } else if (niz[0].classList.contains("card-man")) {
        let element = document.querySelectorAll(".active");
        let reqElement = element[5];
        reqElement.classList.remove("active");
        if (reqElement.previousElementSibling) {
          reqElement.previousElementSibling.classList.add("active");
        } else {
          niz[niz.length - 1].classList.add("active");
        }
      }
    } else {
      for (let i = 0; i < niz.length; i++) {
        if (niz[i].classList.contains("card-shoes"))
          if (i < 3) {
            card_shoes[i].classList.add("active");
          } else {
            card_shoes[i].classList.remove("active");
          }
        else if (niz[i].classList.contains("card-hoodie")) {
          if (i < 3) {
            card_hodies[i].classList.add("active");
          } else {
            card_hodies[i].classList.remove("active");
          }
        } else if (niz[i].classList.contains("card-jacket")) {
          if (i < 3) {
            card_jacket[i].classList.add("active");
          } else {
            card_jacket[i].classList.remove("active");
          }
        } else if (niz[i].classList.contains("card-kids")) {
          if (i < 3) {
            card_kids[i].classList.add("active");
          } else {
            card_kids[i].classList.remove("active");
          }
        } else if (niz[i].classList.contains("card-women")) {
          if (i < 3) {
            card_women[i].classList.add("active");
          } else {
            card_women[i].classList.remove("active");
          }
        } else if (niz[i].classList.contains("card-man")) {
          if (i < 3) {
            card_man[i].classList.add("active");
          } else {
            card_man[i].classList.remove("active");
          }
        }
      }
    }
  });
});
const optionsNav = {
  rootMargin: "50px 0px 0px 0px",
};
let myObserver = new IntersectionObserver((entries, myObserver) => {
  entries.forEach((entry) => {
    let favorites = document.querySelector(".favorites");
    if (!entry.isIntersecting) {
      //Ako se predje granica onda dodajemo fixed na sledece elemente
      header.classList.add("fixed");
      cart_menu.classList.add("cart-fixed-menu");
      favorites.classList.add("favorites-menu-fixed");
    } else {
      header.classList.remove("fixed");
      cart_menu.classList.remove("cart-fixed-menu");
      favorites.classList.remove("favorites-menu-fixed");
    }
  });
}, optionsNav);

//Activate observer
myObserver.observe(hero);

btn_to_cart.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    let element = e.currentTarget;

    let img =
      e.target.parentElement.previousElementSibling.previousElementSibling
        .children[0].src;

    let item_name =
      e.target.parentElement.previousElementSibling.children[0].children[0]
        .textContent;

    let price =
      e.target.parentElement.previousElementSibling.children[1].children[0]
        .textContent;

    //Pass to functions
    cart_item(img, item_name, price, element);
    sum();
  });
});

wrapper_menu.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove")) {
    e.target.parentElement.remove();
    sum();
  }
});
favorites_wrpaaermenu.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove")) {
    e.target.parentElement.remove();
  }
});
fav_btn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    let element = e.currentTarget;
    let img =
      e.target.parentElement.previousElementSibling.previousElementSibling
        .children[0].src;
    console.log(img);
    let item_name =
      e.target.parentElement.previousElementSibling.children[0].children[0]
        .textContent;

    cart_item(img, item_name, null, element);
  });
});

scroll_links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    let id = e.currentTarget.getAttribute("href").slice(1);
    let element = document.getElementById(id);
    let drop_down_menu = document.querySelector(".dropdown-menu");
    let heightDropDown = drop_down_menu.getBoundingClientRect().height;

    let header = document.querySelector(".header");
    headerHeight = header.getBoundingClientRect().height;

    let isFixed = header.classList.contains("fixed");

    //kad je fixed
    let position = element.offsetTop - headerHeight;

    // posto kada kliknemo na link kada smo na vrh stranice tada je height headera normalan. Medjutim kada dodjemo do zeljene sekcije height headera je fix i ima novu vrednost pa moramo tu novu vrednost dodatno da oduzmemo.
    //-16 je zbog margin top
    if (!isFixed) {
      position = position - (headerHeight - 16);
    }
    if (headerHeight > 80) {
      position = position + heightDropDown;
    }
    drop_down_menu.style.height = 0;

    window.scrollTo({ left: 0, top: position });
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth < 600) {
    small_screens();
  } else {
    big_screens();
  }
});

if (window.innerWidth < 600) {
  small_screens();
} else {
  big_screens();
}
