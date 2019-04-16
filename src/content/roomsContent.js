// Room picture
import room1 from '../images/home-page/pokoj1.png';
import room2 from '../images/home-page/pokoj2.png';
import room3 from '../images/home-page/pokoj3.png';
import room4 from '../images/home-page/pokoj4.png';
import room5 from '../images/home-page/pokoj5.png';


export const roomsContent = {
    pl: {
        title: 'Pokoje',
        description: 'Do Państwa dyskozycji mamy pokoje 1, 2, 3 lub 4 osobowe. Każdy pokój posiada osobną łazienkę, płaski telewizor. Dodatkowo na terenie naszego obiektu znajdą Państwo (tutaj sobie wymień po kolei że np. restauracje itd.). <b>Poniżej lista poszczególnych pokoi. Nasz hotel jest w stanie przyjąć 60 gości.</b>',
        timeOfDay: 'noc',
        currency: 'zł',
        rooms: [
            {
                id: '0',
                name: 'Pokój Superior',
                image: room1,
                price: '129',
                measurement: '35',
                description: 'W pokoju znajduje się łóżko małżeńskie typu kingsize, łazienka z pełnym węzłem sanitarnym o podwyższonym standardzie, suszarka, komplet ręczników. TV z płaskim ekranem, wifi, zestaw do parzenia kawy i herbaty oraz lodówka.',
                details_items: [
                    { item: 'Internet w pokoju' },
                    { item: 'Telewizor z płaskim ekranem' },
                    { item: 'Biurko' },
                    { item: 'Szafa' },
                    { item: 'Łazienka z prysznicem' },
                    { item: 'Ręczniki' },
                ],
                slug: 'pokoj-superior'
            },
            {
                id: '1',
                name: 'Pokój Double',
                image: room2,
                price: '129',
                measurement: '25',
                description: 'W pokoju znajduje się łóżko małżeńskie, łazienka z pełnym węzłem sanitarnym, suszarka, komplet ręczników. TV z płaskim ekranem oraz wifi.',
                details_items: [
                    { item: 'Internet w pokoju' },
                    { item: 'Telewizor z płaskim ekranem' },
                    { item: 'Biurko' },
                    { item: 'Szafa' },
                    { item: 'Łazienka z prysznicem' },
                    { item: 'Ręczniki' },
                ],
                slug: 'pokoj-double'
            },
            {
                id: '2',
                name: 'Pokój Twin',
                image: room3,
                price: '129',
                measurement: '25',
                description: 'W pokoju znajdują się dwa łóżka pojedyńcze, łazienka z pełnym węzłem sanitarnym, suszarka, komplet ręczników, TV z płaskim ekranem oraz wifi. Możliwość dostawki za dodatkową dopłatą.',
                details_items: [
                    { item: 'Internet w pokoju' },
                    { item: 'Telewizor z płaskim ekranem' },
                    { item: 'Biurko' },
                    { item: 'Szafa' },
                    { item: 'Łazienka z prysznicem' },
                    { item: 'Ręczniki' },
                ],
                slug: 'pokoj-twin'
            },
            {
                id: '3',
                name: 'Pokój Triple',
                image: room4,
                price: '129',
                measurement: '35',
                description: 'W pokoju znajdują się trzy łóżka pojedyncze oraz dodatkowe rozkładane łóżko, łazienka z pełnym węzłem sanitarnym, suszarka, komplet ręczników, TV z płaskim ekranem oraz wifi. Ze względu na duży metraż pokoju istnieje możliwość dostawienia nawet 2 łóżek za dodatkową opłatą.',
                details_items: [
                    { item: 'Internet w pokoju' },
                    { item: 'Telewizor z płaskim ekranem' },
                    { item: 'Biurko' },
                    { item: 'Szafa' },
                    { item: 'Łazienka z prysznicem' },
                    { item: 'Ręczniki' },
                ],
                slug: 'pokoj-triple'
            },
            {
                id: '4',
                name: 'Apartament z dwoma sypialniami',
                image: room5,
                price: '129',
                measurement: '40',
                description: 'W apartamencie znajdują się dwie oddzielne sypialnie, a w każdej z nich łóżko małżeńskie, łazienka z pełnym węzłem sanitarnym, suszarką, komplet ręczników, TV z płaskim ekranem oraz wifi.',
                details_items: [
                    { item: 'Internet w pokoju' },
                    { item: 'Telewizor z płaskim ekranem' },
                    { item: 'Biurko' },
                    { item: 'Szafa' },
                    { item: 'Łazienka z prysznicem' },
                    { item: 'Ręczniki' },
                ],
                slug: 'apartament-z-dwoma-sypialniami'
            }
        ]
    }
};