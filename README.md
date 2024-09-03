# Mémoire M2 TNAH
Ce dépôt est dédié aux livrables techniques du mémoire de M2 TNAH "D'un bout à l'autre d'une chaîne de traitement de données historiques ouvertes. Le cas de Geovistory et du projet de recherche Univers Textiles".

L'ensemble du contenu ci-dessous provient d'un autre fichier README.md à l'origine écrit à destination de l'équipe ARHN devant récupérer les fichiers produits dans le cadre de mon stage. Pour plus de clarté, j'ai seulement modifié les noms de quelques fichiers, qui ont changé depuis. La description ci-dessous répète parfois des éléments développés dans le mémoire, mais j'ai pris le parti de tout garder pour préserver la cohésion et l'unité de la description. Elle aborde l'ensemble des fichiers, dans leur version la plus aboutie, que j'ai produit ou modifié dans le cadre de mon stage. Certains sont déposés dans ce dépôt GitHub, les autres sont présents directement dans le mémoire.

---

Crée par Ronan Vichot le 19 juillet 2024.

Modifié par Ronan Vichot le 3 septembre 2024 dans la perspective du dépôt sous forme de livrable technique du mémoire de master TNAH.

# Guide des productions du stage de Ronan Vichot (avril-juillet 2024)

Ce document a pour but de décrire les transformations produites lors de mon stage de fin de master au LARHRA, concernant le suivi de la chaîne de traitement des données du projet de recherche historique _Univers Textiles : Femmes, hommes et productions textiles à l’époque moderne et contemporaine_. L'objectif est de permettre aux responsables du projet présents et futurs de bien s'approprier les réalisations opérées au cours dudit stage.

## Organisation générale du travail

### ./Univers_textiles_jeu_de_donnees

Afin de partager mes fichiers avec les responsables du projet, Mme Manuela MARTINI et M. Pierre Vernus, nous avons utilisé un **dépôt BUL** hébergé par l'université Lyon 2. J'ai récupéré le jeu de données sur ce dépôt. Il comporte **dix dossiers** au total, un pour chaque source :

- Quatre fichiers d'actes de mariages ayant eu lieu à la Croix-Rousse aux dates indiquées (1821, 1831, 1841, 1851)
- Trois fichiers de recensements de population, dont deux de la Croix-Rousse (1836, 1851) et un de Vernaison (1846)
- Deux indicateurs professionnelles indiquant les groupes et spécialités des travailleurs de l'industrie textile à Lyon et environs (1843, 1849)
- Un recensement fiscal (1843)

Chacune des sources a fait l'objet d'un travail préliminaire à mon stage, réalisé par **deux stagiaires antérieures que sont Laura BEY puis Juliette ZANETTA**. Leur rôle a été de produire les tables et de les compléter au mieux en lisant les sources.

J'ai été chargé de conserver l'ensemble des fichiers produits avant mon arrivé, c'est pourquoi certains dossiers contiennent plus de fichiers que d'autres. J'ai récupéré la table la plus complète dans chaque dossier et j'ai crée un doublon sur lequel je pouvais travailler.

Tous les dossiers contiennent donc des **fichiers obsolètes** et un fichier à jour. Les **fichiers à jour** comportent toujours **edit** dans leur nom. Exemple : 1851_recensement_edit_03-07.

La **date** indiquée dans le nom des fichiers renseigne le jour auquel j'ai crée le fichier. Le but de cet ajout était d'indiquer les **différentes versions** de mes fichiers. En effet, puisque je ne détiens pas les droits de supprimer ou d'écraser les fichiers d'un dépôt BUL, j'ai dû trouver un moyen d'indiquer les différentes versions lorsque je déposais mes fichiers à jour sur le dépôt.

Parmi les autres fichiers stockés directement dans ./Univers_textiles_jeu_de_donnees :

