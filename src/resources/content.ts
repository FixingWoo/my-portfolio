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
    title: '경력',
    experiences: [
      {
        company: 'BD',
        period: '2021 - 현재',
        role: 'Front-end Enginner',
        achievements: [
          ' Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user engagement and 30% faster load times.',
          'Spearheaded the integration of AI tools into design workflows, enabling designers to iterate 50% faster.',
        ],
      },
    ],
  },
  studies: {
    title: '학력',
    institutions: [
      {
        name: '백석대학교',
        department: '정보보호학과',
      },
    ],
  },
};
