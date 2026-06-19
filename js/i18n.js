const translations = {
  en: {
    nav_projects: "Projects",
    nav_photography: "Photography",
    nav_itchio: "Itch.io",
    hero_kicker: "Portfolio",
    hero_title: "Kevin Kang",
    hero_description: "I am Kevin, I like gaming, programming, gamemaking and robotics.",
    hero_projects_cta: "View projects",
    hero_photos_cta: "View photography",
    intro_body: "I am from China and currently live in the Netherlands. I am currently an EE student from TU Delft.",
    projects_kicker: "Projects",
    projects_title: "Project archive",
    highschool_title: "High school projects",
    highschool_body: "Technasium highschool projects, prototypes, and research reports sorted by each year.",
    university_title: "University projects",
    university_body: "University assignments.",
    personal_title: "Personal projects",
    personal_body: "Independent work including game development, GitHub projects, experiments, and robotics.",
    photography_kicker: "Photography",
    photography_title: "Selected photos"
  },
  nl: {
    nav_projects: "Projecten",
    nav_photography: "Fotografie",
    nav_itchio: "Itch.io",
    hero_kicker: "Portfolio",
    hero_title: "Kevin Kang",
    hero_description: "Ik ben Kevin, ik houd van gamen, programmeren, games maken en robotica.",
    hero_projects_cta: "Bekijk projecten",
    hero_photos_cta: "Bekijk fotografie",
    intro_body: "Ik kom uit China en woon nu in Nederland. Ik studeer Electrical Engineering aan de TU Delft.",
    projects_kicker: "Projecten",
    projects_title: "Projectarchief",
    highschool_title: "Middelbare schoolprojecten",
    highschool_body: "Technasium-projecten van de middelbare school, prototypes en onderzoeksverslagen gesorteerd per jaar.",
    university_title: "Universiteitsprojecten",
    university_body: "Universiteitsopdrachten.",
    personal_title: "Persoonlijke projecten",
    personal_body: "Eigen werk, waaronder gameontwikkeling, GitHub-projecten, experimenten en robotica.",
    photography_kicker: "Fotografie",
    photography_title: "Geselecteerde foto's"
  },
  zh: {
    nav_projects: "项目",
    nav_photography: "摄影",
    nav_itchio: "Itch.io",
    hero_kicker: "作品集",
    hero_title: "Kevin Kang",
    hero_description: "我是 Kevin，我喜欢游戏、编程、游戏制作和机器人。",
    hero_projects_cta: "查看项目",
    hero_photos_cta: "查看摄影",
    intro_body: "我来自中国，目前住在荷兰。我现在是 TU Delft 的电气工程学生。",
    projects_kicker: "项目",
    projects_title: "项目档案",
    highschool_title: "高中项目",
    highschool_body: "按年份整理的 Technasium 高中项目、原型和研究报告。",
    university_title: "大学项目",
    university_body: "大学作业。",
    personal_title: "个人项目",
    personal_body: "个人项目，包括游戏开发、GitHub 项目、实验和机器人。",
    photography_kicker: "摄影",
    photography_title: "精选照片"
  }
};

function setLanguage(lang) {
  const selected = translations[lang] ? lang : "en";

  try {
    localStorage.setItem("lang", selected);
  } catch (error) {
    console.warn("Could not save language preference to localStorage.");
  }

  document.documentElement.lang = selected;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    const translation = translations[selected][key];

    if (translation) {
      element.innerHTML = translation;
    }
  });

  document.querySelectorAll(".lang-switcher button, .game-nav button").forEach((button) => {
    button.classList.toggle("active", button.id === `lang-${selected}`);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setLanguage("en");

  document.querySelectorAll("button[id^='lang-']").forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(button.id.replace("lang-", ""));
    });
  });
});
