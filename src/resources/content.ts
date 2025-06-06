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
