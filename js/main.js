$(initPage())
$('.portfolio-item').click(renderModal)
$('.send-mail').click(sendMail)

function sendMail() {
    var mail = $('.mail').val()
    var subject = $('.subject').val()
    var mess = $('.mess').val()
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=yaakovmargalit@gmail.com&su=${subject}&body=${mess}`);
}

function initPage() {
    renderProtfolio()
}

function renderProtfolio() {
    var strHtml = getProtfolio().map((proj) => {
        return `<div id='${proj.id}' class="col-md-4 col-sm-6 portfolio-item">
<a  class="portfolio-link" data-toggle="modal" href="#portfolioModal">
    <div class="portfolio-hover">
        <div class="portfolio-hover-content">
            <i class="fa fa-plus fa-3x"></i>
        </div>
    </div>
    <img class="img-fluid" src="img/portfolio/${proj.id}.png" alt="">
</a>
<div class="portfolio-caption">
    <h4>${proj.name}</h4>
    <p class="text-muted">${proj.title}</p>
</div>
</div>`
    })
    $('.portfolio-list').html(strHtml)
}


function renderModal() {
    var projId = this.id
    var currProj = getProjById(projId)
    console.log(currProj)
    var strHtml = `<h2>${currProj.name}</h2>
    <p class="item-intro text-muted">${currProj.title}</p>
    <img class="img-fluid d-block mx-auto" src="img/portfolio/${currProj.id}.png" alt="">
    <p>${currProj.desc}</p>
    <a href="${currProj.link}" target="_blank">Open Project</a>
    <ul class="list-inline">
        <li>Date: January 2017</li>
        <li>Client: Threads</li>
        <li>Category: Illustration</li>
    </ul>`
    $('.modal-body').html(strHtml)
}