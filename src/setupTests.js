import "jest-enzyme";
import "jest-styled-components";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

const adapter = new Adapter();

configure({ adapter });
