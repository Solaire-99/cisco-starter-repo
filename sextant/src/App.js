
import './App.css';

function App() {
    return (
    <div>
        <Banner/>
        <Exhibit/>
    </div>
    );
}
function Banner() {
  return (
    <div class="banner">
        <div class="banner__content">
            <div class="banner__text">
                <strong><p>Project Sextant</p></strong>
            </div>
        </div>
    </div>
    
  );
}
function Exhibit() {
    return (
    <div class="exhibit">
        <div class="heading">
            <h3>Wrapper</h3>
        </div>
    </div>
    );
  }

export default App;
