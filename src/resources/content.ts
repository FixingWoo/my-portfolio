export const person = {
  location: Intl.DateTimeFormat().resolvedOptions().timeZone,
  name: '조정우',
  role: 'Frontend Engineer',
  email: 'fixingwoo@gmail.com',
  image: '/images/me.jpeg',
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
  avatar: {
    display: true,
  },
  title: `About - ${person.name}`,
  description:
    '경험 많은 프론트엔드 엔지니어로, React와 Vue를 활용해 재사용 가능한 모듈 개발 및 웹 성능 최적화에 강점이 있습니다. (주)BD와 아사삭에서 다양한 프로젝트를 수행했으며, SCSS와 BEM으로 반응형 웹 퍼블리싱도 담당했습니다.',
  intro: {
    title: '자기소개',
    description:
      '4년간 웹 프론트엔드 엔지니어로 일하며 반복되는 UI를 체계화하고 개선하는 데 보람을 느껴왔습니다. 더 나은 사용자 경험과 개발 생산성을 고민하며 문제 해결에 즐거움을 느낍니다. 코드 리팩토링과 공통화에 관심이 많고, 협업을 통해 더 나은 결과를 만드는 것을 중요하게 생각합니다.',
  },
  work: {
    display: true,
    title: '업무경험',
    experiences: [
      {
        company: '(주)BD',
        period: '2021 - 현재',
        role: 'Front-end Enginner / AX개발팀',
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
          '픽업/배송 주문 확인 서비스 "아사삭 스토어 어드민" 개발',
          '공통 함수 및 유틸리티 모듈 구현',
        ],
      },
    ],
  },
  projects: {
    display: false,
    title: '프로젝트',
    items: [
      {
        company: '(주)BD',
      },
    ],
  },
  studies: {
    display: true,
    title: '학력',
    institutions: [
      {
        name: '백석대학교',
        period: '2015.03 ~ 2021.02',
        department: '정보보호학과 학사 졸업',
      },
    ],
  },
  technical: {
    display: true,
    title: '보유 기술',
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
  certifications: {
    display: true,
    title: '자격증',
    items: [
      {
        name: 'Microsoft Azure AI 설계 및 구현 (AI-102)',
        institution: 'Microsoft',
        date: '2025.05',
      },
    ],
  },
};

export const work = {
  title: `Work - ${person.name}`,
  description: '준비 중입니다.',
};

export const blog = {
  title: `Blog -  ${person.name}`,
  description: '준비 중입니다.',
};
