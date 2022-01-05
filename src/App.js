import './App.css';
import MainPage from './components/MainPage/';
import { Project, ProjectsContainer } from './components/Projects/';
import Navbar from './components/Navbar/';
import { Menu, Row, Col, Layout, Affix } from 'antd';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useHistory,
  withRouter,
  Redirect,
} from "react-router-dom";

const { SubMenu } = Menu;
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className='layout'>
      <Affix offsetTop={0}>
        <Header style={{backgroundColor: "#1d1d1d", borderBottom: "3px solid #3b82f6"}}>
          <Navbar />
        </Header>
      </Affix>
      <Content>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/projects" element={<ProjectsContainer />} />
        </Routes>
      </Content>
    </Layout>

  );
}

export default App;
