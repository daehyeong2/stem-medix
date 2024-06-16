export default {
  titles: {
    home: "홈",
  },
  nav: {
    titles: {
      company: "회사",
      technology: "기술",
      product: "제품",
      ir_pr: "IR/PR",
    },
    contents: {
      company: {
        about: "회사 소개",
        growth_goals: "성장 목표",
        organization_chart: "조직도",
        way_to_come: "오시는 길",
      },
      technology: {
        pipeline: "파이프라인",
        sm101: "SM-101(SR-1)",
      },
      product: {
        culture_medium: "배양배지",
        validation_service: "유효성평가서비스",
      },
      ir_pr: {
        news: "News",
        notice: "공지사항",
        research_achievement: "연구 성과",
      },
    },
  },
  routes: {
    home: {
      sliders: {
        main: {
          title: "Stem Medix 소개",
          description:
            "Stem Medix는 첨단 생명공학 연구 및 개발을 수행하는 글로벌 기업입니다.",
        },
        main_field: {
          title: "Stem Medix의 주요 분야",
          description:
            "Stem Medix의 주요 분야로는 줄기세포 치료제 개발, 플랫폼 기술 제공 등이 있습니다.​",
        },
      },
    },
  },
  shortcut: "바로가기",
  shortcuts: {
    company_introduction: "회사 소개 바로가기",
    main_area: "주요 분야 바로가기",
  },
  cards: {
    goals: "성장 목표",
    research_achievement: "연구 성과",
    pipeline: "파이프라인",
    validation_service: "유효성 평가 서비스",
    culture_medium: "배양배지",
  },
  technology: {
    title: {
      first: "보다 전문적인 기술을",
      second: "자랑하는",
      point: "Stem Medix",
    },
    items: {
      pipeline: {
        title: "파이프라인",
        description: "기반 핵심 파이프라인",
      },
      sm_101: {
        title: "SM-101(SR-1)",
        description: "Stem Medix의 주요 기술",
      },
      validation_service: {
        title: "유효성 평가 서비스",
        description: "신속하고 전문적인 평가 서비스",
      },
    },
  },
  footer: {
    privacy_policy: "개인정보처리방침",
    titles: {
      company: "상호명",
      email: "이메일",
      address: "주소",
    },
    contents: {
      company: "Stem Medix",
      email: "0000@0000.com",
      address:
        "경상남도 양산시 물금읍 범어리 부산대학로49, (부산대학교 양산캠퍼스 --) ---호",
    },
  },
} as const;
