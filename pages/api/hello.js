// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  // Open Chrome DevTools to step through the debugger!
  // debugger;
  const data = [
    {
      key: 1,
      title: 'Builder Book',
      link: 'https://github.com/async-labs/builderbook',
    },
    {
      key: 2,
      title: 'Nitro',
      link: 'https://github.com/williamluke4/Nitro',
    },
  ];
  res.status(200).json(data);
};
