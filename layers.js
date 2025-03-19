var wms_layers = [];


        var lyr_EsriImagery_0 = new ol.layer.Tile({
            'title': 'Esri Imagery',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_2024_Whales_1 = new ol.format.GeoJSON();
var features_2024_Whales_1 = format_2024_Whales_1.readFeatures(json_2024_Whales_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2024_Whales_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2024_Whales_1.addFeatures(features_2024_Whales_1);
var lyr_2024_Whales_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2024_Whales_1, 
                style: style_2024_Whales_1,
                popuplayertitle: '2024_Whales',
                interactive: false,
                title: '<img src="styles/legend/2024_Whales_1.png" /> 2024_Whales'
            });
var format_2023_Whales_2 = new ol.format.GeoJSON();
var features_2023_Whales_2 = format_2023_Whales_2.readFeatures(json_2023_Whales_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2023_Whales_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2023_Whales_2.addFeatures(features_2023_Whales_2);
var lyr_2023_Whales_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2023_Whales_2, 
                style: style_2023_Whales_2,
                popuplayertitle: '2023_Whales',
                interactive: false,
                title: '<img src="styles/legend/2023_Whales_2.png" /> 2023_Whales'
            });
var format_2022_Whales_3 = new ol.format.GeoJSON();
var features_2022_Whales_3 = format_2022_Whales_3.readFeatures(json_2022_Whales_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2022_Whales_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2022_Whales_3.addFeatures(features_2022_Whales_3);
var lyr_2022_Whales_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2022_Whales_3, 
                style: style_2022_Whales_3,
                popuplayertitle: '2022_Whales',
                interactive: false,
                title: '<img src="styles/legend/2022_Whales_3.png" /> 2022_Whales'
            });
var format_2021_Whales_4 = new ol.format.GeoJSON();
var features_2021_Whales_4 = format_2021_Whales_4.readFeatures(json_2021_Whales_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2021_Whales_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2021_Whales_4.addFeatures(features_2021_Whales_4);
var lyr_2021_Whales_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2021_Whales_4, 
                style: style_2021_Whales_4,
                popuplayertitle: '2021_Whales',
                interactive: false,
                title: '<img src="styles/legend/2021_Whales_4.png" /> 2021_Whales'
            });
var format_2019_Whales_5 = new ol.format.GeoJSON();
var features_2019_Whales_5 = format_2019_Whales_5.readFeatures(json_2019_Whales_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2019_Whales_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2019_Whales_5.addFeatures(features_2019_Whales_5);
var lyr_2019_Whales_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2019_Whales_5, 
                style: style_2019_Whales_5,
                popuplayertitle: '2019_Whales',
                interactive: false,
                title: '<img src="styles/legend/2019_Whales_5.png" /> 2019_Whales'
            });
var format_2020_Whales_6 = new ol.format.GeoJSON();
var features_2020_Whales_6 = format_2020_Whales_6.readFeatures(json_2020_Whales_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2020_Whales_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2020_Whales_6.addFeatures(features_2020_Whales_6);
var lyr_2020_Whales_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2020_Whales_6, 
                style: style_2020_Whales_6,
                popuplayertitle: '2020_Whales',
                interactive: false,
                title: '<img src="styles/legend/2020_Whales_6.png" /> 2020_Whales'
            });
var format_2018_Whales_7 = new ol.format.GeoJSON();
var features_2018_Whales_7 = format_2018_Whales_7.readFeatures(json_2018_Whales_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2018_Whales_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2018_Whales_7.addFeatures(features_2018_Whales_7);
var lyr_2018_Whales_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2018_Whales_7, 
                style: style_2018_Whales_7,
                popuplayertitle: '2018_Whales',
                interactive: false,
                title: '<img src="styles/legend/2018_Whales_7.png" /> 2018_Whales'
            });
