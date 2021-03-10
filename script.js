var searchBox = $('#searchBox');
var submitBtn = $('button');
var tr = $('tr');


$(document).ready(
    function() {
        $(document).submit(
            function(e) {
            e.preventDefault();
            

            var td = tr.children();

            td.each (function(i){

            var realTd = $(this).text();
            console.log(realTd +` index : ${i}`);

            var boxVal = searchBox.val().toLowerCase();
            console.log(this);
            
            if (realTd == boxVal) {
                $('td').hide(0);
                $('tbody > tr > th').hide(0);


                $(this).parent().children().show(0); 

                return false;
            } 
            else {
                $('td').show();
                $('th').show();
                
            }
        });
        

       
    }
);
});