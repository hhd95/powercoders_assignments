const aboutMe = document.getElementById("about-me");
const myEducation = document.getElementById("my-education");
const contact = document.getElementById("contact");

const aboutMeButton = document.getElementById("about-me-button");
const myEducationButton = document.getElementById("education-button");
const contactButton = document.getElementById("contact-button");

aboutMe.className = "visible";
myEducation.className = "non-visible";
contact.className = "non-visible";

aboutMeButton.style.backgroundColor = "#001530";
aboutMeButton.style.cursor = "default";
myEducationButton.style.cursor = "pointer";
contactButton.style.cursor = "pointer";

const handleClickAbout = () => {
  aboutMe.className = "visible";
  myEducation.className = "non-visible";
  contact.className = "non-visible";

  aboutMeButton.style.backgroundColor = "#001530";
  myEducationButton.style.backgroundColor = "#6c6cff";
  contactButton.style.backgroundColor = "#6c6cff";

  aboutMeButton.style.cursor = "default";
  myEducationButton.style.cursor = "pointer";
  contactButton.style.cursor = "pointer";
};

const handleClickEducation = () => {
  aboutMe.className = "non-visible";
  myEducation.className = "visible";
  contact.className = "non-visible";

  aboutMeButton.style.backgroundColor = "#6c6cff";
  myEducationButton.style.backgroundColor = "#001530";
  contactButton.style.backgroundColor = "#6c6cff";

  aboutMeButton.style.cursor = "pointer";
  myEducationButton.style.cursor = "default";
  contactButton.style.cursor = "pointer";
};

const handleClickContact = () => {
  aboutMe.className = "non-visible";
  myEducation.className = "non-visible";
  contact.className = "visible";

  aboutMeButton.style.backgroundColor = "#6c6cff";
  myEducationButton.style.backgroundColor = "#6c6cff";
  contactButton.style.backgroundColor = "#001530";

  aboutMeButton.style.cursor = "pointer";
  myEducationButton.style.cursor = "pointer";
  contactButton.style.cursor = "default";
};