var format_2017_Whales_8 = new ol.format.GeoJSON();
var features_2017_Whales_8 = format_2017_Whales_8.readFeatures(json_2017_Whales_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2017_Whales_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2017_Whales_8.addFeatures(features_2017_Whales_8);
var lyr_2017_Whales_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2017_Whales_8, 
                style: style_2017_Whales_8,
                popuplayertitle: '2017_Whales',
                interactive: false,
                title: '<img src="styles/legend/2017_Whales_8.png" /> 2017_Whales'
            });
var format_2016_Whales_9 = new ol.format.GeoJSON();
var features_2016_Whales_9 = format_2016_Whales_9.readFeatures(json_2016_Whales_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2016_Whales_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2016_Whales_9.addFeatures(features_2016_Whales_9);
var lyr_2016_Whales_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2016_Whales_9, 
                style: style_2016_Whales_9,
                popuplayertitle: '2016_Whales',
                interactive: false,
                title: '<img src="styles/legend/2016_Whales_9.png" /> 2016_Whales'
            });
var format_2015_Whales_10 = new ol.format.GeoJSON();
var features_2015_Whales_10 = format_2015_Whales_10.readFeatures(json_2015_Whales_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2015_Whales_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2015_Whales_10.addFeatures(features_2015_Whales_10);
var lyr_2015_Whales_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2015_Whales_10, 
                style: style_2015_Whales_10,
                popuplayertitle: '2015_Whales',
                interactive: false,
                title: '<img src="styles/legend/2015_Whales_10.png" /> 2015_Whales'
            });
var format_2014_Whales_11 = new ol.format.GeoJSON();
var features_2014_Whales_11 = format_2014_Whales_11.readFeatures(json_2014_Whales_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2014_Whales_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2014_Whales_11.addFeatures(features_2014_Whales_11);
var lyr_2014_Whales_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2014_Whales_11, 
                style: style_2014_Whales_11,
                popuplayertitle: '2014_Whales',
                interactive: false,
                title: '<img src="styles/legend/2014_Whales_11.png" /> 2014_Whales'
            });
var format_2011_Whales_12 = new ol.format.GeoJSON();
var features_2011_Whales_12 = format_2011_Whales_12.readFeatures(json_2011_Whales_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2011_Whales_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2011_Whales_12.addFeatures(features_2011_Whales_12);
var lyr_2011_Whales_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2011_Whales_12, 
                style: style_2011_Whales_12,
                popuplayertitle: '2011_Whales',
                interactive: false,
                title: '<img src="styles/legend/2011_Whales_12.png" /> 2011_Whales'
            });

