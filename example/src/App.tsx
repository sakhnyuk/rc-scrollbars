import { Scrollbars } from 'rc-scrollbars';
import ColoredScrollbars from './components/ColoredScrollbars/ColoredScrollbars';
import ShadowScrollbars from './components/ShadowScrollbars/ShadowScrollbars';
import SpringScrollbarsExample from './components/SpringScrollbars/SpringScrollbarsExample';
import { Lorem } from 'components/Lorem';

function App() {
  return (
    <div className="container max-w-4xl px-4 mx-auto">
      <header className="flex justify-between items-center h-16">
        <h1 className="font-bold">rc-scrollbars</h1>

        <a href="https://github.com/sakhnyuk/rc-scrollbars" target="_blank" rel="noreferrer">
          Github
        </a>
      </header>

      <div className="pt-4">
        <h3 className="font-bold">Features</h3>
        <ul className="list-inside list-disc">
          <li>lightweight scrollbars made of 100% react goodness</li>
          <li>frictionless native browser scrolling</li>
          <li>native scrollbars for mobile devices</li>
          <li>fully customizable</li>
          <li>
            <code>requestAnimationFrame</code> for 60fps
          </li>
          <li>no extra stylesheets</li>
          <li>IE9+ support</li>
        </ul>
      </div>

      <div className="pt-4">
        <a
          className="font-bold hover:underline"
          href="https://github.com/sakhnyuk/rc-scrollbars"
          target="_blank"
          rel="noreferrer"
        >
          Documentation and examples on GitHub
        </a>
      </div>

      <div className="pt-8">
        <h2>Examples</h2>
      </div>

      <div className="flex flex-wrap pt-4 space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="bg-white p-6 w-full sm:flex-1 shadow-md">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="font-bold">Default style</h3>
            </div>

            <span className="text-xs text-gray-600">(with autoHide=true)</span>

            {/* <a
              href="https://github.com/sakhnyuk/rc-scrollbars/tree/master/examples/simple/components/DefaultScrollbars"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-bold hover:underline"
            >
              View source code
            </a> */}
          </div>

          <Scrollbars style={{ height: 300 }} autoHide>
            <Lorem />
          </Scrollbars>
        </div>

        <div className="bg-white p-6 w-full sm:flex-1 shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold">Custom style</h3>

            {/* <a
              href="https://github.com/sakhnyuk/rc-scrollbars/tree/master/examples/simple/components/ColoredScrollbars"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-bold hover:underline"
            >
              View source code
            </a> */}
          </div>

          <ColoredScrollbars style={{ height: 300 }}>
            <Lorem />
          </ColoredScrollbars>
        </div>
      </div>

      <div className="flex flex-wrap pt-4 space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="bg-white p-6 w-full sm:flex-1 shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold">Spring scroll</h3>

            {/* <a
              href="https://github.com/sakhnyuk/rc-scrollbars/tree/master/examples/simple/components/SpringScrollbars"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-bold hover:underline"
            >
              View source code
            </a> */}
          </div>

          <SpringScrollbarsExample />
        </div>

        <div className="bg-white p-6 w-full sm:flex-1 shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold">Shadow scrollbars</h3>

            {/* <a
              href="https://github.com/sakhnyuk/rc-scrollbars/tree/master/examples/simple/components/ShadowScrollbars"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-bold hover:underline"
            >
              View source code
            </a> */}
          </div>

          <ShadowScrollbars style={{ height: 400 }}>
            <Lorem />
          </ShadowScrollbars>
        </div>
      </div>

      <div className="text-center my-6">
        <h5>
          <a
            href="https://github.com/sakhnyuk/rc-scrollbars"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            rc-scrollbars
          </a>
        </h5>

        <a href="https://github.com/sakhnyuk" target="_blank" rel="noreferrer">
          Mikhail Sakhniuk
        </a>
      </div>
    </div>
  );
}

export default App;
