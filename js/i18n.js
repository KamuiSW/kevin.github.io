const translations = {
  en: {
    nav_projects: "Projects",
    nav_photography: "Photography",
    nav_itchio: "Itch.io",
    hero_kicker: "Portfolio",
    hero_title: "Kevin Kang",
    hero_description: "I build software, games, robotics prototypes, and engineering projects. This portfolio collects my high school, university, personal, and photography work in one place.",
    hero_projects_cta: "View projects",
    hero_photos_cta: "View photography",
    intro_body: "I am from China and currently work on projects around C#, Unity, robotics, engineering design, and physical prototyping. I like projects where code turns into something people can see, test, or use.",
    projects_kicker: "Projects",
    projects_title: "Project archive",
    highschool_title: "High school projects",
    highschool_body: "Technasium client projects, product concepts, prototypes, and research reports sorted by class year.",
    university_title: "University projects",
    university_body: "University assignments, engineering work, and larger technical projects as they develop.",
    personal_title: "Personal projects",
    personal_body: "Independent work including Unity development, GitHub projects, experiments, and games.",
    photography_kicker: "Photography",
    photography_title: "Selected photos"
  },
  nl: {
    nav_projects: "Projecten",
    nav_photography: "Fotografie",
    nav_itchio: "Itch.io",
    hero_kicker: "Portfolio",
    hero_title: "Kevin Kang",
    hero_description: "Ik bouw software, games, robotica-prototypes en technische projecten. Dit portfolio brengt mijn middelbare school-, universiteits-, persoonlijke en fotografieprojecten samen.",
    hero_projects_cta: "Bekijk projecten",
    hero_photos_cta: "Bekijk fotografie",
    intro_body: "Ik kom uit China en werk aan projecten rond C#, Unity, robotica, technisch ontwerp en fysieke prototypes. Ik houd van projecten waarin code verandert in iets dat mensen kunnen zien, testen of gebruiken.",
    projects_kicker: "Projecten",
    projects_title: "Projectarchief",
    highschool_title: "Middelbare schoolprojecten",
    highschool_body: "Technasium klantprojecten, productconcepten, prototypes en onderzoeksverslagen per klas.",
    university_title: "Universiteitsprojecten",
    university_body: "Universiteitsopdrachten, technisch werk en grotere technische projecten terwijl ze zich ontwikkelen.",
    personal_title: "Persoonlijke projecten",
    personal_body: "Eigen werk met Unity, GitHub-projecten, experimenten en games.",
    photography_kicker: "Fotografie",
    photography_title: "Geselecteerde foto's"
  },
  zh: {
    nav_projects: "项目",
    nav_photography: "摄影",
    nav_itchio: "Itch.io",
    hero_kicker: "作品集",
    hero_title: "Kevin Kang",
    hero_description: "我制作软件、游戏、机器人原型和工程项目。这个作品集汇总了我的高中、大学、个人和摄影作品。",
    hero_projects_cta: "查看项目",
    hero_photos_cta: "查看摄影",
    intro_body: "我来自中国，目前专注于 C#、Unity、机器人、工程设计和实体原型项目。我喜欢让代码变成人们可以看到、测试或使用的东西。",
    projects_kicker: "项目",
    projects_title: "项目档案",
    highschool_title: "高中项目",
    highschool_body: "按班级整理的 Technasium 客户项目、产品概念、原型和研究报告。",
    university_title: "大学项目",
    university_body: "大学作业、工程工作和正在发展的更大型技术项目。",
    personal_title: "个人项目",
    personal_body: "包含 Unity 开发、GitHub 项目、实验和游戏的独立作品。",
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
