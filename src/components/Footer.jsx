import "../styles/footer.scss";
import { SiGithub } from "react-icons/si";

function Footer() {
  return (
    <footer>
      <a className="git-bottom" href="https://github.com/lichaa824">
        Github <SiGithub />
      </a>
    </footer>
  );
}

export default Footer;
