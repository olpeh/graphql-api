import { Conference } from "../../server/schema/Conference";
import * as locations from "../locations";
import * as people from "../people";
import * as allSponsors from "../sponsors";
import schedules from "./schedules";

const partners = [
  allSponsors.agentconf,
  // allSponsors.halfstack,
  // allSponsors.jscamp,
  allSponsors.jskongress,
  // allSponsors.koodiasuomesta,
  // allSponsors.reasonconf,
  // allSponsors.reactindia,
  allSponsors.reactnewyork,
  allSponsors.reactnorway,
  allSponsors.survivejs,
  // allSponsors.typeof,
  // allSponsors.zapier,
  // allSponsors.stickermule,
  // allSponsors.reactalicante,
  allSponsors.reactdayberlin,
  allSponsors.reactjsgirls,
  // allSponsors.reactnativeeu,
  // allSponsors.reactjsday,
  allSponsors.reactsummit,
  // allSponsors.webexpo,
  // allSponsors.techEvents,
];
const goldSponsors = [
  allSponsors.gofore,
  allSponsors.futurice,
  allSponsors.smartly,
];
const silverSponsors = [
  allSponsors.valamis,
  allSponsors.elisa,
  allSponsors.alma,
  allSponsors.columbiaroad,
];
const bronzeSponsors = [
  allSponsors.quentic,
  allSponsors.vincit,
  allSponsors.digia,
  allSponsors.wunder,
  allSponsors.cybercom,
  allSponsors.netum,
];
const sponsors = partners.concat(goldSponsors, silverSponsors, bronzeSponsors);

const conference: Conference = {
  id: "react-finland-2020",
  series: "React Finland",
  name: "React Finland 2020",
  organizer: allSponsors.reactFinland,
  slogan: "Learn More about React, Explore Finland",
  year: "2020",
  startDate: "2020-05-25",
  endDate: "2020-05-29",
  websiteUrl: "https://react-finland.fi/",
  // TODO: Resolve locations based on data
  locations: [locations.paasitorni],
  mcs: [
    /*people.janiEvakallio, people.saraVieira*/
  ],
  organizers: [
    people.aleksiPousar,
    people.eemeliAro,
    people.harriMaatta,
    people.juhoVepsalainen,
    people.mikhailNovikov,
    people.samuliHakoniemi,
    people.toniRistola,
    people.tuuliTiilikainen,
  ],
  schedules,
  sponsors,
  partners,
  goldSponsors,
  silverSponsors,
  bronzeSponsors,
};

export default conference;
