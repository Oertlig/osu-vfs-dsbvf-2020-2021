import NavBar from './components/NavBar';
import AccelerometerGraph from './components/AccelerometerGraph';
import styled from '@emotion/styled/macro';

const BackGround = styled.div`
	background-color: rgba(255, 252, 252, 0.8);
  color: black;
`;

const PageContents = styled.div`
  margin: 20px;
`;

function App() {
  return (
    <div>
      <NavBar />
      <PageContents>
        <AccelerometerGraph />
      </PageContents>
    </div>
  );
}

export default App;