- Le présent fichier README.md
- Le [dictionnaire des individus](#Le-dictionnaire-des-individus-noeud-communiquant-des-fichiers-du-projet), fichier que j'ai crée de toute pièce afin d'assurer l'harmonie entre les données et servir de carrefour entre les identifiants (clés étrangères).
- Le fichier [journal_update_finale.txt](#Transformations-des-fichiers-de-données) qui contient un suivi de toutes les transformations que j'ai effectuées sur les tables de données avec OpenRefine et Excel.
- Un [script GREL](#Un-script-de-transformation-GREL-conservé-en-cas-de-besoin) pour les fichiers d'actes de mariages
- Le document index_voies_archives_municipales.ods, issu des Archives municipales de Lyon, qui recense les noms présents et passés des voies lyonnaises. Il pourrait servir d'intermédiaire entre les voies mentionnées dans les fichiers du projet et les voies actuelles, permettant ainsi de géolocaliser les voies citées dans les sources.

### ./Univers_textiles_design_system_et_website

En parallèle du traitement de données et des modélisations se trouve un dossier voisin dédié au développement web et aux _web components_. Dans ce dossier, intitulé [**./Univers_textiles_design_system_et_website**](#Le-développement-web-et-les-web-components), se tiennent deux autres dossiers, respectivement ./website et ./design-system, qui correspondent à des imports de dépôts GitHub.

Plusieurs fichiers package-lock.json sont présents à différents niveaux : il s'agit de fichier de configuration. En effet, pour bien utiliser ces fichiers, il faut d'abord suivre une procédure indiquée dans les README.md des deux dépôts GitHub en question.

### ./Univers_textiles_dataviz

Un dernier dossier du nom de [**./Univers_textiles_dataviz**](#La-création-de-visualisations-de-données) a son importance. À l'intérieur se trouve un fichier au format TWB destiné à être ouvert avec l'outil Tableau Public. J'ai réalisé avec cet outil quatre visualisations de données reposant sur les données nettoyées dans la dernière semaine de mon stage.

Dans le fichier JSON adjacent, j'ai laissé l'extrait d'une petite frise chronologique du corpus de sources codé en Mermaid.js. Il est possible de la visualiser en faisant un copier-coller du contenu rouge ("%" compris) dans l'[éditeur Mermaid](https://mermaid.live/edit#pako:eNp9k1FrgzAQx79KyBA38KFWa1vfxvYy6F5W2MPwJU1OGxYTiclgiN99UVsprpqn3P3_v7sLeg2migFOsec1XHKTogb5QhUH-AHhp8hncLKFHyDfnKGEPkP0tx8M8SfRnJwE1E5oMomQT4-UCFh1xoeVO5R18JA9kBOIQcr74wc3TDjPhHPM-sLsHDVh1nNMNN8nmmPiXthDzqLdhInHct0IN8xmfrbNXJ_kIrD8H5PM9dleBJLsowmzvWU6pG1bz-sumTS8BMEldBFChhsB6EXpytaIAaqV1RTqQQx36xCl6Jka6MWy--oFXMVoUUyc-AEUZO3-F2k6S6UqK4jhSl5d8VKJOJqUyHntnuiSb5JxSgxYPXoX26HHT9CS8FrJp5HY3y20uTfRUm0c4BJ0SThz29TvQob7Hclw6q4McmKFyXAmW2cl1qjjr6Q4NdpCgLWyxRmnORG1i2zF3DCvrqUm5dVSEfmlVDmagHGj9Puwvv0Wt3-zxiSO).

Le dossier ./visualisations_de_donnees_Univers_Textiles contient quant à lui des images des visualisations de données réalisées. Il s'agît de simples captures d'écran au format JPG. Le seul fichier au format PNG est la frise chronologique réalisée avec Mermaid.js.

## Transformations des fichiers de données

Les transformations concernant les fichiers du jeu de données du projet sont recensées dans le fichier **journal_update_finale.txt**, de haut en bas. Elles prennent la forme suivante :

```
    ## JJ-MM-AAAA ##
    nom_du_fichier
	    - Opération effectuée
```

Les opérations ont été réalisées sous Excel ou OpenRefine. Lorsqu'une formule a été utilisée (fonctions Excel ou formules GREL pour OpenRefine), elle est indiquée s'il s'agit de sa première utilisation.

Tout en bas subsistent des remarques sur ce qui serait à faire juste ensuite. Le document partage aussi certaines incertitudes que j'ai pu avoir pendant mon travail.

## Le dictionnaire des individus, noeud communiquant des fichiers du projet

### Rôle et structure du dictionnaire des individus

Dans la perspective de l'import de ces tables dans Geovistory, nous avons eu besoin de concevoir un fichier qui servirait de plateforme communiquante. J'ai alors créé et complété pendant l'ensemble de mon stage un fichier, intitulé **dictionnaire_des_individus.xlsx**, dont l'objectif est de :

1. **Recenser l'ensemble des individus** mentionnés dans chacun des fichiers
2. Indiquer les **informations essentielles** concernant les individus lorsqu'elles sont inscrites dans le fichier correspondant
3. Préciser l'identifiant de chaque entrée dans le fichier d'origine afin de créer des **clés étrangères**
4. Ajouter un **identifiant unique** pour repérer les individus qui sont mentionnés dans plusieurs fichiers

Pour des raisons pratiques, j'ai récupéré les individus d'abord dans un fichier de chaque type (un fichier de mariages, un recensement et un indicateur), puis j'ai appliqué les méthodes que j'avais employé pour chacun des fichiers des mêmes types. Ainsi, l'ordre d'entrer des individus dans le dictionnaire des individus est celui-ci :

    - 1821_mariages_edit.xlsx
    - 1836_recensement_edit.csv
    - 1843_indicateur_indiv_distincts_edit
    - 1831_mariages_edit.xlsx
    - 1841_mariages_edit.xlsx
    - 1851_mariages_edit.xlsx
    - 1843_recensement_fiscal_edit.xlsx
    - 1851_recensement_edit.xlsx
    - 1849_indicateur_indiv_distincts_edit.xlsx
    - 1846_recensement_vernaison.xlsx

Notez que, pour les deux fichiers d'indicateur, j'ai dû créer un nouveau document pour relever les individus uniques. Ce point est développé dans PARTIE.

Le nom de domaine du fichier n'est pas à prendre en compte : il est celui qui était utilisé à mon arrivé mais il a pu changer après mes interventions (notamment parce qu'OpenRefine ne peut pas exporter de table en format CSV).

De plus, considérez qu'une date doit désormais figurée dans la version la plus récente de chacun de ces fichiers.

### Les champs du dictionnaire des individus

Les champs du fichier peuvent être groupées en cinq sections.

1. L'**identifiant unique** (id_unique) et le score qui permet de le calculer (score_similarite_total).

   - La méthode pour déterminer le score de similarité est expliquée dans le fichier journal_update_finale.txt.
   - L'ordre d'attribution de l'identifiant unique est basé sur un tri alphabétique de l'ensemble des individus, d'abord par leur nom de famille (nom_usage) puis par leur prénom (prenom), et troisièmement un tri croissant des dates de naissance.
   - Par défaut, j'ai déterminé que deux entrées sont considérées comme faisant référence à un même individu si leur score de similarité est supérieur à 90%. De même, j'ai fixé la tolérance de la date de naissance à +/- 3 ans.

     Dans la formule, la borne inférieure est 3 année en dessous car j'ai retenu pour le calcul la date inférieure lorsque l'année était incertaine. Par exemple : pour 1790/1791, je retiens 1790, donc les bornes sont 1797-1794

   Ces paramètres peuvent être changés (ici, dans la cellule A2 ) :

   =SI(F3="NI";A2+1;SI(G3="NI";A2+1;SI(**B3>0,9**;SI(G3=G2;SI(H3="NI";A2;SI(H2="NI";A2;SI(CNUM(H3)>**(CNUM(H2)-3)**;SI(CNUM(H3)<**(CNUM(H2)+4)**;A2;A2+1);A2+1)));A2+1);A2+1)))

2. L'**identité** de l'individu : nom_usage, nom_naissance, prenom, genre, date_naissance_ISO.

   - Dans la plupart des cas, le genre était explicite dans le fichier d'origine.
   - Dans des cas spécifiques, comme les témoins dans les quatre fichiers de mariages, j'ai déduit le genre en fonction des prénoms et/ou des liens familiaux (frère, oncle, cousin).
   - Le nom_naissance sert à identifier le nom de jeune fille des femmes mariés ou veuves. Pour tous les hommes, nom_usage et nom_naissance sont identiques.

3. L'**adresse de résidence** de l'individu : numero_ordre_menages, adr_residence_numero, adr_residence_type_voie, adr_residence_nom_voie, adr_residence_commune, adr_residence_dpt_fr, adr_residence_pays.

   - Le champ numero_ordre_menages ne sert que pour le fichier 1836_recensement_edit car ce dernier ne contient pas les adresses des individus, seulement un index dont la pertinence nous échappe encore.
   - Les subdivisions administratives des adresses hors de France ne sont pas contenues dans adr_residence_dpt_fr mais dans adr_residence_pays. Exemple : Royaume de Piémont-Sardaigne (Savoie).

4. L'**adresse de naissance** de l'individu : lieu_naissance_commune, lieu_naissance_dpt, lieu_naissance_pays

   - Comme pour l'adresse de résidence, ces champs ont permis de générer des data visualisations sur les mouvements de population sans import dans Geovistory, urgence formulée par Mme MARTINI dans la perspective de son séminaire en septembre prochain.

5. Le **fichier de provenance** : id_fichier_de_provenance, fichier_de_provenance, role.

   - L'id_fichier_de_provenance est la **clé étrangère**.
   - Le champ role a pour but d'indiquer l'activité de l'individu mentionnée dans le fichier de provenance. Il sert d'indice pour déterminer rapidement l'essentiel de l'information spécifique le concernant dans ledit fichier.
   - Le champ id_source indique l'ordre dans lequel j'ai ajouté les entrées dans le dictionnaire des individus. Elle est à rapprocher de fichier_de_provenance.

## Le individus dans les fichiers indicateurs : cas particulier

En effet, les entrées du fichier d'origine indiquent parfois plusieurs individus dans une même entrée, les copropriétaires des ateliers, notamment.
J'ai donc été amené à reconstituer les individus à partir des groupes.

Pour ce faire, j'ai crée dans chaque dossier indicateur un nouveau fichier avec le suffixe **\_indiv_distincts_edit**. Grâce à un système de clés primaire et étrangère, les individus regroupés dans une même entrée dans le fichier source ont un identifiant de groupe relié à leur identifiant individuel dans le fichier \_indiv_distincts_edit.

Ainsi, dans les fichiers \_indiv_distincts_edit, le champ id_unique renseigne leur identifiant individuel, tandis que le champ id_groupe indique leur identifiant dans le document source.

## Un script de transformation GREL conservé en cas de besoin

Le fichier **script_JSON_mariages_OpenRefine.txt** a servi afin de copier coller dans OpenRefine un très grand nombre d'opérations de nettoyage et d'ajustements concernant les adresses des individus dans les quatre fichiers de mariages. Etant donné la structure des fichiers, je devais répéter dix fois le nettoyage (deux époux, quatre parents, quatre témoins) dans chacun des quatre fichiers.

Ces opérations concernent l'harmonisation et le réagencement des adresses dans la perspective de leur import dans le dictionnaire des individus. Elles consistent par exemple à mettre des tirets dans les noms composés (ex: rue Saint-Paul) et à découper les adresses en plusieurs champs. Le script peut être réutilisé dans OpenRefine au besoin dans un cinquième fichier de mariages qui aurait la même structure.

## Des templates de modélisation Cidoc-CRM/SDHSS

À l'origine, mon stage devait aboutir sur l'import des tables de données dans la _Geovistory Toolbox_ afin qu'ils soient intégrés à la base de données en RDF. Or, la durée de mon stage s'avère finalement insuffisante pour modéliser complètement les données.

Cependant, j'ai réalisé la **modélisation de trois fichiers clés**, c'est-à-dire une pour le fichier des mariages de 1851, une pour le recensement de 1836 et une pour l'indicateur de 1843. Celui du recensement de 1836 constitue le modèle le plus avancé et doit servir à compléter les deux autres avant qu'ils soient appliquées au reste des tables.

Tout ce qui a attrait à ces modélisations est stocké dans le dossier ./modelisation aux emplacements qui correspondent. Les modélisations effectuées peuvent être récupérées pour les fichiers similaires (par exemple, la modélisation du fichier des mariages de 1851 peut servir aux trois autres fichiers de mariages, puisque chacun a la même structure).

Chaque dossier ./modelisation contient :

### La table de maping

Parfois multiplié en plusieurs versions, le mapping consiste à **modéliser** une table de données en utilisant une entrée pour chaque classe d'entités. La méthode consiste à récupérer les intitulés des champs que l'on veut modéliser dans le fichier source, puis de déterminer dans le mapping ses liens avec les autres champs. Par exemple, le champ prenom dans le fichier source correspond à l'entrée suivante dans le mapping :

- champ : prenom
- exemple : Jean
- classe : E62 String
- chemins : liens entre les classes
- commentaire

Afin de réaliser les mappings, j'ai utilisé l'interface **OntoME** et le projet "Academic Education & Careers (Community Project)" dans la _Geovistory Toolbox_ pour déterminer les classes et les chemins les plus propices à chaque champ.
Pour la modélisation finale, seuls les **chemins** importent, mais les autres informations rendent le mapping plus intelligible.

### Le dossier ./drawio

Les fichiers contenus ici sont ceux qui m'ont permis de réaliser les **graphes issus des mappings**. J'ai choisi d'utiliser l'outil en ligne gratuit draw.io, qui permet de dessiner facilement les classes sous forme de boîtes et de les relier entre elles par des lignes qui représentent les propriétés.

Plusieurs versions des graphes sont possibles. Si tel est le cas, le dossier ./old contient les versions précédentes.

### Le dossier ./png

Le dossier ./png comporte, comme son nom l'indique, des fichiers **images**. Il s'agit des fichiers .drawio convertis afin d'être collés dans tous types de documents de traitement de texte, de présentation, etc.

Les fichiers dans ce dossier ont donc une fin de valorisation et doivent être mis à jour dès lors qu'une nouvelle version des graphes .drawio est produite.

## Le développement web et les _web components_

Avec l'aide de l'équipe ARHN, j'ai importé deux dépôts GitHub dans le dossier ./Univers_textiles_design_system_et_website :

1. https://github.com/geovistory/website ; que nous appelerons website.
2. https://github.com/geovistory/design-system ; que nous appelerons design-system.

### Website

Ce dépôt est dédié au développement des pages web Geovistory. Il est d'ordinaire réservé aux développeurs des équipes ARHN et Kleio Lab. Il permet d'afficher en local le portail Geovistory dans son intégralité : page d'accueil, sites web des projets de recherche et points d'accès SPARQL.

Je l'ai utilisé pour créer une maquette de la **page d'accueil du projet _Univers Textiles_** conforme à la direction artistique de Geovistory.

Pour ce faire, j'ai crée le dossier ./lib/projectHomePages/textile-worlds ainsi que les deux fichiers (CSS et TSX) de la même manière que dans les autres projets. J'ai d'ailleurs utilisé le projet Softpowarts comme modèle. Je n'ai pas modifié le fichier CSS mais j'ai entièrement retravaillé le fichier TSX.

J'ai également ajouté une image au format JPG dans le dossier ./public ainsi que dans ./public/socialimage afin qu'elle s'affiche correctement dans le menu Geovistory et sur la page d'accueil générée par le fichier TSX.

### Design System

Cet autre dépôt a plutôt attrait aux _web components_. Il faut d'ailleurs le rapprocher de la documentation du même nom : https://design.geovistory.org/?path=/story/welcome--welcome. Cette page permet d'expliquer aux utilisateurs Geovistory comment utiliser les _web components_ de leur choix.

Je l'ai personnellement utilisé pour créer des **data visualisations grâce à l'outil Mermaid.js** intégré, ainsi que pour essayer de développer un **nouveau _web component_** basique à partir de la librairie Stencil.js et des autres _web components_ déjà existants. Malheureusement, je n'ai pas eu le temps d'aboutir à un résultat probant et j'ai donc dû abandonner l'idée de créer un nouveau _web component_ dans les derniers jours.

## La création de visualisations de données

### Avec Mermaid.js

La librairie Mermaid.js permet de créer simplement des visualisations de données avec du texte seulement. J'ai choisi de l'utiliser car elle est déjà implémentée dans les _packages_ du dossier design-system : certains _web components_ développés pour Geovistory reposent en partie sur Mermaid.js. La [documentation](https://mermaid.js.org/intro/). en ligne m'a guidée.

### Avec Tableau Public

Tableau Public est un outil plus poussé que j'ai appris à utiliser lors de mes cours en deuxième année de master TNAH. Il nécessite d'importer les données puis d'assigner chaque champ au bon paramètre. Le choix des visualisations de données m'appartenait, mais Mme Martini et M. Vernus m'ont orienté vers la démonstration des différences entre les genres et les origines géographiques des individus.

C'est pourquoi j'ai crée :

- Une carte représentant le nombre d'individus distincts pour chaque lieu de naissance mentionné.
- Une carte représentant la part d'hommes et de femmes parmi ces naissances.
- Un diagramme en barres indiquant les variations des dates de naissance en fonction des années et du genre. Ici, les dates choisies sont les mêmes que celles choisies pour le [score de similarité](#Les-champs-du-dictionnaire-des-individus).
- Une table représentant la part de locataires et de propriétaires résidant dans les voies mentionnées.

Ces visualisations de données ont vocation à figurer dans mon propre mémoire de master, mais aussi à servir de support visuel à une présentation que Mme Martini tiendra au mois de septembre 2024.
