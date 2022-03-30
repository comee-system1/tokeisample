export function getData() {
  let countries = ['アメリカ', 'ドイツ', 'イギリス', '日本', 'イタリア', 'ギリシア' ];
  let data = [];

  for (let i = 0; i < countries.length; i++) {
    data.push({
      id: i,
      country: countries[i],
      download: Math.round(Math.random() * 20000),
      sales: Math.random() * 10000,
      expenses: Math.random() * 5000
    });
  }
  
  return data;
}
