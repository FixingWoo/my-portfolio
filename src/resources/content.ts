export const person = {
  location: Intl.DateTimeFormat().resolvedOptions().timeZone,
  name: '조정우',
  role: 'Frontend Engineer',
  email: 'fixingwoo@gmail.com',
};

export const social = [
  {
    name: 'GitHub',
    icon: 'github',
    link: 'https://github.com/FixingWoo',
  },
  {
    name: 'Email',
    icon: 'email',
    link: `mailto:${person.email}`,
  },
];

export const about = {
  intro: {
    description:
      '4년간 웹 프론트엔드 엔지니어로 일하며 반복되는 UI를 체계화하고 개선하는 데 보람을 느껴왔습니다. 더 나은 사용자 경험과 개발 생산성을 고민하며 문제 해결에 즐거움을 느낍니다. 코드 리팩토링과 공통화에 관심이 많고, 협업을 통해 더 나은 결과를 만드는 것을 중요하게 생각합니다.',
  },
  work: {
    title: 'Work Experience.',
    experiences: [
      {
        company: '(주)BD',
        period: '2021 - 현재',
        role: 'Front-end Enginner',
        achievements: [
          'React, Vue - 재사용 가능한 공통 함수/유틸리티 모듈 구현',
          'Storybook 기반 문서화',
          'SCSS, BEM 활용 관리자·사용자 반응형 웹 퍼블리싱',
          'WebGL 렌더링 최적화 및 성능 개선',
          '웹 성능 최적화',
        ],
      },
      {
        company: '아사삭',
        period: '2024.01 - 2025.04',
        role: 'Front-end Enginner',
        achievements: [
          '픽업/배송 주문 서비스 "아사삭 스토어 어드민" 개발',
          '공통 함수 및 유틸리티 모듈 구현',
        ],
      },
    ],
  },
  studies: {
    title: 'Education.',
    institutions: [
      {
        name: '백석대학교',
        period: '2015.03 ~ 2021.01',
        department: '정보보호학과',
      },
    ],
  },
  technical: {
    title: 'Skill.',
    categories: [
      {
        name: 'Frontend',
        items: [
          'HTML5',
          'CSS 3',
          'SCSS',
          'JavaScript',
          'TypeScript',
          'Vue 3',
          'React',
          'Next.js',
          'Storybook',
        ],
      },
      {
        name: 'State Management',
        items: ['Vuex', 'Pinia', 'Zustand'],
      },
      {
        name: 'Backend',
        items: ['Spring Boot', 'FastAPI'],
      },
      {
        name: 'Database',
        items: ['MySQL', 'MyBatis'],
      },
      {
        name: 'DevOps / Deployment',
        items: ['Vercel', 'Git', 'GitLab CI'],
      },
      {
        name: 'AI / API',
        items: ['LangChain', 'openAI API'],
      },
      {
        name: 'Collaboration / Design',
        items: ['Atlassian', 'Slack', 'Figma'],
      },
    ],
  },
};
