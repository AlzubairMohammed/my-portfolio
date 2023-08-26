"use client";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Link from "next/link";

// import { useSelector, useDispatch } from "react-redux";
// import { changeLangAction } from "../../../redux/actions/changeLangAction";

import "./NavBar.module.css";

const NavBar = ({ scrolled }) => {
  // const [lang, setLang] = useState([])

  //   const dispatch = useDispatch();
  //   const lang = useSelector((state) => state.header);
  //   let cl = useSelector((state) => state.changeLang); //cl varaible for change langues shortcut

  //   const changeLang = (e) => {
  //     e.preventDefault();
  //     dispatch(changeLangAction(!cl ? 1 : 0));
  //     console.log("hi");
  //   };

  // useEffect(() => {
  //   setLang(dataLang)
  // }, [dataLang])
  return (
    <>
      <Navbar className="sticky-left" expand="sm">
        <Container>
          <Navbar.Toggle />
          <Navbar.Offcanvas>
            <Offcanvas.Body>
              <Nav className="justfiy-content-center m-auto">
                <Link href="/" className="p-2 px-lg-4 nav-link">
                  Home
                </Link>
                <Link href="/about" className="p-2 px-lg-4 nav-link">
                  About
                </Link>
                <Link href="/projects" className="p-2 px-lg-4 nav-link">
                  Projects
                </Link>
                <Link href="/skills" className="p-2 px-lg-4 nav-link">
                  Skills
                </Link>
                <Link href="/contact" className="p-2 px-lg-4 nav-link">
                  Contact
                </Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
