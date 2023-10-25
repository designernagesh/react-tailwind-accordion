import Accordion from './components/Accordion';
import data from './data/data';

function App() {
  return (
    <div className="bg-[#f2f2f2] h-screen flex justify-center items-center">
      <div className="list">
        {
          data.map( (item, i) => {
            return (
              <Accordion key={i} data={item} />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