lyr_EsriImagery_0.setVisible(true);lyr_2024_Whales_1.setVisible(false);lyr_2023_Whales_2.setVisible(false);lyr_2022_Whales_3.setVisible(false);lyr_2021_Whales_4.setVisible(false);lyr_2019_Whales_5.setVisible(false);lyr_2020_Whales_6.setVisible(false);lyr_2018_Whales_7.setVisible(false);lyr_2017_Whales_8.setVisible(false);lyr_2016_Whales_9.setVisible(false);lyr_2015_Whales_10.setVisible(false);lyr_2014_Whales_11.setVisible(false);lyr_2011_Whales_12.setVisible(false);
var layersList = [lyr_EsriImagery_0,lyr_2024_Whales_1,lyr_2023_Whales_2,lyr_2022_Whales_3,lyr_2021_Whales_4,lyr_2019_Whales_5,lyr_2020_Whales_6,lyr_2018_Whales_7,lyr_2017_Whales_8,lyr_2016_Whales_9,lyr_2015_Whales_10,lyr_2014_Whales_11,lyr_2011_Whales_12];
lyr_2024_Whales_1.set('fieldAliases', {'fid': 'fid', 'SightingID': 'SightingID', 'WhaleID': 'WhaleID', 'Date': 'Date', 'Group #': 'Group #', 'Lat': 'Lat', 'Long': 'Long', 'field_7': 'field_7', 'field_8': 'field_8', 'field_9': 'field_9', });
lyr_2023_Whales_2.set('fieldAliases', {'fid': 'fid', 'SightingID': 'SightingID', 'WhaleID': 'WhaleID', 'Date': 'Date', 'Group #': 'Group #', 'Lat': 'Lat', 'Long': 'Long', 'field_7': 'field_7', 'field_8': 'field_8', 'field_9': 'field_9', });
lyr_2022_Whales_3.set('fieldAliases', {'fid': 'fid', 'SightingID': 'SightingID', 'WhaleID': 'WhaleID', 'Date': 'Date', 'Group #': 'Group #', 'Lat': 'Lat', 'Long': 'Long', 'field_7': 'field_7', 'field_8': 'field_8', 'field_9': 'field_9', });
lyr_2021_Whales_4.set('fieldAliases', {'fid': 'fid', 'SightingID': 'SightingID', 'WhaleID': 'WhaleID', 'Date': 'Date', 'Group #': 'Group #', 'Lat': 'Lat', 'Long': 'Long', 'field_7': 'field_7', 'field_8': 'field_8', 'field_9': 'field_9', });
lyr_2019_Whales_5.set('fieldAliases', {'fid': 'fid', 'SightingID': 'SightingID', 'WhaleID': 'WhaleID', 'Date': 'Date', 'Group #': 'Group #', 'Lat': 'Lat', 'Long': 'Long', 'field_7': 'field_7', 'field_8': 'field_8', 'field_9': 'field_9', });
lyr_2020_Whales_6.set('fieldAliases', {'fid': 'fid', 'SightingID': 'SightingID', 'WhaleID': 'WhaleID', 'Date': 'Date', 'Group #': 'Group #', 'Lat': 'Lat', 'Long': 'Long', 'field_7': 'field_7', 'field_8': 'field_8', 'field_9': 'field_9', });
lyr_2018_Whales_7.set('fieldAliases', {'fid': 'fid', 'SightingID': 'SightingID', 'WhaleID': 'WhaleID', 'Date': 'Date', 'Group #': 'Group #', 'Lat': 'Lat', 'Long': 'Long', 'field_7': 'field_7', 'field_8': 'field_8', 'field_9': 'field_9', });
lyr_2017_Whales_8.set('fieldAliases', {'fid': 'fid', 'SightingID': 'SightingID', 'WhaleID': 'WhaleID', 'Date': 'Date', 'Group #': 'Group #', 'Lat': 'Lat', 'Long': 'Long', 'field_7': 'field_7', 'field_8': 'field_8', 'field_9': 'field_9', });
lyr_2016_Whales_9.set('fieldAliases', {'fid': 'fid', 'SightingID': 'SightingID', 'WhaleID': 'WhaleID', 'Date': 'Date', 'Group #': 'Group #', 'Lat': 'Lat', 'Long': 'Long', 'field_7': 'field_7', 'field_8': 'field_8', 'field_9': 'field_9', });
lyr_2015_Whales_10.set('fieldAliases', {'fid': 'fid', 'SightingID': 'SightingID', 'WhaleID': 'WhaleID', 'Date': 'Date', 'Group #': 'Group #', 'Lat': 'Lat', 'Long': 'Long', 'field_7': 'field_7', 'field_8': 'field_8', 'field_9': 'field_9', });
lyr_2014_Whales_11.set('fieldAliases', {'fid': 'fid', 'SightingID': 'SightingID', 'WhaleID': 'WhaleID', 'Date': 'Date', 'Group #': 'Group #', 'Lat': 'Lat', 'Long': 'Long', 'field_7': 'field_7', 'field_8': 'field_8', 'field_9': 'field_9', });
lyr_2011_Whales_12.set('fieldAliases', {'fid': 'fid', 'SightingID': 'SightingID', 'WhaleID': 'WhaleID', 'Date': 'Date', 'Group #': 'Group #', 'Lat': 'Lat', 'Long': 'Long', 'field_7': 'field_7', 'field_8': 'field_8', 'field_9': 'field_9', });
lyr_2024_Whales_1.set('fieldImages', {'fid': 'TextEdit', 'SightingID': 'Range', 'WhaleID': 'TextEdit', 'Date': 'Range', 'Group #': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'field_7': 'TextEdit', 'field_8': 'TextEdit', 'field_9': 'TextEdit', });
lyr_2023_Whales_2.set('fieldImages', {'fid': 'TextEdit', 'SightingID': 'Range', 'WhaleID': 'TextEdit', 'Date': 'Range', 'Group #': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'field_7': 'TextEdit', 'field_8': 'TextEdit', 'field_9': 'TextEdit', });
lyr_2022_Whales_3.set('fieldImages', {'fid': 'TextEdit', 'SightingID': 'Range', 'WhaleID': 'TextEdit', 'Date': 'Range', 'Group #': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'field_7': 'TextEdit', 'field_8': 'TextEdit', 'field_9': 'TextEdit', });
lyr_2021_Whales_4.set('fieldImages', {'fid': 'TextEdit', 'SightingID': 'Range', 'WhaleID': 'TextEdit', 'Date': 'Range', 'Group #': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'field_7': 'TextEdit', 'field_8': 'TextEdit', 'field_9': 'TextEdit', });
lyr_2019_Whales_5.set('fieldImages', {'fid': 'TextEdit', 'SightingID': 'Range', 'WhaleID': 'TextEdit', 'Date': 'Range', 'Group #': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'field_7': 'TextEdit', 'field_8': 'TextEdit', 'field_9': 'TextEdit', });
lyr_2020_Whales_6.set('fieldImages', {'fid': 'TextEdit', 'SightingID': 'Range', 'WhaleID': 'TextEdit', 'Date': 'Range', 'Group #': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'field_7': 'TextEdit', 'field_8': 'TextEdit', 'field_9': 'TextEdit', });
lyr_2018_Whales_7.set('fieldImages', {'fid': 'TextEdit', 'SightingID': 'Range', 'WhaleID': 'TextEdit', 'Date': 'Range', 'Group #': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'field_7': 'TextEdit', 'field_8': 'TextEdit', 'field_9': 'TextEdit', });
lyr_2017_Whales_8.set('fieldImages', {'fid': 'TextEdit', 'SightingID': 'Range', 'WhaleID': 'TextEdit', 'Date': 'Range', 'Group #': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'field_7': 'TextEdit', 'field_8': 'TextEdit', 'field_9': 'TextEdit', });
lyr_2016_Whales_9.set('fieldImages', {'fid': 'TextEdit', 'SightingID': 'Range', 'WhaleID': 'TextEdit', 'Date': 'Range', 'Group #': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'field_7': 'TextEdit', 'field_8': 'TextEdit', 'field_9': 'TextEdit', });
lyr_2015_Whales_10.set('fieldImages', {'fid': 'TextEdit', 'SightingID': 'Range', 'WhaleID': 'TextEdit', 'Date': 'Range', 'Group #': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'field_7': 'TextEdit', 'field_8': 'TextEdit', 'field_9': 'TextEdit', });
lyr_2014_Whales_11.set('fieldImages', {'fid': 'TextEdit', 'SightingID': 'Range', 'WhaleID': 'TextEdit', 'Date': 'Range', 'Group #': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'field_7': 'TextEdit', 'field_8': 'TextEdit', 'field_9': 'TextEdit', });
lyr_2011_Whales_12.set('fieldImages', {'fid': 'TextEdit', 'SightingID': 'Range', 'WhaleID': 'TextEdit', 'Date': 'Range', 'Group #': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'field_7': 'TextEdit', 'field_8': 'TextEdit', 'field_9': 'TextEdit', });
lyr_2024_Whales_1.set('fieldLabels', {'fid': 'no label', 'SightingID': 'no label', 'WhaleID': 'no label', 'Date': 'no label', 'Group #': 'no label', 'Lat': 'no label', 'Long': 'no label', 'field_7': 'no label', 'field_8': 'no label', 'field_9': 'no label', });
lyr_2023_Whales_2.set('fieldLabels', {'fid': 'no label', 'SightingID': 'no label', 'WhaleID': 'no label', 'Date': 'no label', 'Group #': 'no label', 'Lat': 'no label', 'Long': 'no label', 'field_7': 'no label', 'field_8': 'no label', 'field_9': 'no label', });
lyr_2022_Whales_3.set('fieldLabels', {'fid': 'no label', 'SightingID': 'no label', 'WhaleID': 'no label', 'Date': 'no label', 'Group #': 'no label', 'Lat': 'no label', 'Long': 'no label', 'field_7': 'no label', 'field_8': 'no label', 'field_9': 'no label', });
lyr_2021_Whales_4.set('fieldLabels', {'fid': 'no label', 'SightingID': 'no label', 'WhaleID': 'no label', 'Date': 'no label', 'Group #': 'no label', 'Lat': 'no label', 'Long': 'no label', 'field_7': 'no label', 'field_8': 'no label', 'field_9': 'no label', });
lyr_2019_Whales_5.set('fieldLabels', {'fid': 'no label', 'SightingID': 'no label', 'WhaleID': 'no label', 'Date': 'no label', 'Group #': 'no label', 'Lat': 'no label', 'Long': 'no label', 'field_7': 'no label', 'field_8': 'no label', 'field_9': 'no label', });
lyr_2020_Whales_6.set('fieldLabels', {'fid': 'no label', 'SightingID': 'no label', 'WhaleID': 'no label', 'Date': 'no label', 'Group #': 'no label', 'Lat': 'no label', 'Long': 'no label', 'field_7': 'no label', 'field_8': 'no label', 'field_9': 'no label', });
lyr_2018_Whales_7.set('fieldLabels', {'fid': 'no label', 'SightingID': 'no label', 'WhaleID': 'no label', 'Date': 'no label', 'Group #': 'no label', 'Lat': 'no label', 'Long': 'no label', 'field_7': 'no label', 'field_8': 'no label', 'field_9': 'no label', });
lyr_2017_Whales_8.set('fieldLabels', {'fid': 'no label', 'SightingID': 'no label', 'WhaleID': 'no label', 'Date': 'no label', 'Group #': 'no label', 'Lat': 'no label', 'Long': 'no label', 'field_7': 'no label', 'field_8': 'no label', 'field_9': 'no label', });
lyr_2016_Whales_9.set('fieldLabels', {'fid': 'no label', 'SightingID': 'no label', 'WhaleID': 'no label', 'Date': 'no label', 'Group #': 'no label', 'Lat': 'no label', 'Long': 'no label', 'field_7': 'no label', 'field_8': 'no label', 'field_9': 'no label', });
lyr_2015_Whales_10.set('fieldLabels', {'fid': 'inline label - always visible', 'SightingID': 'no label', 'WhaleID': 'no label', 'Date': 'no label', 'Group #': 'no label', 'Lat': 'no label', 'Long': 'no label', 'field_7': 'no label', 'field_8': 'no label', 'field_9': 'no label', });
lyr_2014_Whales_11.set('fieldLabels', {'fid': 'no label', 'SightingID': 'no label', 'WhaleID': 'no label', 'Date': 'no label', 'Group #': 'no label', 'Lat': 'no label', 'Long': 'no label', 'field_7': 'no label', 'field_8': 'no label', 'field_9': 'no label', });
lyr_2011_Whales_12.set('fieldLabels', {'fid': 'no label', 'SightingID': 'no label', 'WhaleID': 'no label', 'Date': 'header label - visible with data', 'Group #': 'no label', 'Lat': 'no label', 'Long': 'no label', 'field_7': 'no label', 'field_8': 'no label', 'field_9': 'no label', });
lyr_2011_Whales_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});