import { Session, SessionType } from "../../../server/schema/Session";
import speaker from "../../people/nik-graf";

const talk: Session = {
  people: [speaker],
  title: "Secret talk",
  description: "",
  type: SessionType.TALK,
  keywords: [],
};

export default talk;
