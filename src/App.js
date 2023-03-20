import './App.css';
import MainPage from './components/MainPage/';
import {ProjectsContainer } from './components/Projects/';
import Resume from "./components/Resume/";
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
import ProjectDetails from './components/Projects/ProjectDetails';

const { SubMenu } = Menu;
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout style={{minHeight: "100vh", height: "100%", backgroundColor: "#4A525A"}}>
      <Affix offsetTop={0}>
        <Header style={{backgroundColor: "#24272B", borderBottom: "3px solid #004BA8"}}>
          <Navbar />
        </Header>
      </Affix>
      <Content style={{backgroundColor: "#4A525A"}}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/projects" element={<ProjectsContainer />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Content>
    </Layout>

  );
}

export default App;
