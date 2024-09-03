import { QueryTab } from "@geovistory/design-system-web/loader";
import { ProjectNavbarProps } from "../components/layouts/ProjectNavbar.component";

export interface ProjectParams {
  // if true, the project is listed in geovistory.org/
  featured: boolean;
  // if true, the project is listed in geovistory.org/projects
  listed: boolean;

  // preferred classe in entity explorer
  preferredClasses: string[];

  geovID: number;
  geovName: string;

  teiURL: string;
  sparqlURL: string;

  fullName: string;
  shortName: string;
  description: string;

  hasPage: boolean;

  sparqlLinkEnabled: boolean;
  teiLinkEnabled: boolean;
  searchLinkEnabled: boolean;
  ontoExplorerLinkEnabled: boolean;
  sparklisLinkEnabled: boolean;

  headOgImage: string;

  sparqlQueryTabs?: QueryTab[];
}

export const projectsParams: Array<ProjectParams> = [
  // Academic Careers
  {
    geovID: 1483135,
    geovName: "Academic Education & Careers",

    preferredClasses: ["c21", "c859", "c861", "c860", "c850", "c68"],

    featured: true,
    listed: true,

    teiURL: "",
    sparqlURL: "",

    fullName: "Academic Education & Careers",
    shortName: "Academic Education & Careers",
    description:
      "An open collaborative project of the Geovistory community dedicated to the history of science and universities.",

    hasPage: true,
    sparqlLinkEnabled: true,
    searchLinkEnabled: true,
    ontoExplorerLinkEnabled: true,
    sparklisLinkEnabled: true,
    teiLinkEnabled: false,

    headOgImage: "/socialimage/academic-careers.jpg",
    sparqlQueryTabs: [
      {
        name: "Birth Places",
        sparqlEndpoint: "https://sparql.geovistory.org/api_v1_project_1483135",
        selectedPlugin: "mapCircles",
        query: `PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ontome: <https://ontome.net/ontology/>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

SELECT ?label ?long ?lat (count(?sv) * 0.5 as ?radius) (count(?sv) as ?number) ("Birth place" as ?type) ?link
WHERE {

    # Geographical Place -had presence-> Presence -was at-> Place (lat/long)
    ?s ontome:p147i/ontome:p148 ?place.

    # Geographical Place -label-> label
    ?s rdfs:label ?label.

    # Geographical Place -is place of-> Birth
    ?s ontome:p7i ?sv.

    # Extract lat and long from WKT
    bind(replace(str(?place), '<http://www.opengis.net/def/crs/EPSG/0/4326>', "", "i") as ?rep)
    bind(xsd:float(replace(str(?rep), "^[^0-9\\\\.-]*([-]?[0-9\\\\.]+) .*$", "$1" )) as ?long )
    bind(xsd:float(replace( str(?rep), "^.* ([-]?[0-9\\\\.]+)[^0-9\\\\.]*$", "$1" )) as ?lat )

    # Append the project query param to the URI
    bind(concat(str(?s), "?p=1483135") as ?link )
}
GROUP BY ?label ?long ?lat ?type ?link
                `,
      },
      {
        name: "Selection of triples",
        sparqlEndpoint: `https://sparql.geovistory.org/api_v1_project_1483135`,
        selectedPlugin: "table",
        query: `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX xml: <http://www.w3.org/XML/1998/namespace>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX geo: <http://www.opengis.net/ont/geosparql#>
PREFIX time: <http://www.w3.org/2006/time#>
PREFIX ontome: <https://ontome.net/ontology/>
PREFIX geov: <http://geovistory.org/resource/>

SELECT ?subject ?predicate ?object
WHERE {
?subject ?predicate ?object .
}
LIMIT 10`,
      },
    ],
  },
  // AMPI
  {
    geovID: 924033,
    geovName: "AMPI",

    preferredClasses: ["c21", "c219", "c635", "c785", "c633"],

    featured: true,
    listed: true,

    teiURL: "",
    sparqlURL: "",

    fullName: "Tagebücher Anna Maria Preiswerk-Iselin",
    shortName: "Tagebücher Anna Maria Preiswerk-Iselin",
    description:
      "Digitale Edition der Tagebücher der Anna Maria Preiswerk-Iselin (1758-1840).",

    hasPage: true,
    sparqlLinkEnabled: true,
    searchLinkEnabled: true,
    ontoExplorerLinkEnabled: true,
    sparklisLinkEnabled: true,
    teiLinkEnabled: true,

    headOgImage: "/socialimage/ampi.jpg",
  },

  // Processetti
  {
    geovID: 591,
    geovName: "Processetti",

    preferredClasses: ["c21", "c363", "c636"],

    featured: true,
    listed: true,

    teiURL: "",
    sparqlURL: "",

    fullName: "ANR Processetti",
    shortName: "ANR Processetti",
    description:
      "Les Processetti : Migration et mariage à Venise au 16ème/17ème siècle.",

    hasPage: true,
    sparqlLinkEnabled: true,
    teiLinkEnabled: false,
    searchLinkEnabled: false,
    ontoExplorerLinkEnabled: false,
    sparklisLinkEnabled: false,

    headOgImage: "/socialimage/processetti.jpg",
  },

  // Maritime History
  {
    geovID: 84760,
    geovName: "Maritime History",

    preferredClasses: ["c523", "c21", "c363", "c522", "c529"],

    featured: true,
    listed: true,

    teiURL: "",
    sparqlURL: "",

    fullName: "Maritime History",
    shortName: "Maritime History",
    description:
      "Historical information about the Dutch East India Company, ready to explore and re-use at your hand.",

    hasPage: true,
    sparqlLinkEnabled: true,
    searchLinkEnabled: true,
    ontoExplorerLinkEnabled: true,
    sparklisLinkEnabled: true,
    teiLinkEnabled: false,

    headOgImage: "/socialimage/maritime-history.jpg",
    sparqlQueryTabs: [
      {
        name: "Ship Voyages Map",
        sparqlEndpoint: "https://sparql.geovistory.org/api_v1_project_84760",
        selectedPlugin: "mapCircles",
        query: `PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ontome: <https://ontome.net/ontology/>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

SELECT *
WHERE {
    {
    SELECT ?label ?long ?lat (count(?sv) * 0.5 as ?radius) (count(?sv) as ?number) ("Arrival Place" as ?type) ?link
    WHERE {

    # Geographical Place -had presence-> Presence -was at-> Place (lat/long)
    ?s ontome:p147i/ontome:p148 ?place.

    # Geographical Place -label-> label
    ?s rdfs:label ?label.

    # Geographical Place -is arrival place of-> Ship Voyage
    ?s <https://ontome.net/ontology/p1336i> ?sv.

    # Extract lat and long from WKT
    bind(replace(str(?place), '<http://www.opengis.net/def/crs/EPSG/0/4326>', "", "i") as ?rep)
    bind(xsd:float(replace(str(?rep), "^[^0-9\\\\.-]*([-]?[0-9\\\\.]+) .*$", "$1" )) as ?long )
    bind(xsd:float(replace( str(?rep), "^.* ([-]?[0-9\\\\.]+)[^0-9\\\\.]*$", "$1" )) as ?lat )

    # Append the project query param to the URI
    bind(concat(str(?s), "?p=84760") as ?link )
    }
    GROUP BY ?label ?long ?lat ?type ?link
    }
    UNION
    {
    SELECT ?label ?long ?lat (count(?sv) * 0.5 as ?radius) (count(?sv) as ?number) ("Departure Place" as ?type) ?link
    WHERE {

    # Geographical Place -had presence-> Presence -was at-> Place (lat/long)
    ?s ontome:p147i/ontome:p148 ?place.

    # Geographical Place -label-> label
    ?s rdfs:label ?label.

    # Geographical Place -is arrival place of-> Ship Voyage
    ?s <https://ontome.net/ontology/p1335i> ?sv.

    # Extract lat and long from WKT
    bind(replace(str(?place), '<http://www.opengis.net/def/crs/EPSG/0/4326>', "", "i") as ?rep)
    bind(xsd:float(replace(str(?rep), "^[^0-9\\\\.-]*([-]?[0-9\\\\.]+) .*$", "$1" )) as ?long )
    bind(xsd:float(replace( str(?rep), "^.* ([-]?[0-9\\\\.]+)[^0-9\\\\.]*$", "$1" )) as ?lat )

    # Append the project query param to the URI
    bind(concat(str(?s), "?p=84760") as ?link )
    }
    GROUP BY ?label ?long ?lat ?type ?link
    }
}`,
      },
      {
        name: "Ship Voyages Timeline",
        sparqlEndpoint: "https://sparql.geovistory.org/api_v1_project_84760",
        selectedPlugin: "timeline",
        query: `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX xml: <http://www.w3.org/XML/1998/namespace>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX geo: <http://www.opengis.net/ont/geosparql#>
PREFIX time: <http://www.w3.org/2006/time#>
PREFIX ontome: <https://ontome.net/ontology/>
PREFIX geov: <http://geovistory.org/resource/>

SELECT (concat(str(?e), "?p=84760") as ?entityLink) (MIN(?date) as ?startDate) (MAX(?date) as ?endDate) (SAMPLE(?l) as ?entityLabel) ?entityClassLabel
WHERE {
    ### Definition of the events we want to display on a timeline
    
    # Geo-Place "Texel NL" -> is departure place of -> ship voyage
    geov:i209502 ^ontome:p1335 ?e .
    # event -> is a -> ship voyages
    ?e a ontome:c523 .
    # Ship voyage -> class label
    ontome:c523 rdfs:label ?entityClassLabel .
    
    ### Join temproal information for the time line ###

    # event -> has -> time span
    ?e ontome:p4 ?timespan.
    # time span -> timeprop -> date time description
    ?timespan ontome:p71|ontome:p72|ontome:p150|ontome:p151|ontome:p152|ontome:p153 ?dtd.
    # date time description -> year;month;day
    ?dtd time:year ?y ; time:month ?m  ; time:day ?d .
    FILTER regex(str(?y), '^-') # necessary because of https://github.com/geovistory/toolbox-streams/issues/124
    # parse to xsd:date
    bind(xsd:date(concat(replace(str(?y), "^-", "" ), replace(str(?m), "^-", "" ),replace(str(?d), "^--", "" ))) as ?date)
    # event -> has -> label
    ?e rdfs:label ?l .
}
GROUP BY ?e ?entityClassLabel
LIMIT 10`,
      },
      {
        name: "Selection of triples",
        sparqlEndpoint: `https://sparql.geovistory.org/api_v1_project_1483135`,
        selectedPlugin: "table",
        query: `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX xml: <http://www.w3.org/XML/1998/namespace>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX geo: <http://www.opengis.net/ont/geosparql#>
PREFIX time: <http://www.w3.org/2006/time#>
PREFIX ontome: <https://ontome.net/ontology/>
PREFIX geov: <http://geovistory.org/resource/>

SELECT ?subject ?predicate ?object
WHERE {
    ?subject ?predicate ?object .
}
LIMIT 10`,
      },
    ],
  },

  // // ANR Globalvat
  // {
  //     geovID: -1,
  //     geovName: 'GLOBALVAT',

  //     preferredClasses: [],

  //     featured: false,
  // listed: false,

  //     teiURL: '',
  //     sparqlURL: '',

  //     fullName: 'ANR Globalvat',
  //     shortName: 'ANR Globalvat',
  //     description: 'Reconstruire les sociétés et la personne humaine (1939-58) : L’apport des archives vaticanes.',

  //     hasPage: false,
  //     sparqlLinkEnabled: false,
  //     searchLinkEnabled: false,
  //     ontoExplorerLinkEnabled: false,
  //     sparklisLinkEnabled: false,
  //     teiLinkEnabled: false,
  //     headOgImage: '/socialimage/ampi.jpg'

  // },

  // EuroClimHist
  {
    geovID: 6529336,
    geovName: "EuroClimHist",

    preferredClasses: [],

    featured: false,
    listed: false,

    teiURL: "",
    sparqlURL: "",

    fullName: "Euro-Climhist Database",
    shortName: "Euro-Climhist Database",
    description:
      "The historical climate database Euro-Climhist contains a unique set of data on observations and measurement series of weather phenomena.",

    hasPage: true,
    sparqlLinkEnabled: true,
    searchLinkEnabled: true,
    ontoExplorerLinkEnabled: true,
    sparklisLinkEnabled: true,
    teiLinkEnabled: false,

    headOgImage: "/socialimage/euroclimhist.jpg",
  },

  // EHESS
  {
    geovID: 3354801,
    geovName: "Roma's deportation to Transnistria, 1942-1944",

    preferredClasses: ["c363", "c21", "c68", "c636"],

    featured: true,
    listed: true,

    teiURL: "",
    sparqlURL: "",

    fullName: "Roma's deportation to Transnistria, 1942-1944",
    shortName: "Roma's deportation",
    description: "Individual trajectories, and collective fates. ",

    hasPage: true,
    sparqlLinkEnabled: true,
    searchLinkEnabled: true,
    ontoExplorerLinkEnabled: true,
    sparklisLinkEnabled: true,
    teiLinkEnabled: false,

    headOgImage: "/socialimage/romas-deportation.jpg",
  },
  // Softpowarts
  {
    geovID: 3350169,
    geovName: "Softpowarts",

    preferredClasses: ["c363", "c21", "c870", "c247", "c698", "c68"],

    featured: false,
    listed: true,

    teiURL: "",
    sparqlURL: "",

    fullName: "Softpowarts",
    shortName: "Softpowarts",
    description:
      "Le soft power sud-américain : l'usage politique de la circulation des arts de la scène au XXe siècle",

    hasPage: true,
    sparqlLinkEnabled: true,
    searchLinkEnabled: true,
    ontoExplorerLinkEnabled: true,
    sparklisLinkEnabled: true,
    teiLinkEnabled: false,

    headOgImage: "/socialimage/softpowarts.jpg",
  },

  // Roman Senate
  {
    geovID: 941447,
    geovName: "The Roman senate under the tetrarchs",

    preferredClasses: ["c21", "c68", "c363"],

    featured: false,
    listed: true,

    teiURL: "",
    sparqlURL: "",

    fullName: "The Roman senate under the tetrarchs",
    shortName: "The Roman senate under the tetrarchs",
    description:
      "A prosopographical collection of members of the senatorial order from 284-306 CE",

    hasPage: true,
    sparqlLinkEnabled: true,
    searchLinkEnabled: true,
    ontoExplorerLinkEnabled: true,
    sparklisLinkEnabled: true,
    teiLinkEnabled: false,

    headOgImage: "/socialimage/roman-senate.jpg",
  },
  // Switzerland & Beyond
  {
    geovID: 153,
    geovName: "Switzerland and Beyond",

    preferredClasses: ["c363", "c21"],

    featured: true,
    listed: true,

    teiURL: "",
    sparqlURL: "",

    fullName: "Switzerland and Beyond",
    shortName: "Switzerland and Beyond",
    description: "Linking Historical People, Places, and Organizations.",

    hasPage: true,
    sparqlLinkEnabled: true,
    searchLinkEnabled: true,
    ontoExplorerLinkEnabled: true,
    sparklisLinkEnabled: true,
    teiLinkEnabled: false,

    headOgImage: "/socialimage/switzerland-and-beyond.jpeg",
  },
  // Student Internationalism
  {
    geovID: 11172552,
    geovName: "From Student Internationalism to Erasmus",

    preferredClasses: [],

    featured: false,
    listed: true,

    teiURL: "",
    sparqlURL: "",

    fullName: "From Student Internationalism to Erasmus",
    shortName: "From Student Internationalism to Erasmus",
    description: "From Student Internationalism to Erasmus",

    hasPage: true,
    sparqlLinkEnabled: false,
    searchLinkEnabled: false,
    ontoExplorerLinkEnabled: false,
    sparklisLinkEnabled: false,
    teiLinkEnabled: false,

    headOgImage: "/socialimage/student-internationalism.jpg",
  },

  // Textile Worlds
  {
    geovID: 15308717,
    geovName: "Textile Worlds",

    preferredClasses: [],

    featured: false,
    listed: true,

    teiURL: "",
    sparqlURL: "",

    fullName:
      "Textile Worlds: women, men and textile production in modern and contemporary times",
    shortName: "Textile Worlds",
    description:
      "Univers Textiles : Femmes, hommes et productions textiles à l’époque moderne et contemporaine",

    hasPage: true,
    sparqlLinkEnabled: true,
    searchLinkEnabled: true,
    ontoExplorerLinkEnabled: true,
    sparklisLinkEnabled: true,
    teiLinkEnabled: false,

    headOgImage: "/socialimage/textile-worlds.jpg",
  },

  // Urban Biographies
  {
    geovID: 6619613,
    geovName: "Urban Biographies of the Roman and Late Antique Worlds",

    preferredClasses: [],

    featured: false,
    listed: true,

    teiURL: "",
    sparqlURL: "",

    fullName: "Urban Biographies of the Roman and Late Antique Worlds",
    shortName: "Urban Biographies of the Roman and Late Antique Worlds",
    description: "Urban Biographies of the Roman and Late Antique Worlds",

    hasPage: true,
    sparqlLinkEnabled: false,
    searchLinkEnabled: false,
    ontoExplorerLinkEnabled: false,
    sparklisLinkEnabled: false,
    teiLinkEnabled: false,

    headOgImage: "/socialimage/urban-biographies.jpg",
  },

  // Enfants du placard
  {
    geovID: 1458522,
    geovName: "Les « enfants du placard »",

    preferredClasses: [],

    featured: false,
    listed: true,

    teiURL: "",
    sparqlURL: "",

    fullName: "Les « enfants du placard »",
    shortName: "Les « enfants du placard »",
    description: "Les « enfants du placard »",

    hasPage: true,
    sparqlLinkEnabled: false,
    searchLinkEnabled: false,
    ontoExplorerLinkEnabled: false,
    sparklisLinkEnabled: false,
    teiLinkEnabled: false,

    headOgImage: "/socialimage/enfants-du-placard.jpg",
  },
  // Basel non-protestants
  {
    geovID: 1719422,
    geovName: "Jüdische & katholische Zentren Basels",

    preferredClasses: ["c363", "c21"],

    featured: false,
    listed: true,

    teiURL: "",
    sparqlURL: "",

    fullName: "Jüdische & katholische Zentren Basels",
    shortName: "Jüdische & katholische Zentren Basels",
    description: "Jüdische & katholische Zentren Basels. 1850 – 1914",

    hasPage: true,
    sparqlLinkEnabled: true,
    searchLinkEnabled: true,
    ontoExplorerLinkEnabled: true,
    sparklisLinkEnabled: true,
    teiLinkEnabled: false,

    headOgImage: "/socialimage/basel-non-protestants.jpg",
  },
];

export const projectParamsToNavbarProps = (
  params: ProjectParams
): ProjectNavbarProps => ({
  projectId: params.geovID,
  title: params.shortName,
  teiLinkEnabled: params.teiLinkEnabled,
  sparqlLinkEnabled: params.sparqlLinkEnabled,
  ontoExplorerLinkEnabled: params.ontoExplorerLinkEnabled,
  searchLinkEnabled: params.searchLinkEnabled,
  sparklisLinkEnabled: params.sparklisLinkEnabled,
});
