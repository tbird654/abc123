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
                        <h1 class="section-headline text-center mt-50">
                            <img class="primary-logo" alt="MINDBODY" src="projects/img/mindbody/MB-logo-horizontal-primary-radiance.svg" style="width: 300px;">
                        </h1>
                        <h2 class="section-subhead text-center limit-width-700 mt-20">
                            EAC Product Development Solutions provides innovative solutions that transform the way companies design, manufacture, connect to, and service their products.
                        </h2>
                        <div class="project-areas center-all mt-20">
                            Strategy / UX/UI Design / Front-End Dev
                        </div>

                        <section class="container mt-75">
                            <div class="row mb-50">
                                <div class="col-sm-6 col-md-4 intro-block">
                                    <div class="intro-block-title">
                                        The Goal
                                    </div>
                                    <div class="intro-block-body">
                                        Redesign how Ready Surgery communicates surgical risk within the larger context of the app.
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-4 intro-block">
                                    <div class="intro-block-title">
                                        My Role
                                    </div>
                                    <div class="intro-block-body">
                                        Redesign how Ready Surgery communicates surgical risk within the larger context of the app.
                                    </div>
                                </div>
                                <div class="col-sm-12 col-md-4 intro-block">
                                    <div class="intro-block-title">
                                        Constraints
                                    </div>
                                    <div class="intro-block-body">
                                        Redesign how Ready Surgery communicates surgical risk within the larger context of the app.
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </header>

                <main class="mt-75">
                    <!--                    <section class="work-item work-text-over">-->
                    <!--                        <div class="work-item-bg" style="background-image: url('projects/img/eac/eac-thingworx-bg.jpg');">-->
                    <!--                            <div class="work-item-bg-content">-->
                    <!--                                <div class="the-goal">-->
                    <!--                                    Project Mission-->
                    <!--                                </div>-->
                    <!--                                <div class="work-item-bg-body">-->
                    <!--                                    Deliver a custom responsive experience that was both unique, and highly intuitive for customers visiting the site from all points in the sales funnel.-->
                    <!--                                    Make it beautiful. Make it maintainable.-->
                    <!--                                </div>-->
                    <!--                            </div>-->
                    <!--                        </div>-->
                    <!--                    </section>-->

                    <section class="work-item work-image-only blog-sec-1 mt-75">
                        <div class="container">
                            <div class="work-section-title">
                                Welcome & Empty States
                            </div>
                        </div>
                        <div class="text-center">
                            <img data-aos="fade-up" src="img/blog-sample-2.png" alt="" style="width: 100%; max-width: 1280px; margin: auto;">
                        </div>
                    </section>

                    <section class="work-item work-grid container-fluid">
                        <div class="row">
                            <div class="col-md-6">
                                <img src="img/eac-project-thumb.jpg">
                            </div>
                            <div class="col-md-6">
                                <img src="img/eac-project-thumb.jpg">
                            </div>
                        </div>
                    </section>


                    <section class="flex-test" style="background: red; height: 100vh;">
                        <div class="flex">
                            left
                        </div>
                        <div class="flex--vertical">
                            <div class="flex-child">one</div>
                            <div class="flex-child">two</div>
                        </div>
                    </section>

                </main>

            </div>
            <?php include('../parts/menu.php'); ?>

        </div>
    </div>
<?php include('../parts/footer.php'); ?>