import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { Person } from "../../../components/elements/Person.component";
import { ProjectPageLayout } from "../../../components/layouts/ProjectPageLayout.component";
import { ProjectPageProps } from "../../../pages/project/[geov_id]";
import styles from "./textile-worlds.module.css";
import bannerImg from "../../../public/textile-worlds.jpg";
import { LarhraLogo } from "../../../components/logos/LarhraLogo";
import { KleiolabLogo } from "../../../components/logos/KleiolabLogo";
import React from "react";

const TextileWorlds_component: NextPage<ProjectPageProps> = (props) => {
  const router = useRouter();

  return (
    <div className={styles.theme}>
      <ProjectPageLayout {...props.projectPageLayout}>
        <div className={styles.bannerContainer}>
          <Image
            className={styles.bannerImage}
            src={bannerImg}
            placeholder="blur"
            alt="TextileWorlds"
            layout="fill"
            objectFit={"cover"}
          />
          <ion-searchbar
            class="restricted-width"
            color="light"
            enterkeyhint="enter"
            placeholder="Cherchez et tapez entrée"
            ref={(el: any) => {
              setTimeout(() => {
                el?.getInputElement().then(() => {
                  console.log("focus on ", el);
                  el?.setFocus();
                });
              }, 300);
              el?.addEventListener("keypress", (event: KeyboardEvent) => {
                if (event.key === "Enter") {
                  el?.getInputElement().then((inputEl: HTMLInputElement) => {
                    console.log(inputEl?.value);
                    router.push({
                      pathname: `${props.params.geovID}/search`,
                      query: { term: inputEl?.value },
                    });
                  });
                }
              });
            }}
          ></ion-searchbar>
          <h1 className={styles.title}>
            <div className={styles.titleLine1}>Textile Worlds</div>
          </h1>
        </div>
        <ion-grid fixed class="ion-padding">
          <p className="lead">
            Univers Textiles : Femmes, hommes et productions textiles à
            l&apos;époque moderne et contemporaine
          </p>{" "}
          <p>
            Ce projet de recherche concerne les travailleurs de l&apos;industrie
            textile lyonnaise dans le première moitié du XIXe siècle. Les
            données, extraitent de documents de recensement, d'actes de mariages
            et d'indicateurs professionnels, rendent compte des différents
            profils dans ce secteur, des liens socio-professionnels entre les
            acteurs, de la polarisation des quartiers et de la diversité des
            lieux de naissance.
          </p>
          <p>
            <ion-button href={props.params.geovID + "/search"}>
              Accéder aux données
            </ion-button>
          </p>
          <h3>
            Projets de recherche associés à <i>Univers Textiles</i>
          </h3>
          <h4>TimeUS</h4>
          <p>
            Le programme{" "}
            <i>
              <a href="https://larhra.fr/programmes-et-projets/anr-time-us/">
                TimeUS - ANR Rémunérations et budgets-temps dans le textile en
                France de la fin du XVIIe siècle à la veille de la Première
                Guerre mondiale
              </a>
            </i>{" "}
            a pour but de reconstituer les rémunérations et les budgets temps
            des travailleuses et des travailleurs du textile dans quatre villes
            industrielles françaises (Lille, Paris, Lyon, Marseille) dans une
            perspective européenne et de longue durée. En réunissant en une
            seule équipe pluridisciplinaire des historiens des techniques, de
            l&apos;économie et du travail, des spécialistes du traitement
            automatique des langues et des sociologues spécialistes des budgets
            familiaux, il vise à donner des clés pour comprendre le{" "}
            <i>gender gap</i> en analysant les mutations du travail et la
            répartition du temps et des tâches au sein des ménages pendant la
            première industrialisation.
          </p>
          <h4>Femmes industrieuses</h4>
          <p>
            Le projet{" "}
            <i>
              <a href="https://larhra.fr/actualites/6816/">
                Femmes industrieuses. Les travailleuses qualifiées de
                l&apos;industrie textile dans Europe méditerranéenne, début du
                XIXe siècle-début du XXe siècle
              </a>
            </i>{" "}
            s&apos;inscrit au LARHRA dans les axes Genre et sociétés et
            Régulations.
          </p>
          <h4>DIRIVA</h4>
          <p>
            Le projet{" "}
            <i>
              <a href="https://larhra.fr/programmes-et-projets/diriva-anr-diriger-une-entreprise-xviiie-xxie-siecles-la-valeur-du-genre/">
                DIRIVA – ANR Diriger une « entreprise » (XVIIIe-XXIe siècles) :
                la valeur du genre
              </a>
            </i>{" "}
            cherche à documenter, sur une longue durée (XVIIIe-XXIe siècles), la
            place et le rôle des femmes en France dans les activités de
            « direction d&apos;entreprise » dans des espaces économiques
            aujourd&apos;hui féminisés (textile et habillement ; cosmétiques et
            esthétique ; finance et banque), à partir d&apos;une analyse de la
            division genrée du travail de direction d&apos;entreprise. Il part
            du constat que malgré la progression de la mixité au travail et la
            féminisation de nombreuses activités professionnelles, le monde des
            dirigeants économiques, qu&apos;il s&apos;agisse des dirigeants
            salariés, des administrateurs ou des chefs de petites ou grandes
            entreprises, reste très majoritairement masculin. La perspective de
            longue durée vise à étudier la variation historique des normes et
            régimes de genre et de leurs effets, dans le cadre de contextes
            économiques et juridiques changeants. En articulant sociologie
            économique, sociologie des élites, sociologie du travail de
            direction prises sous l&apos;angle de l&apos;histoire des
            entreprises, de l&apos;histoire du droit (droit des affaires et
            droit civil) et de l&apos;histoire du genre, il contribue de façon
            originale au renouveau de l&apos;histoire de la présence des femmes
            dans les fonctions dirigeantes des entreprises et au réexamen des
            inégalités de sexe dans le contrôle du capital et la prise de
            décision.
          </p>
          <h4>Petites industries</h4>
          <p>
            Le programme{" "}
            <i>
              <a href="https://larhra.fr/programmes-et-projets/petites-industries/">
                Petites industries. Travail des femmes et diversité des chemins
                de l&apos;industrialisation dans l&apos;Europe méditerranéenne
              </a>
            </i>{" "}
            a pour but de contribuer à la réflexion sur la centralité de la
            dimension genrée dans les analyses mobilisant le modèle de la
            variété du capitalisme et de la diversité des voies de
            l&apos;industrialisation. Marqué par une approche ouverte à la
            comparaison et à la dimension transnationale des phénomènes
            d&apos;industrialisation au sein de l&apos;Europe méditerranéenne,
            il s&apos;inscrit dans le contrat quinquennal de l&apos;Ecole
            française d&apos;Athènes (axe « La fabrique de la variation
            culturelle » de la section Moderne et contemporaine et axe
            transversal « Connexions et interactions : une ‘histoire mondiale’
            de la Grèce).
          </p>
          <h3>
            Acteurs du projet <i>Univers Textiles</i>
          </h3>
          <h4>Responsables pédagogiques</h4>
          <p>
            <ion-row>
              <ion-col size="6">
                <Person
                  name="Manuela Martini"
                  description="Enseignante-chercheuse à l'Université Lumière Lyon 2, LARHRA"
                />
              </ion-col>
              <ion-col size="6">
                <Person
                  name="Pierre Vernus"
                  description="Enseignant-chercheur à l'Université Lumière Lyon 2, LARHRA"
                />
              </ion-col>
            </ion-row>
          </p>
          <h4>Réseau de recherche</h4>
          <p>
            <Person
              name="Anne Montenac"
              description="Enseignante-chercheuse à l'Université Aix-Marseille, CNRS, TELEMMe"
            />
          </p>
          <h4>Participants</h4>
          <p>
            <ion-row>
              <ion-col size="6">
                <Person
                  name="Ronan Vichot"
                  description="Stagiaire au LARHRA, master 2 TNAH, Ecole nationale des chartes"
                />
              </ion-col>
              <ion-col size="6">
                <Person
                  name="Andrea ?"
                  description="Stagiaire au LARHRA, master ?, ?"
                />
              </ion-col>
            </ion-row>
          </p>
          <h4>Institutions partenaires</h4>
          {/* <ion-card-header>
              <ion-card-title>
                <h2 className={styles.logosTitle}>Institutions partenaires</h2>
              </ion-card-title>
            </ion-card-header> */}
          <p>
            {/* <ion-row>
              <ion-col size="4">
                <AnrLogo />
              </ion-col>
              <ion-col size="4">
                <EcoleFrancaisRomeLogo />
              </ion-col>

              <ion-col size="4">
                <UniAthensLogo />
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="4">
                <UniPadovaLogo />
              </ion-col>

              <ion-col size="4">
                <SgaLogo />
              </ion-col>
              <ion-col size="4">
                <EcoleFrancaisAthensLogo />
              </ion-col>
            </ion-row> */}
            <ion-row>
              <ion-col size="4">
                <LarhraLogo />
              </ion-col>
              <ion-col size="4">
                <KleiolabLogo />
              </ion-col>
            </ion-row>
          </p>
        </ion-grid>
      </ProjectPageLayout>
    </div>
  );
};

export default TextileWorlds_component;
