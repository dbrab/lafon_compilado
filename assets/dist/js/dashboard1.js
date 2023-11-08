$(function () {
    "use strict";

    //This is for the Notification top right
  /*   $.toast({
            heading: 'Welcome to Elite admin'
            , text: 'Use the predefined ones, or specify a custom position object.'
            , position: 'top-right'
            , loaderBg: '#ff6849'
            , icon: 'info'
            , hideAfter: 3500
            , stack: 6
        }) */
        // Dashboard 1 Morris-chart
    Morris.Area({
        element: 'morris-area-chart2'
        , data: [{
                period: '1'
                , SiteA: 0
                , SiteB: 0
        , }, {
                period: '2'
                , SiteA: 130
                , SiteB: 100
        , }, {
                period: '3'
                , SiteA: 80
                , SiteB: 60
        , }, {
                period: '4'
                , SiteA: 70
                , SiteB: 200
        , }, {
                period: '5'
                , SiteA: 180
                , SiteB: 150
        , }, {
                period: '6'
                , SiteA: 105
                , SiteB: 90
        , }
            , {
                period: '7'
                , SiteA: 250
                , SiteB: 150
        , }]
        , xkey: 'period'
        , ykeys: ['SiteA', 'SiteB']
        , labels: ['Site A', 'Site B']
        , pointSize: 0
        , fillOpacity: 0.4
        , pointStrokeColors: ['#b4becb', '#01c0c8']
        , behaveLikeLine: true
        , gridLineColor: '#e0e0e0'
        , lineWidth: 0
        , smooth: false
        , hideHover: 'auto'
        , lineColors: ['#b4becb', '#01c0c8']
        , resize: true
    });
});    
    // sparkline
    var sparklineLogin = function() { 
        $('#sales1').sparkline([20, 40, 30], {
            type: 'pie',
            height: '90',
            resize: true,
            sliceColors: ['#01c0c8', '#7d5ab6', '#ffffff']
        });
        $('#sparkline2dash').sparkline([6, 10, 9, 11, 9, 10, 12], {
            type: 'bar',
            height: '154',
            barWidth: '4',
            resize: true,
            barSpacing: '10',
            barColor: '#25a6f7'
        });
        
    };    
    var sparkResize;
 
        $(window).resize(function(e) {
            clearTimeout(sparkResize);
            sparkResize = setTimeout(sparklineLogin, 500);
        });
        sparklineLogin();
