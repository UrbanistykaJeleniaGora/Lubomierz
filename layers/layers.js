var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Studium_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://rastry.gison.pl/wms/lubomierz",
                              attributions: ' ',
                              params: {
                                "LAYERS": "studium",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Studium',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Studium_1, 1]);
var lyr_MPZP_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://rastry.gison.pl/wms/lubomierz",
                              attributions: ' ',
                              params: {
                                "LAYERS": "mpzp",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'MPZP',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MPZP_2, 1]);
var format_DZIALKI_WFS_3 = new ol.format.GeoJSON();
var features_DZIALKI_WFS_3 = format_DZIALKI_WFS_3.readFeatures(json_DZIALKI_WFS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DZIALKI_WFS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DZIALKI_WFS_3.addFeatures(features_DZIALKI_WFS_3);
var lyr_DZIALKI_WFS_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DZIALKI_WFS_3, 
                style: style_DZIALKI_WFS_3,
                popuplayertitle: 'DZIALKI_WFS',
                interactive: false,
                title: '<img src="styles/legend/DZIALKI_WFS_3.png" /> DZIALKI_WFS'
            });
var format_wnioski_4 = new ol.format.GeoJSON();
var features_wnioski_4 = format_wnioski_4.readFeatures(json_wnioski_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_wnioski_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_wnioski_4.addFeatures(features_wnioski_4);
var lyr_wnioski_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_wnioski_4, 
                style: style_wnioski_4,
                popuplayertitle: 'wnioski',
                interactive: true,
                title: '<img src="styles/legend/wnioski_4.png" /> wnioski'
            });
var format_granica_wfs_5 = new ol.format.GeoJSON();
var features_granica_wfs_5 = format_granica_wfs_5.readFeatures(json_granica_wfs_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_granica_wfs_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_granica_wfs_5.addFeatures(features_granica_wfs_5);
var lyr_granica_wfs_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_granica_wfs_5, 
                style: style_granica_wfs_5,
                popuplayertitle: 'granica_wfs',
                interactive: false,
                title: '<img src="styles/legend/granica_wfs_5.png" /> granica_wfs'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Studium_1.setVisible(true);lyr_MPZP_2.setVisible(true);lyr_DZIALKI_WFS_3.setVisible(true);lyr_wnioski_4.setVisible(true);lyr_granica_wfs_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Studium_1,lyr_MPZP_2,lyr_DZIALKI_WFS_3,lyr_wnioski_4,lyr_granica_wfs_5];
