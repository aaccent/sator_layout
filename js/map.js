void function() {
  const mapContainer = document.querySelector('.map')

  if (!mapContainer) return

  let center = mapContainer.dataset.coordinates.split(',').map(Number);

  function init() {
    let map = new ymaps.Map(mapContainer, {
      center: center,
      zoom: 17,
    });

    let placemark = new ymaps.Placemark(
      center,
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "../images/placemark.svg",
        iconImageSize: [80, 80],
        iconImageOffset: [0, 0],
      }
    );

    map.controls.remove("geolocationControl");
    map.controls.remove("searchControl");
    map.controls.remove("trafficControl");
    map.controls.remove("typeSelector");
    map.controls.remove("fullscreenControl");
    map.controls.remove("zoomControl");
    map.controls.remove("rulerControl");

    map.geoObjects.add(placemark);
  }

  ymaps.ready(init);

}()