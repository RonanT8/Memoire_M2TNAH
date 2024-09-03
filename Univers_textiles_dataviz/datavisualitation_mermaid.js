/* Dataviz réalisé par Ronan Vichot (10-07-2024), stagiaire au LARHRA, pour le séminaire de Manuela Martini en septembre 2024 */
export const timeline_sources = await stencilWrapper(
  <geov-mermaid>{`
%%{init: { 'logLevel': 'debug', 'theme': 'dark','themeVariables': {
  'cScale0': '#0000cd', 'cScaleLabel0': '#ffffff',
  'cScale1': '#0000cd', 'cScaleLabel1': '#ffffff',
  'cScale2': '#008000', 'cScaleLabel2': '#ffffff',
  'cScale3': '#0000cd', 'cScaleLabel3': '#ffffff',
  'cScale4': '#9efd38', 'cScaleLabel4': '#000000',
  'cScale5': '#008000', 'cScaleLabel5': '#ffffff',
  'cScale6': '#ffdf00', 'cScaleLabel6': '#000000',
  'cScale7': '#00a693', 'cScaleLabel7': '#000000'
  }}}%%
  timeline
      title Corpus de sources
      1821 : Actes de mariage
      1831 : Actes de mariage
      1836 : Recensement de population
      1841 : Actes de mariage
      1843 : Recensement fiscal : Indicateur
      1846 : Recensement de population (Vernaison)
      1849 : Indicateur
      1851 : Actes de mariage : Recensement de population
  `}</geov-mermaid>
);
