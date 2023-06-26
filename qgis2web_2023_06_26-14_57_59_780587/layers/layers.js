var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_KANYAJUOKDIAGRAM16_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "KANYAJUOK DIAGRAM 16",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/KANYAJUOKDIAGRAM16_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [3851885.477671, -92742.308247, 3853483.714981, -91448.359095]
                            })
                        });
var format_GroundPoints1239and1240_2 = new ol.format.GeoJSON();
var features_GroundPoints1239and1240_2 = format_GroundPoints1239and1240_2.readFeatures(json_GroundPoints1239and1240_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GroundPoints1239and1240_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GroundPoints1239and1240_2.addFeatures(features_GroundPoints1239and1240_2);
var lyr_GroundPoints1239and1240_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GroundPoints1239and1240_2, 
                style: style_GroundPoints1239and1240_2,
                interactive: false,
                title: '<img src="styles/legend/GroundPoints1239and1240_2.png" /> Ground Points 1239 and 1240'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_KANYAJUOKDIAGRAM16_1.setVisible(true);lyr_GroundPoints1239and1240_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_KANYAJUOKDIAGRAM16_1,lyr_GroundPoints1239and1240_2];
lyr_GroundPoints1239and1240_2.set('fieldAliases', {'ele': 'ele', 'time': 'time', 'magvar': 'magvar', 'geoidheight': 'geoidheight', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'sym': 'sym', 'type': 'type', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsdata': 'ageofdgpsdata', 'dgpsid': 'dgpsid', });
lyr_GroundPoints1239and1240_2.set('fieldImages', {'ele': 'TextEdit', 'time': 'DateTime', 'magvar': 'TextEdit', 'geoidheight': 'TextEdit', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'sym': 'TextEdit', 'type': 'TextEdit', 'fix': 'TextEdit', 'sat': 'Range', 'hdop': 'TextEdit', 'vdop': 'TextEdit', 'pdop': 'TextEdit', 'ageofdgpsdata': 'TextEdit', 'dgpsid': 'Range', });
lyr_GroundPoints1239and1240_2.set('fieldLabels', {'ele': 'no label', 'time': 'no label', 'magvar': 'no label', 'geoidheight': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'sym': 'no label', 'type': 'no label', 'fix': 'no label', 'sat': 'no label', 'hdop': 'no label', 'vdop': 'no label', 'pdop': 'no label', 'ageofdgpsdata': 'no label', 'dgpsid': 'no label', });
lyr_GroundPoints1239and1240_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});