// const listItemData = [
//     title: 'Best Burgers In Town',
//     },
//     {
//       title: 'Top 10 Pizza Places',
//     },
//     {
//       title: 'Best Wings In Town',
//     },
//     {
//       title: 'Authentic Mexican Food',
//     },
//     {
//       title: 'My Favourite Sushi Places',
//     },
//     {
//       title: 'The Kebab That Will Change Your Life',
//     },
//     {
//       title: 'Korma Heaven',
//     },
//     {
//       title: 'Italian Food Done Right',
//     }
//   ]; {

let listItemData = [];

export function setlistItemData(data) {
    listItemData = [];
    listItemData.push(data);
}

export function getlistItemData() {
    return listItemData;
}
