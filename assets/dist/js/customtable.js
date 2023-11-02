if ( $.fn.dataTable.isDataTable( '#example23' ) ) {
    table = $('#example23').DataTable();
    table.destroy();
}


$('#example23').DataTable({
    dom: 'Bfrtip',
    buttons: [
        'copy', 'csv', 'excel', 'pdf', 'print'
    ]
});
$('.buttons-copy, .buttons-csv, .buttons-print, .buttons-pdf, .buttons-excel').addClass('btn btn-primary mr-1');