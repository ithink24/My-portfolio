import { Helmet } from "react-helmet";

import {
  Navbar,
  // Footer,
  Landing,
  About,
  Skills,
  // Testimonials,
  Education,
  Experience,
  Contacts,
  Projects,
  Achievement,
} from "../../components";
import { headerData } from "../../data/headerData";

function Main() {
  return (
    <div>
      <Helmet>
        <title>{headerData.name} - Porfolio</title>
      </Helmet>

      <Navbar />
      <Landing />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Achievement />
      {/* <Testimonials /> */}
      <Contacts />
      {/* <Footer /> */}
    </div>
  );
}

export default Main;
