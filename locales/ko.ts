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
    },
    about: {
      description:
        "는 줄기세포 치료제 개발, 줄기세포 맞춤형 배양배지 산업, 플랫폼 기술 제공을 기반으로 하는 회사입니다.​",
      core_technology: "핵심 기술",
      learn_more: "자세히 알아보기",
      mission: "Stem Medix 미션",
      core_values: {
        title: "Stem Medix 핵심 가치",
        values: {
          one: "자기 개발을 통한 회사의 발전",
          two: "서로 존중하는 커뮤니케이션 및 협업",
          three: "최고 수준의 기술개발을 통한 글로벌 리더쉽의 창출",
        },
      },
      ceo_introduction: {
        title: "대표이사 소개",
        name: "권상모",
        career: {
          stem_medix_ceo: "Stem Medix 대표이사",
          kovas_member: "혈관학회 정회원",
          bk21_business_leader: "부산의대 BK21 사업단장",
          director_of_laboratory_animal_management_center:
            "부산대 실험동물 관리원장",
          pnu_professor: "부산의대 교수",
          tokyo_phd: "도쿄대학 박사",
          cha_professor: "(전)CHA 의과학대학교 교수",
          tokyo_professor: "(전)토카이대학교 재생의학과 교수",
          tokyo_regenerative_medicine_center: "(전)토카이대학교 재생의학센터",
        },
      },
    },
  },
  shortcut: "바로가기",
  shortcuts: {
    company_introduction: "회사 소개 바로가기",
    pipeline: "파이프라인 바로가기",
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
