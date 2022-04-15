import globalClassNames, { ClassNames as GlobalClassNames } from './style.d'
declare const classNames: typeof globalClassNames & {
  readonly 'header-1': 'header-1'
  readonly active: 'active'
  readonly input: 'input'
}
export default classNames
export type ClassNames = 'header-1' | 'active' | 'input' | GlobalClassNames
