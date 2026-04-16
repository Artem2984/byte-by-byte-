// Находим форму и элементы формы
const form = document.getElementById("signup-form");
const message = document.getElementById("form-message");

const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const courseSelect = document.getElementById("course");

const nameError = document.getElementById("name-error");
const phoneError = document.getElementById("phone-error");
const courseError = document.getElementById("course-error");

// Проверка формы
if (
  form &&
  message &&
  nameInput &&
  phoneInput &&
  courseSelect &&
  nameError &&
  phoneError &&
  courseError
) {
  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const course = courseSelect.value.trim();

    message.textContent = "";
    message.classList.remove("error", "success");

    nameInput.classList.remove("error");
    phoneInput.classList.remove("error");
    courseSelect.classList.remove("error");

    nameError.textContent = "";
    phoneError.textContent = "";
    courseError.textContent = "";

    let hasError = false;

    if (name === "") {
      nameInput.classList.add("error");
      nameError.textContent = "Введите имя";
      hasError = true;
    }

    const phoneNumbers = phone.replace(/\D/g, "");

    if (phone === "") {
      phoneInput.classList.add("error");
      phoneError.textContent = "Введите телефон";
      hasError = true;
    } else if (phoneNumbers.length < 10) {
      phoneInput.classList.add("error");
      phoneError.textContent = "Введите телефон полностью";
      hasError = true;
    }

    if (course === "") {
      courseSelect.classList.add("error");
      courseError.textContent = "Выберите курс";
      hasError = true;
    }

    if (hasError) {
      message.textContent = "Пожалуйста, исправьте ошибки в форме.";
      message.classList.add("error");
      return;
    }

    message.textContent = "Спасибо! Ваша заявка отправлена.";
    message.classList.add("success");
    form.reset();
  });

  nameInput.addEventListener("input", function() {
    if (nameInput.value.trim() !== "") {
      nameInput.classList.remove("error");
      nameError.textContent = "";
    }
  });

  phoneInput.addEventListener("input", function() {
    const phoneNumbers = phoneInput.value.replace(/\D/g, "");

    if (phoneInput.value.trim() !== "" && phoneNumbers.length >= 10) {
      phoneInput.classList.remove("error");
      phoneError.textContent = "";
    }
  });

  courseSelect.addEventListener("change", function() {
    if (courseSelect.value.trim() !== "") {
      courseSelect.classList.remove("error");
      courseError.textContent = "";
    }
  });
}

// FAQ
const questions = document.querySelectorAll(".faq-question");

questions.forEach(function(question) {
  question.addEventListener("click", function() {
    const item = question.parentElement;
    item.classList.toggle("active");
  });
});

// Мобильное меню
const menuToggle = document.getElementById("menu-toggle");
const headerMenu = document.getElementById("header-menu");

if (menuToggle && headerMenu) {
  menuToggle.addEventListener("click", function() {
    headerMenu.classList.toggle("active");
  });
}

// Закрытие меню после нажатия на ссылку
const menuLinks = document.querySelectorAll(".nav a");

menuLinks.forEach(function(link) {
  link.addEventListener("click", function() {
    if (headerMenu) {
      headerMenu.classList.remove("active");
    }
  });
});
