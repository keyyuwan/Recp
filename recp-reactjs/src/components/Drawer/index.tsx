import { AiOutlineClose } from "react-icons/ai"
import {
  FaHome,
  FaThLarge,
  FaGlobeAmericas,
  FaUserCircle,
} from "react-icons/fa"
import { useDrawer } from "../../contexts/DrawerContext"
import { Option } from "./Option"
import { Container, Nav } from "./styles"

export function Drawer() {
  const { isOpen, handleClose } = useDrawer()

  return isOpen ? (
    <Container>
      <div className="close-button" onClick={handleClose}>
        <AiOutlineClose size={24} color="#fff" />
      </div>

      <Nav>
        <Option icon={<FaHome size={24} />} title="Home" href="/" />
        <Option
          icon={<FaThLarge size={24} />}
          title="Recipes"
          href="/recipes"
        />
        <Option
          icon={<FaGlobeAmericas size={24} />}
          title="Countries"
          href="/countries"
        />
        <Option
          icon={<FaUserCircle size={24} />}
          title="Profile"
          href="/"
        />
      </Nav>
    </Container>
  ) : null
}
