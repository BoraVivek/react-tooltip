// Importing the tooltip Component
import Tooltip from './components/Tooltip';

// Importing the styles
import './styles/App.css';

function App() {
  return (
    <div className="App">
      {/* Heading of Application */}
      <div>
        <div className="heading">
          Welcome to the Tooltip Skill Test Project
          <span className='name'>
            By Vivek Bora
          </span>
        </div>
      </div>

      {/* Tooltip Container - Used to display various Tooltips */}
      <div className="tooltips-container">

        {/* Tooltip Bottom */}
        <div>
          <Tooltip position="bottom" text="This is bottom tooltip">
            Hover to see tooltip bottom
          </Tooltip>
        </div>

        {/* Tooltip Left */}
        <div>
          <Tooltip position="left" text="This is left tooltip">
            Hover to see tooltip left
          </Tooltip>
        </div>

        {/* Tooltip Top */}
        <div>
          <Tooltip position="top" text="This is top tooltip">
            Hover to see tooltip top
          </Tooltip>
        </div>

        {/* Tooltip Right */}
        <div>
          <Tooltip position="right" text="This is right tooltip">
            Hover to see tooltip right
          </Tooltip>
        </div>
      </div>

      {/* Default Tooltip */}
      <div style={{ marginTop: 20 }}>
        <Tooltip>
          This is default Tooltip, if No Position or Text is provided to Tooltip Component.
        </Tooltip>
      </div>
    </div>
  );
}

export default App;
