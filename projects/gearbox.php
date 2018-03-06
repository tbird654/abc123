<?php
$metaTitle = 'This is the EAC Project Page';
$prevProject = 'EAC';
$prevProjectUrl = 'eac.php';
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
                            <img class="primary-logo" alt="EAC Product Development Solutions" src="img/GB-Logo.svg">
                        </h1>
                        <h2 class="section-subhead text-center limit-width-700 mt-20">
                            Gearbox is a creative advertising agency that produces honest, meaningful, strategic work. This is the second time Gearbox trusted me to develop their agency site. I believe I came through, again.
                        </h2>
                        <div class="project-areas center-all mt-20">
                            Strategy / UX/UI / Design / Front-End Dev
                        </div>
                        <div class="center-all mt-20">
                            <a class="live-site-link" href="https://eacpds.com">View Live Site</a>
                        </div>
                    </div>
                </header>

                <main class="mt-75">
                    <section class="work-item work-text-over">
                        <div class="work-item-bg" style="background-image: url('projects/img/gearbox/Gearbox-team-bg.jpg');">
                            <div class="work-item-bg-content">
                                <div class="the-goal">
                                    Project Mission
                                </div>
                                <div class="work-item-bg-body">
                                    Create a space for the agency to showcase its work, display team bios, blog, and act as a contact point for current and prospective customers.
                                    The site needed to be integrated into a CMS to make it easy for team members to manage.
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