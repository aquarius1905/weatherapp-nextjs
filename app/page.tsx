import CityList from "./components/CityList";

export default function Home() {
  const cities = [
    {
      'id': 1,
      'name': 'sapporo',
      'displayname': '札幌',
    },
    {
      'id': 2,
      'name': 'sendai',
      'displayname': '仙台',
    },
    {
      'id': 3,
      'name': 'tokyo',
      'displayname': '東京',
    },
    {
      'id': 4,
      'name': 'nagoya',
      'displayname': '名古屋',
    },
    {
      'id': 5,
      'name': 'osaka',
      'displayname': '大阪',
    },
    {
      'id': 6,
      'name': 'fukuoka',
      'displayname': '福岡',
    },
    {
      'id': 7,
      'name': 'naha',
      'displayname': '那覇',
    }
  ]
  return (
    <main className="bg-gray-200 h-svh">
      <CityList cities={cities} />
    </main>
  );
}
