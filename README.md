# Mapy.cz s React Leafler

## Instalace

```shell
npm install leaflet react-leaflet
```

Naimportovat styly pro Leaflet:

```javascript
import "leaflet/dist/leaflet.css";
```

Nastavit výšku kontejneru s mapou, např. `leaflet-container`:
```css
.leaflet-container {
  height: 400px;
}
```

Případně nastavit výšku přímo pomocí stylu nebo jiné třídy na komponentě `<MapContainer />`.

## Použití
Použití v kódu vizte soubor [`/src/pages/HomePage/index.jsx`](https://github.com/FilipJirsak-Czechitas/react-leaflet-mapy/blob/main/src/pages/HomePage/index.jsx) v tomto projektu.

1. Zaregistrovat se na https://developer.mapy.cz a získat API klíč.
1. Vložit mapu do stránky pomocí komponenty [`<MapContainer />`](https://github.com/FilipJirsak-Czechitas/react-leaflet-mapy/blob/f5660e7e476c1e16a167e9207b0bda8c0d62793b/src/pages/HomePage/index.jsx#L39-L55).
1. Nastavit správné [atributování](https://developer.mapy.cz/rest-api/atributovani/) (uvedení copyrightu).
    1. Uvedení textu s copyrightem, viz atribut [`attribution`](https://github.com/FilipJirsak-Czechitas/react-leaflet-mapy/blob/f5660e7e476c1e16a167e9207b0bda8c0d62793b/src/pages/HomePage/index.jsx#L43) komponenty `<TileLayer />`.
    1. Uvedení loga Mapy.cz, viz komponenta [`<LogoControl />`](https://github.com/FilipJirsak-Czechitas/react-leaflet-mapy/blob/f5660e7e476c1e16a167e9207b0bda8c0d62793b/src/pages/HomePage/index.jsx#L17-L28) (můžete ji zkopírovat do svého projektu).

## Dokumentace
* [React Leaflet](https://react-leaflet.js.org/)
* [Leaflet](https://leafletjs.com)
* [Mapy.cz Developer](https://developer.mapy.cz/)
