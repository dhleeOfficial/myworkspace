// fetch fake data
const fetchTabsData = () => {
  return new Promise(resolve => {
    setTimeout(
      () =>
        resolve([
          {
            title: 'HTML',
            content: `HTML(HyperText Markup Language) is the most basic building block of the Web. It describes and defines the content of a webpage along with the basic layout of the webpage. Other technologies besides HTML are generally used to describe a web page's appearance/presentation(CSS) or functionality/ behavior(JavaScript).`
          },
          {
            title: 'CSS',
            content: `Cascading Style Sheets(CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.`
          },
          {
            title: 'JavaScript',
            content: `JavaScript(JS) is a lightweight interpreted or JIT-compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.`
          }
        ]),
      1000
    );
  });
};

// Do something!
document.addEventListener('DOMContentLoaded', async () => {
  let curTabIdx = 0;

  try {
    const tabsData = await fetchTabsData();
    const spinner = document.querySelector('.spinner');
    const tabs = document.querySelector('.tabs');

    spinner.style.display = 'none';
    tabs.style.setProperty('--tabs-length', tabsData.length);

    const nav = tabsData.map(({ title }, idx ) => `
      ${ idx === 0 ? `<nav>` : '' }
        <div class="tab" data-index=${idx}>${title}</div>
      ${ idx === tabsData.length - 1 ? `<span class="glider"></span></nav>` : '' }
      `
    );

    const content = tabsData.map(({ content }, idx ) => 
      `<div class="tab-content ${ idx === curTabIdx ? 'active' : '' }">
        ${content}
      </div>`
    );

    tabs.innerHTML = [ ...nav, ...content ].join('');

  } catch (e) {
    console.error(e);
  }

  const nav = document.querySelector('nav');

  nav.onclick = (() => {
    const glider = document.querySelector('.glider');
    const tabContents = document.querySelectorAll('.tab-content');

    return e => {
      curTabIdx = +e.target.dataset.index;
      glider.style.transform = `translate3d(${curTabIdx * 100}%, 0, 0)`;
  
      tabContents.forEach(( tabContent , idx ) => {
        tabContent.classList.toggle('active', curTabIdx === idx);
      });
    }
  })();
});