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
import Skills from './components/Skills/Skills';

const { SubMenu } = Menu;
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout style={{height: "100vh"}}>
      <Affix offsetTop={0}>
        <Header style={{backgroundColor: "#1d1d1d", borderBottom: "3px solid #3b82f6"}}>
          <Navbar />
        </Header>
      </Affix>
      <Content style={{height: "100%", backgroundColor: "#818589"}}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/projects" element={<ProjectsContainer />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </Content>
    </Layout>

  );
}

export default App;
