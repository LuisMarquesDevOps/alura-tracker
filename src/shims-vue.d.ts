/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module '*.css' {
  // O conteúdo do módulo CSS pode ser vazio ou uma string (o nome da classe, etc.)
  const content: any;
  export default content;
}