lyr_DZIALKI_WFS_3.set('fieldAliases', {'ID_DZIALKI': 'ID_DZIALKI', 'NUMER_DZIA': 'NUMER_DZIA', 'NUMER_OBRE': 'NUMER_OBRE', 'NUMER_JEDN': 'NUMER_JEDN', 'NAZWA_OBRE': 'NAZWA_OBRE', 'NAZWA_GMIN': 'NAZWA_GMIN', 'POLE_EWIDE': 'POLE_EWIDE', 'KLASOUZYTK': 'KLASOUZYTK', 'GRUPA_REJE': 'GRUPA_REJE', 'DATA': 'DATA', 'KW': 'KW', 'LACZONE': 'LACZONE', });
lyr_wnioski_4.set('fieldAliases', {'ID_DZIALKI': 'ID_DZIALKI', 'NUMER_DZIA': 'NUMER_DZIA', 'NUMER_OBRE': 'NUMER_OBRE', 'NUMER_JEDN': 'NUMER_JEDN', 'NAZWA_OBRE': 'NAZWA_OBRE', 'NAZWA_GMIN': 'NAZWA_GMIN', 'POLE_EWIDE': 'POLE_EWIDE', 'KLASOUZYTK': 'KLASOUZYTK', 'GRUPA_REJE': 'GRUPA_REJE', 'DATA': 'DATA', 'KW': 'KW', 'LACZONE': 'LACZONE', '1': '1', '2': '2', '3': '3', '3a': '3a', '4.1.1': '4.1.1', '4.2': '4.2', '7': '7', 'laczone_2': 'laczone_2', });
lyr_granica_wfs_5.set('fieldAliases', {'ID_DZIALKI': 'ID_DZIALKI', 'NUMER_DZIA': 'NUMER_DZIA', 'NUMER_OBRE': 'NUMER_OBRE', 'NUMER_JEDN': 'NUMER_JEDN', 'NAZWA_OBRE': 'NAZWA_OBRE', 'NAZWA_GMIN': 'NAZWA_GMIN', 'POLE_EWIDE': 'POLE_EWIDE', 'KLASOUZYTK': 'KLASOUZYTK', 'GRUPA_REJE': 'GRUPA_REJE', 'DATA': 'DATA', 'KW': 'KW', 'LACZONE': 'LACZONE', });
lyr_DZIALKI_WFS_3.set('fieldImages', {'ID_DZIALKI': 'TextEdit', 'NUMER_DZIA': 'TextEdit', 'NUMER_OBRE': 'TextEdit', 'NUMER_JEDN': 'TextEdit', 'NAZWA_OBRE': 'TextEdit', 'NAZWA_GMIN': 'TextEdit', 'POLE_EWIDE': 'TextEdit', 'KLASOUZYTK': 'TextEdit', 'GRUPA_REJE': 'TextEdit', 'DATA': 'TextEdit', 'KW': 'TextEdit', 'LACZONE': 'TextEdit', });
lyr_wnioski_4.set('fieldImages', {'ID_DZIALKI': 'TextEdit', 'NUMER_DZIA': 'TextEdit', 'NUMER_OBRE': 'TextEdit', 'NUMER_JEDN': 'TextEdit', 'NAZWA_OBRE': 'TextEdit', 'NAZWA_GMIN': 'TextEdit', 'POLE_EWIDE': 'TextEdit', 'KLASOUZYTK': 'TextEdit', 'GRUPA_REJE': 'TextEdit', 'DATA': 'TextEdit', 'KW': 'TextEdit', 'LACZONE': 'TextEdit', '1': 'TextEdit', '2': 'TextEdit', '3': 'TextEdit', '3a': 'TextEdit', '4.1.1': 'TextEdit', '4.2': 'TextEdit', '7': 'TextEdit', 'laczone_2': 'TextEdit', });
lyr_granica_wfs_5.set('fieldImages', {'ID_DZIALKI': 'TextEdit', 'NUMER_DZIA': 'TextEdit', 'NUMER_OBRE': 'TextEdit', 'NUMER_JEDN': 'TextEdit', 'NAZWA_OBRE': 'TextEdit', 'NAZWA_GMIN': 'TextEdit', 'POLE_EWIDE': 'TextEdit', 'KLASOUZYTK': 'TextEdit', 'GRUPA_REJE': 'TextEdit', 'DATA': 'TextEdit', 'KW': 'TextEdit', 'LACZONE': 'TextEdit', });
lyr_DZIALKI_WFS_3.set('fieldLabels', {'ID_DZIALKI': 'no label', 'NUMER_DZIA': 'no label', 'NUMER_OBRE': 'no label', 'NUMER_JEDN': 'no label', 'NAZWA_OBRE': 'no label', 'NAZWA_GMIN': 'no label', 'POLE_EWIDE': 'no label', 'KLASOUZYTK': 'no label', 'GRUPA_REJE': 'no label', 'DATA': 'no label', 'KW': 'no label', 'LACZONE': 'no label', });
lyr_wnioski_4.set('fieldLabels', {'ID_DZIALKI': 'hidden field', 'NUMER_DZIA': 'hidden field', 'NUMER_OBRE': 'hidden field', 'NUMER_JEDN': 'hidden field', 'NAZWA_OBRE': 'hidden field', 'NAZWA_GMIN': 'hidden field', 'POLE_EWIDE': 'hidden field', 'KLASOUZYTK': 'hidden field', 'GRUPA_REJE': 'hidden field', 'DATA': 'hidden field', 'KW': 'hidden field', 'LACZONE': 'no label', '1': 'no label', '2': 'hidden field', '3': 'hidden field', '3a': 'hidden field', '4.1.1': 'hidden field', '4.2': 'hidden field', '7': 'no label', 'laczone_2': 'hidden field', });
lyr_granica_wfs_5.set('fieldLabels', {'ID_DZIALKI': 'no label', 'NUMER_DZIA': 'no label', 'NUMER_OBRE': 'no label', 'NUMER_JEDN': 'no label', 'NAZWA_OBRE': 'no label', 'NAZWA_GMIN': 'no label', 'POLE_EWIDE': 'no label', 'KLASOUZYTK': 'no label', 'GRUPA_REJE': 'no label', 'DATA': 'no label', 'KW': 'no label', 'LACZONE': 'no label', });
lyr_granica_wfs_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});