// Injects the legacy v2 configuration block globally before files load
const script = document.createElement('script');
script.type = 'text/x-mathjax-config';
script.text = `
  MathJax.Hub.Config({
    MMLorHTML: { prefer: "HTML" },
    menuSettings: { renderer: "CommonHTML" }
  });
`;
(document.head || document.documentElement).appendChild(script);