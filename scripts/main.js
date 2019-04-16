$(document).ready(function(){

    // Login and sign up

    $('.signup').click(function(){
        $('#loginForm').hide();
        $('#signUpForm').fadeIn('slow');
    })

    $('.login').click(function(){
        $('#signUpForm').hide();
        $('#loginForm').fadeIn('slow');
        
    })

    // End of login and sign up

    $(document).ready(function () {
        $("#sidebar").mCustomScrollbar({
            theme: "minimal"
        });

        $('#sidebarCollapse').on('click', function () {
            $('#sidebar, #content').toggleClass('active');
            $('.collapse.in').toggleClass('in');
            $('a[aria-expanded=true]').attr('aria-expanded', 'false');
        });

        
            new jBox('Tooltip', {
                attach: '#myTooltip2',
                getTitle: 'data-jbox-title',
                getContent: 'data-jbox-content',
                // content: $('.conn'),
                zIndex: 8000,
                open: 'zoomIn',
                close: 'zoomOut'
        });

    });

    
    // chart

    var ctx = document.getElementById('lineChart1').getContext('2d');
var myChart = new Chart(ctx, {
type: 'line',
data: {
    labels: ['2017-01', '2017-02', '2017-03', '2017-04', '2017-05', '2017-06'],
    datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
            'rgba(66, 235, 66, 0.513)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }]
},
options: {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
}
});
// End of chart

// sidebar custom scroll bar

$("#sidebar").mCustomScrollbar({
    theme: "minimal"
});

// End of custom scroll bar
    
        
        

})