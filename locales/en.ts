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
          title: "R&D Technology",
          description:
            "Stem Medix's main areas include developing stem cell treatments and providing platform technology.",
        },
      },
    },
  },
} as const;
