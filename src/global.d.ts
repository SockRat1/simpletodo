// styles.d.ts или global.d.ts
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}
