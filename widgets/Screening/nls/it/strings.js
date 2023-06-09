﻿///////////////////////////////////////////////////////////////////////////
// Copyright ï¿½ Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////
define({
  "_widgetLabel": "Screening",
  "geometryServicesNotFound": "Servizio geometria non disponibile.",
  "unableToDrawBuffer": "Impossibile disegnare il buffer. Riprovare.",
  "invalidConfiguration": "Configurazione non valida.",
  "clearAOIButtonLabel": "Ricomincia",
  "noGraphicsShapefile": "Lo shapefile caricato non contiene grafici.",
  "zoomToLocationTooltipText": "Zoom su posizione",
  "noGraphicsToZoomMessage": "Nessun grafico trovato in cui eseguire lo zoom.",
  "placenameWidget": {
    "placenameLabel": "Cerca una posizione"
  },
  "drawToolWidget": {
    "useDrawToolForAOILabel": "Seleziona modalità disegno",
    "toggleSelectability": "Fare clic per attivare o disattivare lo stato di selezione",
    "chooseLayerTitle": "Scegliere layer selezionabili",
    "selectAllLayersText": "Seleziona tutti",
    "layerSelectionWarningTooltip": "Si deve selezionare almeno un layer per creare un AOI",
    "selectToolLabel": "Selezionare strumenti"
  },
  "shapefileWidget": {
    "shapefileLabel": "Carica shapefile compresso",
    "uploadShapefileButtonText": "Carica",
    "unableToUploadShapefileMessage": "Impossibile caricare lo shapefile."
  },
  "coordinatesWidget": {
    "selectStartPointFromSearchText": "Definisci un punto iniziale",
    "addButtonTitle": "Aggiungi",
    "deleteButtonTitle": "Rimuovi",
    "mapTooltipForStartPoint": "Fare clic nella mappa per impostare un punto di inizio",
    "mapTooltipForUpdateStartPoint": "Fare clic nella mappa per aggiornare il punto di inizio",
    "locateText": "Individua",
    "locateByMapClickText": "Seleziona le coordinate iniziali",
    "enterBearingAndDistanceLabel": "Immetti rilevamento e distanza dal punto iniziale",
    "bearingTitle": "Comportamento",
    "distanceTitle": "Distanza",
    "planSettingTooltip": "Pianifica impostazioni",
    "invalidLatLongMessage": "Immettere dei valori validi"
  },
  "bufferDistanceAndUnit": {
    "bufferInputTitle": "Distanza buffer (optional)",
    "bufferInputLabel": "Mostra risultati all'interno di",
    "bufferDistanceLabel": "Distanza di buffer",
    "bufferUnitLabel": "Unità buffer",
    "bufferRangeMessage": "La distanza di buffer è fuori intervallo,<br/> inserire un valore compreso tra 0 e ${distance} ${unit}"
  },
  "traverseSettings": {
    "bearingLabel": "Comportamento",
    "lengthLabel": "Lunghezza",
    "addButtonTitle": "Aggiungi",
    "deleteButtonTitle": "Rimuovi",
    "deleteBearingAndLengthLabel": "Rimuovere riga direzione e lunghezza",
    "addButtonLabel": "Aggiungere direzione e lunghezza"
  },
  "planSettings": {
    "expandGridTooltipText": "Espandi griglia",
    "collapseGridTooltipText": "Chiudi griglia",
    "directionUnitLabelText": "Unità direzioni",
    "distanceUnitLabelText": "Unità di distanza e lunghezza",
    "planSettingsComingSoonText": "Disponibile a breve"
  },
  "newTraverse": {
    "invalidBearingMessage": "Rilevamento non valido.",
    "invalidLengthMessage": "Lunghezza non valida.",
    "negativeLengthMessage": "Lunghezza negativa"
  },
  "reportsTab": {
    "aoiAreaText": "Superficie AOI",
    "downloadButtonTooltip": "Scarica",
    "printButtonTooltip": "Stampa",
    "uploadShapefileForAnalysisText": "Carica shapefile da includere nell'analisi",
    "uploadShapefileForButtonText": "Sfoglia",
    "downloadLabelText": "Seleziona formato:",
    "downloadBtnText": "Scarica",
    "noDetailsAvailableText": "Nessun risultato trovato",
    "featureCountText": "Conteggio",
    "featureAreaText": "Area",
    "featureLengthText": "Lunghezza",
    "attributeChooserTooltip": "Seleziona attributi da visualizzare",
    "csv": "CSV",
    "filegdb": "File geodatabase",
    "shapefile": "Shapefile",
    "noFeaturesFound": "Nessun risultato trovato per il formato file selezionato",
    "selectReportFieldTitle": "Seleziona campi",
    "noFieldsSelected": "Nessun campo selezionato",
    "intersectingFeatureExceedsMsgOnCompletion": "È stato raggiunto il numero massimo di record per uno o più layer.",
    "unableToAnalyzeText": "Impossibile analizzare, numero massimo di record raggiunto.",
    "errorInPrintingReport": "Impossibile stampare il report. Controllare che le impostazioni del report siano valide.",
    "aoiInformationTitle": "Informazioni area di interesse (AOI)",
    "summaryReportTitle": "Riepilogo",
    "notApplicableText": "N/A",
    "downloadReportConfirmTitle": "Conferma download",
    "downloadReportConfirmMessage": "Eseguire il download?",
    "noDataText": "Nessun dato",
    "createReplicaFailedMessage": "Operazione di download fallita per il/i layer seguente/i: <br/> ${layerNames}",
    "extractDataTaskFailedMessage": "Operazione di download fallita.",
    "printLayoutLabelText": "Layout",
    "printBtnText": "Stampa",
    "printDialogHint": "Nota: il titolo del report e i commenti possono essere modificati nell'anteprima del report.",
    "unableToDownloadFileGDBText": "Il file geodatabase non può essere scaricato per l'AOI contenente posizioni di punto o linea",
    "unableToDownloadShapefileText": "Lo shapefile non può essere scaricato per l'AOI contenente posizioni di punto o linea",
    "analysisAreaUnitLabelText": "Mostra risultati di area in:",
    "analysisLengthUnitLabelText": "Mostra risultati di lunghezza in:",
    "analysisUnitButtonTooltip": "Scegliere le unità per l’analisi",
    "analysisCloseBtnText": "Chiudere",
    "areaSquareFeetUnit": "Piedi quadrati",
    "areaAcresUnit": "Acri",
    "areaSquareMetersUnit": "Metri quadrati",
    "areaSquareKilometersUnit": "Chilometri quadrati",
    "areaHectaresUnit": "Ettari",
    "areaSquareMilesUnit": "Miglia quadrate",
    "lengthFeetUnit": "Piedi",
    "lengthMilesUnit": "Miglia",
    "lengthMetersUnit": "Metri",
    "lengthKilometersUnit": "Chilometri",
    "hectaresAbbr": "ettari",
    "squareMilesAbbr": "Miglia quadrate",
    "layerNotVisibleText": "Impossibile eseguire l’analisi. Il layer è disattivato o l’intervallo di visibilità è fuori scala.",
    "refreshBtnTooltip": "Aggiorna report",
    "featureCSVAreaText": "Area dell’intersezione",
    "featureCSVLengthText": "Lunghezza dell’intersezione",
    "errorInFetchingPrintTask": "Errore durante il recupero delle informazioni di stampa. Riprovare.",
    "selectAllLabel": "Seleziona tutto",
    "errorInLoadingProjectionModule": "Errore durante il caricamento delle dipendenze del modulo di proiezione. Provare a scaricare di nuovo il file.",
    "expandCollapseIconLabel": "Feature intersecate",
    "intersectedFeatureLabel": "Dettaglio feature intersecata",
    "valueAriaLabel": "Valore",
    "countAriaLabel": "Conteggio",
    "layerNameWithFeatureCount": "${layerName} layer con ${featureCount} feature intersecanti",
    "sortingSettingsLegend": "Impostazioni di ordinamento",
    "ascendingLabel": "Crescente",
    "descendingLabel": "Decrescente",
    "sortFieldSelectLabel": "Seleziona il campo di ordinamento",
    "errorLabel": "Il server ha incontrato un errore temporaneo e non ha potuto completare la query.",
    "statisticsCountLabel": "Statistiche: Conteggio",
    "statisticsTotalLengthLabel": "Statistiche: Lunghezza totale",
    "statisticsTotalAreaLabel": "Statistiche: Area totale",
    "timedOutErrorLabel": "Il server è scaduto",
    "sortHint": "Suggerimento: i campi selezionati sono ordinati solo quando il numero di caratteristiche/gruppi è superiore a 1."
  }
});