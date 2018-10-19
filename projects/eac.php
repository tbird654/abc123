<?php
$metaTitle = 'This is the EAC Project Page';

$prevProject = 'Gearbox';
$prevProjectUrl = 'gearbox.php';
$nextProject = 'Data-AI';
$nextProjectUrl = 'data-ai.php';

include('../parts/header.php');
?>

<div id="barba-wrapper">
    <div class="barba-container">
        <?php include('../parts/nav.php'); ?>
        <?php include('../parts/work-bar.php'); ?>

        <div id="main" class="work-layout">
            <header>
                <div class="work-intro">
                    <h1 class="section-headline text-center mt-75">
                        <img class="primary-logo" alt="EAC Product Development Solutions" src="img/EAC-Primary-Logo.svg">
                    </h1>
                    <h2 class="section-subhead text-center limit-width-700 mt-20">
                        <strong>EAC Product Development Solutions</strong> provides innovative solutions that transform the way companies design, manufacture, connect to, and service their products.
                    </h2>
                    <div class="project-areas center-all mt-20">
                        Strategy / UX/UI / IA / Design / Dev
                    </div>
                    <div class="center-all mt-20">
                        <a class="live-site-link" href="https://eacpds.com">View Live Site</a>
                    </div>
                </div>
            </header>

            <main class="mt-75">
                <section class="work-item work-text-over">
                    <div class="work-item-bg" style="background-image: url('projects/img/eac/eac-thingworx-bg.jpg');">
                        <div class="work-item-bg-content">
                            <div class="the-goal">
                                Project Mission
                            </div>
                            <div class="work-item-bg-body">
                            Deliver a custom responsive experience that was both unique, and highly intuitive for customers visiting the site from all points in the sales funnel.
                            Make it beautiful. Make it maintainable.
                            </div>
                        </div>
                    </div>
                </section>

                <section class="work-item work-image-only">
                    <img src="img/relate-ui-kit-thumb.png?ver=1" alt="" style="width: 100%; max-width: 1280px; margin: auto;">
                </section>

                <section class="work-item work-grid">
                        <div class="row">
                            <div class="col-md-6">
                                <img src="img/eac-project-thumb.jpg">
                            </div>
                            <div class="col-md-6">
                                <img src="img/eac-project-thumb.jpg">
                            </div>
                        </div>
                </section>

            </main>

        </div>
        <?php include('../parts/menu.php'); ?>

    </div>
</div>
<?php include('../parts/footer.php'); ?>