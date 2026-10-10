export type Category = 'Entradas' | 'Principais' | 'Pizzas' | 'Sobremesas' | 'Bebidas';
export type Dish = { id: number; name: string; description: string; price: number; category: Category; image: string; featured?: boolean; badge?: string };
export const categories: Array<'Todos' | Category> = ['Todos','Entradas','Principais','Pizzas','Sobremesas','Bebidas'];
export const menu: Dish[] = [
  { id:1,name:'Burrata da casa',description:'Tomates confitados, pesto de manjericão, azeite e pão de fermentação natural.',price:46,category:'Entradas',image:'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=1000&q=85',featured:true,badge:'Queridinho' },
  { id:2,name:'Bruschetta clássica',description:'Pão rústico, tomates frescos, alho, manjericão e azeite extravirgem.',price:29,category:'Entradas',image:'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=1000&q=85'},
  { id:3,name:'Pappardelle al pomodoro',description:'Massa artesanal, molho de tomates italianos, parmesão e manjericão.',price:64,category:'Principais',image:'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1000&q=85',featured:true,badge:'Mais pedido'},
  { id:4,name:'Risoto de cogumelos',description:'Arroz arbóreo cremoso, mix de cogumelos, vinho branco e parmesão.',price:72,category:'Principais',image:'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=1000&q=85'},
  { id:5,name:'Pizza Margherita',description:'Molho de tomate, mozzarella, manjericão fresco e azeite de oliva.',price:62,category:'Pizzas',image:'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1000&q=85',featured:true},
  { id:6,name:'Pizza de rúcula',description:'Mussarela, tomates cereja, rúcula fresca e parmesão em lascas.',price:69,category:'Pizzas',image:'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1000&q=85'},
  { id:7,name:'Tiramisù',description:'Creme de mascarpone, café espresso, biscoitos e cacau.',price:32,category:'Sobremesas',image:'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=1000&q=85',featured:true},
  { id:8,name:'Panna cotta',description:'Creme delicado de baunilha, calda artesanal de frutas vermelhas.',price:29,category:'Sobremesas',image:'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1000&q=85'},
  { id:9,name:'Limonada siciliana',description:'Limão siciliano, água com gás e hortelã.',price:16,category:'Bebidas',image:'https://images.unsplash.com/photo-1513558161293-cdaf765edfd7?auto=format&fit=crop&w=1000&q=85'},
  { id:10,name:'Espresso da casa',description:'Café espresso encorpado, servido na medida certa.',price:10,category:'Bebidas',image:'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1000&q=85'}
];
export const money = (n: number) => n.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
