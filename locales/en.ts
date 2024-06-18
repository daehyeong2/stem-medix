export default {
  titles: {
    home: "Home",
  },
  nav: {
    titles: {
      company: "Company",
      technology: "Technology",
      product: "Product",
      ir_pr: "IR/PR",
    },
    contents: {
      company: {
        about: "About us",
        growth_goals: "Growth goals",
        organization_chart: "Organization chart",
        way_to_come: "How to Find Us",
      },
      technology: {
        pipeline: "Pipeline Overview",
        sm101: "SM-101(SR-1)",
      },
      product: {
        culture_medium: "Culture medium",
        validation_service: "Validation service",
      },
      ir_pr: {
        news: "News",
        notice: "Notice",
        research_achievement: "Research achievement",
      },
    },
  },
  routes: {
    home: {
      sliders: {
        main: {
          title: "About Stem Medix",
          description:
            "Stem Medix is ​​a global company conducting advanced biotechnology research and development.",
        },
        main_field: {
          title: "Main areas of Stem Medix",
          description:
            "Stem Medix's main areas include developing stem cell treatments and providing platform technology.",
        },
      },
      cards: {
        goals: "Growth goals",
        research_achievement: "Research achievement",
        pipeline: "Pipeline",
        validation_service: "Validation service",
        culture_medium: "Culture medium",
      },
      technology: {
        title: {
          first: "More professional skills",
          second: "Proud",
          point: "Stem Medix",
        },
        items: {
          pipeline: {
            title: "Pipeline",
            description: "Based core pipeline",
          },
          sm_101: {
            title: "SM-101(SR-1)",
            description: "Stem Medix’s key technology",
          },
          validation_service: {
            title: "Validation service",
            description: "Fast and professional evaluation service",
          },
        },
      },
    },
    about: {
      description:
        " is ​​a company based on the development of stem cell treatments, the stem cell custom culture medium industry, and the provision of platform technology.​​",
      core_technology: "Core Technology",
      learn_more: "Learn more",
      mission: "Stem Medix's Mission",
      core_values: {
        title: "Stem Medix Core Values",
        values: {
          one: "Growth of the company through self-development",
          two: "Communication and cooperation with mutual respect",
          three:
            "Creation of global leadership through top-notch technology development",
        },
      },
      ceo_introduction: {
        title: "CEO introduction",
        name: "권상모(영문 이름으로 수정 필요)",
        career: {
          stem_medix_ceo: "Stem Medix CEO",
          kovas_member: "KOVAS Regular member",
          bk21_business_leader: "PNU BK21 Business Leader",
          director_of_laboratory_animal_management_center:
            "Director of PNU Laboratory Animal Management Center",
          pnu_professor: "Professor at Pusan ​​National University",
          tokyo_phd: "Doctorate from University of Tokyo",
          cha_professor:
            "(Former) Professor at CHA University of Medical Sciences",
          tokyo_professor:
            "(Former) Professor of Regenerative Medicine at Tokai University",
          tokyo_regenerative_medicine_center:
            "(Former) Tokai University Regenerative Medicine Center",
        },
      },
    },
  },
  shortcut: "Go to the page",
  shortcuts: {
    company_introduction: "Go to company introduction",
    pipeline: "Go to pipeline",
  },
  footer: {
    privacy_policy: "Privacy Policy",
    titles: {
      company: "Company",
      email: "Email",
      address: "Address",
    },
    contents: {
      company: "Stem Medix",
      email: "0000@0000.com",
      address: "영문 주소가 필요합니다.",
    },
  },
} as const;
